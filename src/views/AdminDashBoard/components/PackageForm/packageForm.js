import {Edit} from '@mui/icons-material'
import {Box, IconButton, Typography} from '@mui/material'
import React from 'react'
import {CustomButton, CustomTextBox} from '../../../../components'
import MyDiv from './packageForm.style'

export default function PackageForm(props) {
  return (
    <MyDiv>
      <Box className="text_boxes">
        <Typography className="title_text2">Package Name<span> *</span></Typography>
        <CustomTextBox value={props?.packageData?.name} name="name" onChange={props.handleChange}
          error={props.errorData?.name[0]} startIcon={<IconButton tabIndex="-1" className="icn_fix"><Edit className="icn_size" /></IconButton>}
        />
      </Box>
      <Box className="text_boxes">
        <Typography className="title_text2">Price<span> *</span></Typography>
        <CustomTextBox value={props?.packageData?.amount} name="amount" onChange={props.handleChange}
          error={props.errorData?.amount[0]} startIcon={<IconButton tabIndex="-1" className="icn_fix"><Edit className="icn_size" /></IconButton>}
        />
      </Box>
      <Box className="flex_btn">
        <CustomButton onClick={props.handleSubmit} className="btn_submit" title="Submit" />
        <CustomButton onClick={props.handleClick} className="btn_cancel" title="Cancel" />
      </Box>
    </MyDiv>
  )
}
