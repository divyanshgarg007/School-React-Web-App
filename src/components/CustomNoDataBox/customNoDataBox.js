import React from 'react'
import {Box, IconButton, Typography} from '@mui/material'
import {Link} from 'react-router-dom'
import MyDiv from './customNoDataBox.style'
export default function CustomNoDataBox(props) {
  return (
    <MyDiv>
      <Box className="main_box">
        <Box className="alert_box">
          <Box>
            <IconButton disabled className={props.className1}>{props.startIcon}</IconButton>
          </Box>
          <Typography className="title2_text">{props.title2}</Typography>
          <Link onClick={props.handleEmptyState} className="title3_text">{props.title3}</Link>
        </Box>

      </Box>
    </MyDiv>
  )
}
