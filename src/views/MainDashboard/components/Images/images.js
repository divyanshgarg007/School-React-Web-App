import React from 'react'
import {Images} from '../../../../components/UserInfo'
import MyDiv from './images.style'

export default function About(props) {
  return (
    <MyDiv>
      <Images teachersData={props.teachersData} />
    </MyDiv>
  )
}
