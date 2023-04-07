import React from 'react'
import {Typography, Divider, Box, IconButton, ImageList, ImageListItem} from '@mui/material'
import {useTranslation} from 'react-i18next'
import {Close, Upload} from '@mui/icons-material'
import {CustomButton} from '../../../../components'
import MyDiv from './galleryBottomContainer.style'

const GalleryBottomContainer = (props) => {
  const {t} = useTranslation()

  return (
    <MyDiv>
      <Box mb={3}>
        <Typography className="main_title">{t('ImageGallery')}</Typography>
        <Divider style={{background: '#1D3160'}} />
        <Typography className="description">{t('txt3')}</Typography>
        <CustomButton onClick={props.showOpenFileDialogMultiple} title={t('Upload')} className="upload_btn" startIcon={<Upload />} />
        <input
          ref={props.imageRefMultiple}
          type="file"
          style={{display: 'none'}}
          accept="image/*"
          multiple
          onChange={props.onSelectFile}
        />
        <Box className="image_box">
          <ImageList cols={4} gap={8} variant="masonry">
            {props.imageGallery?.map((item, index) => (
              <ImageListItem key={index}>
                <IconButton onClick={(e) => props.handleDeleteImage(e, item.id)} className="delete_icon"><Close /></IconButton>
                <img src={item.media_url} />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Box>
    </MyDiv>
  )
}


export default GalleryBottomContainer

