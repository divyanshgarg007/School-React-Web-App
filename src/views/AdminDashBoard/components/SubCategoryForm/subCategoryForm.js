import {Edit, Upload} from '@mui/icons-material'
import {Box, FormControl, IconButton, MenuItem, Select, Typography} from '@mui/material'
import {styled} from '@mui/system'
import React from 'react'
import {useTranslation} from 'react-i18next'
import {CustomTextBox} from '../../../../components'
import {CustomButton} from '../../../../components/Inputs'
import MyDiv from './subCategoryForm.style'

const ITEM_HEIGHT = 60
const Menu = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5,
    },
  },
}
const CustomMenuItem = styled(MenuItem)(({theme}) => ({
  '&.MuiMenuItem-root': {
    backgroundColor: '#EDF2F7',
    fontFamily: 'Proxima Nova',
    fontSize: '15px',
    fontWeight: '600',
    color: '#000000',
  },
  '&.MuiMenuItem-root:nth-child(2)': {
    borderTop: '3px solid #1D3160',
    marginTop: '-8px',
  },
  '&.MuiMenuItem-root:last-child': {
    marginBottom: '-8px',
  },
}))

const Placeholder = styled(MenuItem)(({theme}) => ({
  '&.MuiMenuItem-root': {
    display: 'none',
  },
}))

export default function SubCategoryForm(props) {
  const {t} = useTranslation()
  return (
    <MyDiv>
      <Box>
        <Box className="text_boxes">
          <Typography className="title_text2">Category Name<span> *</span></Typography>
          <FormControl fullWidth>
            <Select
              MenuProps={Menu}
              value={props.subCategoryData.category_id || 0}
              name="category_id"
              onChange={props.handleChange}
              className="mu_data"
              error={props?.errorData?.category_id?.[0]}
            >
              <Placeholder value={0}>Category</Placeholder>
              {props.formData?.map((data) => {
                return (
                  <CustomMenuItem key={data.id} value={data.id}>{data.category_name_EN}</CustomMenuItem>
                )
              })}
            </Select>
            <div style={{color: 'red', fontSize: '12px'}}>{props?.errorData?.category_id?.[0]}</div>
          </FormControl>
        </Box>
        <Box className="text_boxes">
          <Typography className="title_text2">Sub-Category Name<span> *</span></Typography>
          <CustomTextBox
            value={props.subCategoryData?.sub_category_name_EN}
            onChange={props.handleChange}
            name="sub_category_name_EN"
            error={props?.errorData?.sub_category_name_EN?.[0]}
            startIcon={<IconButton tabIndex="-1" className="icn_fix">
              <Edit className="icn_size" />
            </IconButton>}
          />
        </Box>
        <Box className="text_boxes">
          <Typography className="title_text2">Sub-Category Name (Greek)<span> *</span></Typography>
          <CustomTextBox value={props.subCategoryData?.sub_category_name_GK}
            onChange={props.handleChange}
            name="sub_category_name_GK"
            startIcon={<IconButton tabIndex="-1" className="icn_fix">
              <Edit className="icn_size" />
            </IconButton>}
          />
        </Box>
        <Box className="upload_box" mt={2}>
          <CustomButton className="upload_btn" title="Upload Image" onClick={props.showOpenFileDialog} startIcon={<Upload />} />
          <input
            ref={props.imageRef}
            type="file"
            style={{display: 'none'}}
            accept="image/*"
            onChange={props.handleChangeCategoryImage}
          />
          <img src={props.file} className="img_style" />
        </Box>
        {/* <Box className="text_boxes">
          <Typography className="title_text2">{t('Description')}</Typography>
          <CustomTextArea error={props?.errorData?.description?.[0]}
            value={props.subCategoryData?.description} name="description" onChange={props.handleChange}
            className="text_area2"
          />
        </Box> */}
        <Box className="flex_btn">
          <CustomButton onClick={props.handleSubmit} className="btn_submit" title={t('Submit')} />
          <CustomButton className="btn_cancel" title={t('Cancel')} />
        </Box>
      </Box>
    </MyDiv>
  )
}
