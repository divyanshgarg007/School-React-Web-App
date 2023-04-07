import {Typography, Box} from '@mui/material'
import React from 'react'
import MyDiv from './infoCard.style'
export default function InfoCard(props) {
  return (
    <MyDiv>
      <Box className="box_style">
        <Typography className="title_text">Year's sales: €{props.salesData?.total_amount}</Typography>
        <Typography className="title_text">New customers: {props.salesData?.customers}</Typography>
      </Box>
    </MyDiv>
  )
}
