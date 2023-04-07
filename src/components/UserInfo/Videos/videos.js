import {Grid, Box, Typography} from '@mui/material'
import React from 'react'
import {useTranslation} from 'react-i18next'
import MyDiv from './videos.style'
export default function Videos(props) {
  const {t} = useTranslation()
  return (
    <MyDiv>
      <Box className="main_box">
        <Box className="card_box">
          <Typography className="heading_name">{t('VideoGallery')}</Typography>
          <Grid container rowSpacing={2} columnSpacing={{sm: 4, md: 4}} className="video_box">
            {props.teachersData?.data?.gallery?.video.map((item, index) => {
              return (
                <Grid item md={4} xs={12} key={index}>
                  {/* <video className="video_media"
                    src={item?.media_url}
                    srcSet={item?.media_url}
                    alt={item?.media_type}
                    loading="lazy"
                    controls
                    autoPlay
                  /> */}
                  {/* eslint-disable-next-line prefer-template */}
                  <iframe src={item?.media_url.replace('watch?v=', 'embed/')} height="150px" width="250px" />
                </Grid>
              )
            })}
          </Grid>
        </Box>
      </Box>
    </MyDiv>
  )
}
