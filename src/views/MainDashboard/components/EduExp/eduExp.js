import {Box} from '@mui/material'
import React from 'react'
import {Education, Experience} from '../../../../components/UserInfo'
import MyDiv from './eduExp.style'
export default function EduExp(props) {
  return (
    <MyDiv>
      <Box className="edexp_box">
        <Education teachersData={props.teachersData} />
        <Experience teachersData={props.teachersData} />
      </Box>
    </MyDiv>
  )
}
