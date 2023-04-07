import {Box, Divider, Grid, Typography} from '@mui/material'
import React, {useEffect, useState} from 'react'
import {connect, useSelector} from 'react-redux'
import {bindActionCreators} from 'redux'
import {ActionCreators} from '../../../../redux/actions'
import Chart from '../Chart'
import InfoCard from '../InfoCard'
import MyDiv from './sales.style'

const Sales = (props) => {

  const [salesData, setSalesData] = useState()
  const globalState = useSelector((state) => state.globalState)

  useEffect(() => {
    props.actions.getStaticAdminDataAction()
  }, [])

  useEffect(() => {
    setSalesData(globalState?.getStaticAdminData?.data?.data?.payload)
  }, [globalState?.getStaticAdminData])

  return (
    <MyDiv>
      <Box className="main_box">
        <Typography className="page_title">Sales Overview</Typography>
        <Grid container className="chart_box">
          <Grid item md={8}>
            <Chart salesData={salesData?.monthly_sales} />
          </Grid>
          <Grid item md={4}>
            <InfoCard salesData={salesData?.all_sales} />
          </Grid>
        </Grid>
        <Grid container rowSpacing={4} columnSpacing={{sm: 4, md: 4}}>
          <Grid item md={3}>
            <Box className="grid_cards">
              <Typography className="card_title">To-date sales</Typography>
              <Divider />
              <InfoCard salesData={salesData?.current_year_sales} />
            </Box>
          </Grid>
          <Grid item md={3}>
            <Box className="grid_cards">
              <Typography className="card_title">Next year estimation</Typography>
              <Divider />
              <InfoCard />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </MyDiv>
  )
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ActionCreators, dispatch),
})

export default connect(null, mapDispatchToProps)(Sales)
