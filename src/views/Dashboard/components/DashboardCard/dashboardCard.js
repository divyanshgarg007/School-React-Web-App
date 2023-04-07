import React from 'react'
import PropTypes from 'prop-types'
import {Card, Box, CardContent, Typography} from '@mui/material'
import MyDiv from './dashboardCard.style'

export default function DashboardCard(props) {
  return (
    <MyDiv>
      <Card className="card_box">
        <Box>{props.icon}</Box>
        <CardContent>
          <Typography className="dash_texts" gutterBottom variant="h6" component="div">
            {props.title}
          </Typography>
          <Typography className="dash_texts2" gutterBottom variant="h7" component="div">
            {props.subtitle}
          </Typography>
        </CardContent>
      </Card>
    </MyDiv>
  )
}
DashboardCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
}
