import {Box} from '@mui/material'
import moment from 'moment'
import React from 'react'
import {VictoryBar, VictoryChart, VictoryAxis, VictoryTooltip} from 'victory'
import MyDiv from './chart.style'

export default function Chart(props) {
  const generateLabel = (dataArray) => {
    return (
      `${moment(dataArray?.month).format('MMMM YYYY')
      }\n Visits:${
        dataArray?.views}`
    )
  }
  let data = []
  props?.dataStatic?.map((elem, index) => {
    data.push({
      visits: index + 1, // fixed visits index
      months: elem.views, // fixed months calculation
      label: generateLabel(elem),
    })
  })


  const arr = []

  for (let i = 0; i < props?.dataStatic?.length; i++) {
    arr.push(props?.dataStatic[i].month)
  }

  const monthNames = []

  for (let i = 0; i < arr.length; i++) {
    const monthName = moment(arr[i], 'YYYY-MM').format('MMM')
    monthNames.push(monthName)
  }


  return (
    <MyDiv>
      <Box>
        <VictoryChart domainPadding={0}>
          <VictoryAxis
            tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
            tickFormat={monthNames}
          />
          <VictoryAxis dependentAxis tickFormat={(x) => `${x / 2}`} domainPadding={25} />
          <VictoryBar
            labelComponent={
              <VictoryTooltip
                flyoutWidth={150}
                flyoutHeight={100}
                flyoutStyle={{
                  fill: '#ffffff',
                }}
                cornerRadius={({datum}) => datum.x > 6 ? 0 : 5}
                pointerLength={({datum}) => datum.y > 0 ? 5 : 3}
              />}
            style={{data: {fill: '#f0cb47', barWidth: 15}}}
            barWidth={15}
            barRatio={0.6}
            data={data} x="visits" y="months"
            alignment="start"
          />
        </VictoryChart>
      </Box>
    </MyDiv>
  )
}
