import React from 'react'
import {Box, ImageList, ImageListItem, Typography} from '@mui/material'
import MyDiv from './imageCard.style'

export default function ImageCard(props) {
  return (
    <MyDiv>
      <Box className="about_box">
        <Typography className="card_heading">Image Gallery</Typography>
        <Box className="image_wrapper">
          <ImageList variant="masonry" cols={5} gap={8} className="image_list">
            {props?.customerEditData?.gallery?.images?.is_changed ?
              props?.customerEditData?.gallery?.images?.version?.map((item, index) => {
                return (
                  <ImageListItem key={index}>
                    <img
                      src={item?.media_url}
                      srcSet={item?.media_url}
                      alt={item?.media_type}
                      loading="lazy"
                      className={props?.customerEditData?.gallery?.images?.is_changed ? 'updated_img' : 'existing_img'}
                    />
                  </ImageListItem>
                )
              })
              :
              props?.customerEditData?.gallery?.images?.live?.map((item, index) => {
                return (
                  <ImageListItem key={index}>
                    <img
                      src={item?.media_url}
                      srcSet={item?.media_url}
                      alt={item?.media_type}
                      loading="lazy"
                      className={props?.customerEditData?.gallery?.images?.is_changed ? 'updated_img' : 'existing_img'}
                    />
                  </ImageListItem>
                )
              })
            }
          </ImageList>
        </Box>
      </Box>
    </MyDiv>
  )
}
