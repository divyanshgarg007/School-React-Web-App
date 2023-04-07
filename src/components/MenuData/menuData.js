import {Box, Divider, MenuItem, Typography} from '@mui/material'
import React from 'react'
import MyDiv from './menuData.style'
export default function MenuData(props) {


  return (
    <MyDiv>
      <Box className="menu_data">
        <Typography className="title_text1">{props.categoryName}</Typography>
        <Divider sx={{width: '150px', backgroundColor: '#FFFFFF'}} />
        <Box className="subcat_listbox">
          <MenuItem className="title_text2">{props.subCategory1}</MenuItem>
          <MenuItem className="title_text2">{props.subCategory2}</MenuItem>
          <MenuItem className="title_text2">{props.subCategory3}</MenuItem>
          <MenuItem className="title_text2">{props.subCategory4}</MenuItem>
          <MenuItem className="title_text2">{props.subCategory5}</MenuItem>
        </Box>
      </Box>
    </MyDiv>
  )
}
