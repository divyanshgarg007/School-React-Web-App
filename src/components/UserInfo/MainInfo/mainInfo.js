/* eslint-disable prefer-template */
import {LocationOn, NearMe, Public} from '@mui/icons-material'
import {Box, Grid, IconButton, Typography, Link} from '@mui/material'
import React from 'react'
import {useTranslation} from 'react-i18next'
import MyDiv from './mainInfo.style'

export default function MainInfo(props) {
  const {t} = useTranslation()
  const textHandle = (text) => {
    const regex = /(<([^>]+)>)/ig
    return text?.replace(regex, '')
  }

  const decodeLocation = (lat = 26.93534446180592, lng = 75.83245128384486) => { // hardcoded geo codes for testing purposes
    if (lat && lng) { // validation to check if values exist to reduce the hundreds of calls to just 1 or a few at most
      fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.REACT_APP_MAPS_API_KEY}`
      )
        .then((res) => res.json())
        .then((res) => {
          return <Typography className="data_name">{res.results[0].formatted_address}</Typography>
        })
    }
  }

  return (
    <MyDiv>
      <Box>
        {props.teachersData?.data?.gallery?.coverimage?.[0]?.media_url ?
          <img className="img_style" src={props.teachersData?.data?.gallery?.coverimage?.[0]?.media_url} alt="pic" />
          : <div className="NoBackground" />}
      </Box>
      <Box className="main_box">
        <Box className="card_box">
          <Grid className="main_grid" container>
            <Grid md={12}>
              <Typography className="heading_name">{t('MainInformation')}</Typography>
            </Grid>
            <Grid className="data_grid" container md={12}>
              <Grid item md={4}>
                <Box className="flex_items">
                  <img
                    src={
                      props?.teachersData?.data?.userDetails[0]
                        ?.profile_image
                    }
                    className="avatar_size"
                  />
                  <Box>
                    <Typography className="data_name">
                      {t('About')}{' '}
                      {props?.teachersData?.data?.userDetails?.[0]?.name}
                    </Typography>
                    <Box className="flex_wrapper">
                      <Typography className="data_label">
                        {t('Experience')}:
                      </Typography>
                      <Typography className="data_name">
                        {
                          props?.teachersData?.data?.userDetails[0]
                            ?.experience_name
                        }
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                {props?.teachersData?.data?.userLocation.length !== 0 ?
                  <Box className="flex_items">
                    <IconButton className="list_icons">
                      <LocationOn />
                    </IconButton>
                    <Typography className="text_mobile data_label">
                      {t('Address')}
                    </Typography>
                    <Box>
                      <Typography className="data_name">{props?.teachersData?.data?.userLocation[0]?.address}</Typography>
                      <Typography className="data_name">{props?.teachersData?.data?.userLocation[0]?.city}</Typography>
                      <Typography className="data_name">{props?.teachersData?.data?.userLocation[0]?.state}</Typography>
                      <Typography className="data_name">{props?.teachersData?.data?.userLocation[0]?.country}</Typography>
                      {decodeLocation(props?.teachersData?.data?.userLocation?.[0]?.lat,
                        props?.teachersData?.data?.userLocation?.[0]?.long)}
                    </Box>
                  </Box> : null}

                {props?.teachersData?.data?.userDetails[0]?.website !== '' ?
                  <Box className="flex_items">
                    <IconButton className="list_icons">
                      <Public />
                    </IconButton>
                    <Typography className="text_mobile data_label">
                      {t('Website')}
                    </Typography>
                    <Box>
                      <Typography className="data_name">
                        {props?.teachersData?.data?.userDetails[0]?.website}
                      </Typography>
                    </Box>
                  </Box> : null}
                {props?.teachersData?.data?.userSocialMedia.length !== 0 ?
                  <Box className="flex_items">
                    <IconButton className="list_icons">
                      <NearMe />
                    </IconButton>
                    <Typography className="text_mobile data_label">
                      {t('SocialMedia')}
                    </Typography>
                    {props?.teachersData?.data?.userSocialMedia?.map(
                      (item, index) => {
                        return (
                          <Box key={index} className="flex_btns">
                            <Link href={'https://' + item.url} target="_blank">
                              <img
                                className="icon_btn"
                                src={item?.social_media_icon}
                              />
                            </Link>
                          </Box>
                        )
                      }
                    )}
                  </Box> : null}
              </Grid>
              <Grid item md={8}>
                <Box className="box_space">
                  <Typography className="label_name">{t('AboutMe')}</Typography>
                  <Typography className="title_light">
                    {textHandle(
                      props?.teachersData?.data?.userAboutMe[0]?.about_me
                    )}
                  </Typography>
                </Box>
                <Box className="box_space">
                  <Typography className="label_name">{t('Languages')}</Typography>
                  {props?.teachersData?.data?.userLanguage?.map(
                    (item, index) => {
                      return (
                        <Box className="flex_wrapper" key={index}>
                          <Typography className="title_fade">
                            {item?.language_name}:{' '}
                          </Typography>
                          <Typography className="title_light">
                            {item?.proficiency_name}{' '}
                            {item?.isNative ? ' (native language)' : null}
                          </Typography>
                        </Box>
                      )
                    }
                  )}
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </MyDiv>
  )
}
