import React from 'react'
import {TextareaAutosize} from '@mui/material'
import MyDiv from './customTextArea.style'
export default function CustomTextArea(props) {
  return (
    <MyDiv>
      <TextareaAutosize error={props.error} placeholder={props.fieldlabel} value={props.value} onChange={props.onChange} name={props.name} className={props.className} />
    </MyDiv>
  )
}
