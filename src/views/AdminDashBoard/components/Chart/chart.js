/* eslint-disable react/jsx-indent-props */
import {Box} from '@mui/material'
import moment from 'moment'
import React from 'react'
import {VictoryBar, VictoryChart, VictoryAxis, VictoryTooltip} from 'victory'
import MyDiv from './chart.style'

export default function Chart(props) {
  const generateLabel = (dataArray) => {
    return (
      `${moment(dataArray?.month_date).format('MMMM YYYY')
      }\n Customers:${
        dataArray?.customers}
         Revenue: €${
      dataArray?.amount}`
    )
  }

  let datas = []
  props?.salesData?.map((elem, index) => {
    datas.push({
      quarter: index + 1, // fixed visits index
      earnings: elem.amount, // fixed months calculation
      label: generateLabel(elem),
    })
  })
  // const data = [
  //   {quarter: 1, earnings: 50, label: 'January 2022\n Customers: 50\nRevenue: €300.00'},
  //   {quarter: 2, earnings: 650, label: 'February 2022\n Customers: 50\nRevenue: €300.00'},
  //   {quarter: 3, earnings: 250, label: 'March 2022\n Customers: 50\nRevenue: €300.00'},
  //   {quarter: 4, earnings: 200, label: 'April 2022\n Customers: 50\nRevenue: €300.00'},
  //   {quarter: 5, earnings: 150, label: 'May 2022\n Customers: 50\nRevenue: €300.00'},
  //   {quarter: 6, earnings: 300, label: 'June 2022\n Customers: 50\nRevenue: €300.00'},
  //   {quarter: 7, earnings: 400, label: 'July 2022\n Customers: 50\nRevenue: €300.00'},
  //   {quarter: 8, earnings: 450, label: 'August 2022\n Customers: 50\nRevenue: €300.00'},
  //   {quarter: 9, earnings: 500, label: 'September 2022\n Customers: 50\nRevenue: €300.00'},
  //   {quarter: 10, earnings: 550, label: 'October 2022\n Customers: 50\nRevenue: €300.00'},
  //   {quarter: 11, earnings: 600, label: 'November 2022\n Customers: 50\nRevenue: €300.00'},
  //   {quarter: 12, earnings: 100, label: 'December 2022\n Customers: 50\nRevenue: €300.00'},
  // ]


  const arr = []

  for (let i = 0; i < props?.salesData?.length; i++) {
    arr.push(props?.salesData[i].month_date)
  }

  const monthNames = []

  for (let i = 0; i < arr.length; i++) {
    const monthName = moment(arr[i], 'YYYY-MM').format('MMM')
    monthNames.push(monthName)
  }
  return (
    <MyDiv>
      <Box>
        <VictoryChart domainPadding={3} >
          <VictoryAxis
            tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
            tickFormat={monthNames}
          />
          <VictoryAxis dependentAxis tickFormat={(x) => `${x / 2}`} domainPadding={25} />
          <VictoryBar labelComponent={
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
          data={datas}
          x="quarter" y="earnings"
          alignment="start"
          />
        </VictoryChart>
      </Box>
    </MyDiv>
  )
}
