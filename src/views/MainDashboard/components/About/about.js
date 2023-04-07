import React from 'react'
import {Location, MainInfo} from '../../../../components/UserInfo'
import MyDiv from './about.style'
export default function About(props) {
  return (
    <MyDiv>
      <MainInfo teachersData={props.teachersData} />
      <Location teachersData={props.teachersData} />
    </MyDiv>
  )
}
