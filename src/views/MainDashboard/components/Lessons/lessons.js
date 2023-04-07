/* eslint-disable no-unused-vars */
import {Box} from '@mui/material'
import React from 'react'
import {LessonAbout} from '../../../../components/UserInfo'
import MyDiv from './lessons.style'
export default function Lessons(props) {
  return (
    <MyDiv>
      <Box className="main_box">
        <LessonAbout teachersData={props.teachersData} />
      </Box>
    </MyDiv>
  )
}
