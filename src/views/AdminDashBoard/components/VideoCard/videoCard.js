import React from 'react'
import {Box, Grid, Typography} from '@mui/material'
import MyDiv from './videoCard.style'

export default function VideoCard(props) {
  return (
    <MyDiv>
      <Box className="about_box">
        <Typography className="card_heading">Video Gallery</Typography>
        {/* {props?.customerEditData?.gallery?.video?.live[0]?.media_url} */}
        <Box className="image_wrapper">
          <Grid container className="image_list" columnSpacing={{sm: 4, md: 4}}>
            {props?.customerEditData?.gallery?.video?.is_changed ?
              props?.customerEditData?.gallery?.video?.version?.map((item, index) => {
                return (
                  <Grid item md={4} key={index} className="video_space">
                    {/* <video
                      src={item?.media_url}
                      srcSet={item?.media_url}
                      alt={item?.media_type}
                      loading="lazy"
                      controls
                      className={props?.customerEditData?.gallery?.video?.is_changed ? 'updated_video' : 'existing_video'}
                    /> */}
                    <iframe
                      className={props?.customerEditData?.gallery?.video?.is_changed ? 'updated_video' : 'existing_video'}
                      src={item?.media_url.replace('watch?v=', 'embed/')} height="150px" width="250px"
                    />
                  </Grid>
                )
              })
              :
              props?.customerEditData?.gallery?.video?.live?.map((item, index) => {
                return (
                  <Grid item md={4} key={index} className="video_space">
                    {/* <video
                      src={item?.media_url}
                      srcSet={item?.media_url}
                      alt={item?.media_type}
                      loading="lazy"
                      controls
                      className={props?.customerEditData?.gallery?.video?.is_changed ? 'updated_video' : 'existing_video'}
                    /> */}
                    <iframe
                      className={props?.customerEditData?.gallery?.video?.is_changed ? 'updated_video' : 'existing_video'}
                      src={item?.media_url.replace('watch?v=', 'embed/')} height="150px" width="250px"
                    />
                  </Grid>
                )
              })
            }
          </Grid>
        </Box>
      </Box>
    </MyDiv>
  )
}
