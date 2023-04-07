import React from 'react'
import {Box, Typography, IconButton} from '@mui/material'
import {Edit, Upload} from '@mui/icons-material'
import {useTranslation} from 'react-i18next'
import {CustomTextBox, CustomButton} from '../../../../components'
import MyDiv from './categoryForm.style'

export default function CategoryForm(props) {
  const {t} = useTranslation()
  return (
    <MyDiv>
      <Box>
        <Box className="text_boxes">
          <Typography className="title_text2">Category Name<span> *</span></Typography>
          <CustomTextBox value={props?.categoryData?.category_name_EN} name="category_name_EN" onChange={props.handleChange} fieldLabel={t('freetext')}
            error={props?.errorData?.category_name_EN?.[0]} startIcon={<IconButton tabIndex="-1" className="icn_fix"><Edit className="icn_size" /></IconButton>}
          />
        </Box>
        <Box className="text_boxes">
          <Typography className="title_text2">Category Name (Greek)<span> *</span></Typography>
          <CustomTextBox value={props?.categoryData?.category_name_GK} name="category_name_GK" onChange={props.handleChange} fieldLabel={t('freetext')}
            startIcon={<IconButton tabIndex="-1" className="icn_fix"><Edit className="icn_size" /></IconButton>}
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
        <Box className="flex_btn">
          <CustomButton onClick={props.handleSubmit} className="btn_submit" title={t('Submit')} />
          <CustomButton onClick={props.handleClick} className="btn_cancel" title={t('Cancel')} />
        </Box>
      </Box>
    </MyDiv>
  )
}

