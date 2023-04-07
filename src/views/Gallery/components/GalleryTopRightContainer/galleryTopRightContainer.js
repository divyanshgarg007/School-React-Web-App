import React from 'react'
import {Typography, Divider, Box, IconButton} from '@mui/material'
import {Add, VideoFile, Close} from '@mui/icons-material'
import {useTranslation} from 'react-i18next'
import {CustomButton, CustomTextBox} from '../../../../components'
import MyDiv from './galleryTopRightContainer.style'

const GalleryTopRightContainer = (props) => {
  const {t} = useTranslation()
  return (
    <MyDiv>
      <Box mb={3}>
        <Box>
          <Typography className="main_title">{t('Videos')}</Typography>
          <Divider style={{background: '#1D3160'}} />
          <Typography className="description">{t('txt2')}</Typography>
          <Typography className="label_name">{t('YoutubeLink')}<span> *</span></Typography>
          <CustomTextBox value={props.videoLinkData?.video_url ?? ''} name="video_url" onChange={props.handleChangeUrl} className="textbox_value" fieldLabel="Link" />
          <CustomButton onClick={props.handleAddNew} title={t('AddVideo')}startIcon={<Add />} className="add_btn" />
        </Box>
        <Box className="video_links">
          {props?.videoLink?.map((item, index) => {
            return (
              <Box className="link_box" key={index}>
                <Box className="link_label">
                  <VideoFile />
                  <Typography>{item.media_url}</Typography>
                </Box>
                <IconButton className="delete_icon" onClick={(e) => props.handleDeleteVideoLink(e, item.id)}><Close /></IconButton>
              </Box>
            )
          })}
        </Box>
      </Box>
    </MyDiv>
  )
}


export default GalleryTopRightContainer
