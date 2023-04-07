/* eslint-disable no-unused-vars */
import React from 'react'
import {Box, Divider, Typography, IconButton} from '@mui/material'
import {Image, Upload} from '@mui/icons-material'
import {useTranslation} from 'react-i18next'
import {CustomButton} from '../../../../components'
import MyDiv from './galleryTopLeftContainer.style'

const GalleryTopLeftContainer = (props) => {
  const {t} = useTranslation()
  return (
    <MyDiv>
      <Box mb={3}>
        <Typography className="main_title">{t('CoverImage')}</Typography>
        <Divider style={{background: '#1D3160'}} />
        <Typography className="description">{t('txt1')}</Typography>
        {!props.file ?
          <>
            <IconButton disabled className="icn_btn"><Image /></IconButton>
            <CustomButton onClick={props.showOpenFileDialog} title={t('Upload')} className="upload_btn" startIcon={<Upload />} /><input
              ref={props.imageRef}
              type="file"
              style={{display: 'none'}}
              accept="image/*"
              onChange={props.handleChange}
            />
          </> : <Box className="image_box">
            <img src={props.file} className="img_style" />
            <CustomButton onClick={props.handleDeleteCoverImage} className="remove_btn" title={t('RemoveImage')} />
          </Box>
        }

      </Box>
    </MyDiv>
  )
}

export default GalleryTopLeftContainer
