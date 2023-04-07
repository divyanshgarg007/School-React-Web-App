import {Edit} from '@mui/icons-material'
import {Box, Grid, IconButton, Typography} from '@mui/material'
import React from 'react'
import CustomTextBox from '../../../../components/Inputs/TextBox'
import MyDiv from './packagesEdit.style'
export default function PackagesEdit() {
  return (
    <MyDiv>
      <Box className="main_box">
        <Typography className="typo_text">Name<span> *</span></Typography>
        <Grid container md={12}><CustomTextBox startIcon={<IconButton tabIndex="-1" className="icn_clr"><Edit className="icn_size" /></IconButton>} /></Grid>
        <Typography className="typo_text">Price<span> *</span></Typography>
        <Grid container md={12}><CustomTextBox startIcon={<IconButton tabIndex="-1" className="icn_clr"><Edit className="icn_size" /></IconButton>} /></Grid>
      </Box>
    </MyDiv>
  )
}
