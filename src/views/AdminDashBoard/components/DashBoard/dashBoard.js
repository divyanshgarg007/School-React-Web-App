import {Box, Typography, Grid} from '@mui/material'
import React from 'react'
import InfoCard from '../InfoCard'
import MyDiv from './dashBoard.style'
export default function DashBoard() {
  return (
    <MyDiv>
      <Box className="main_box">
        <Typography mb={2} className="page_title">Welcome Marios</Typography>
        <Box mb={6}>
          <Typography className="text_typo2">Current month</Typography>
          <Grid container rowSpacing={4} columnSpacing={{sm: 4, md: 4}}>
            <Grid item md={4}>
              <InfoCard title1="Sales" title2="€300.00" />
            </Grid>
            <Grid item md={4}>
              <InfoCard title1="New customers" title2="4" />
            </Grid>
          </Grid>
        </Box>
        <Box mb={6}>
          <Typography mt={1} className="text_typo2">Approvals</Typography>
          <Grid container rowSpacing={4} columnSpacing={{sm: 4, md: 4}}>
            <Grid item md={4}>
              <InfoCard title1="New registrations" title2="5" />
            </Grid>
            <Grid item md={4}>
              <InfoCard title1="Amendments" title2="15" />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </MyDiv>
  )
}

