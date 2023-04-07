import {Grid, ImageList, ImageListItem, Typography, Box} from '@mui/material'
import React from 'react'
import {useTranslation} from 'react-i18next'
import MyDiv from './images.style'

export default function Images(props) {
  const {t} = useTranslation()
  return (
    <MyDiv>
      <Box className="main_box">
        <Grid className="card_box" container>
          <Typography className="heading_name">{t('ImageGallery')}</Typography>
          <Grid item md={12}>
            <ImageList variant="masonry" className="image_list">
              {props.teachersData?.data?.gallery?.images.map((item, index) => (
                <ImageListItem key={index}>
                  <img
                    src={item.media_url}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Grid>
        </Grid>
      </Box>
    </MyDiv>
  )
}
