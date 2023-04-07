import React from 'react'
import {Videos} from '../../../../components/UserInfo'
import MyDiv from './videos.style'
export default function Video(props) {
  return (
    <MyDiv>
      <Videos teachersData={props.teachersData} />
    </MyDiv>
  )
}
