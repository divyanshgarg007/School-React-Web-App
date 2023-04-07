import React from 'react'
import {Call, Email, LocationOn, NearMe, Public} from '@mui/icons-material'
import {Box, Grid, IconButton, Typography} from '@mui/material'
import MyDiv from './aboutCard.style'

export default function AboutCard(props) {

  const textHandle = (text) => {
    const regex = /(<([^>]+)>)/ig
    return text?.replace(regex, '')
  }

  return (
    <MyDiv>
      <Box className="about_box">
        <Typography className="card_heading">Main Information</Typography>
        <Grid container className="grid_space">
          <Grid item md={4}>
            <Box className="wrap-flex box-space">
              <Box className="left_space">
                <img src={props.customerEditData?.user_detail?.is_changed ? props.customerEditData?.user_detail?.version[0]?.profile_image :
                  props.customerEditData?.user_detail?.live[0]?.profile_image} className={props.customerEditData?.user_detail?.is_changed &&
                    props.customerEditData?.user_detail?.version[0]?.profile_image !== props.customerEditData?.user_detail?.live[0]?.profile_image ? 'profile_img_update' : 'profile_img'}
                />
              </Box>
              <Box className="right_space">
                <Typography className={props.customerEditData?.user_detail?.is_changed && props.customerEditData?.user_detail?.version[0]?.name !==
                    props.customerEditData?.user_detail[0]?.live?.name
                  ? 'labelData_update' : 'labelData'}
                >
                  About {props.customerEditData?.user_detail?.is_changed ? props.customerEditData?.user_detail?.version[0]?.name :
                    props.customerEditData?.user_detail?.live[0]?.name
                  }
                </Typography>
                <Box className="inner-wrap-flex">
                  <Typography className={props.customerEditData?.user_detail?.is_changed && props.customerEditData?.user_detail?.version[0]?.experience_name !==
                      props.customerEditData?.user_detail?.live[0]?.experience_name ?
                    'labelName_update' : 'labelName'}
                  >Experience:</Typography>
                  <Typography className={props.customerEditData?.user_detail?.is_changed && props.customerEditData?.user_detail?.version[0]?.experience_name !==
                      props.customerEditData?.user_detail?.live[0]?.experience_name
                    ? 'labelData_update' : 'labelData'}
                  >
                    {props.customerEditData?.user_detail?.is_changed ? props.customerEditData?.user_detail?.version[0]?.experience_name :
                      props.customerEditData?.user_detail?.live[0]?.experience_name
                    }</Typography>
                </Box>
              </Box>
            </Box>
            <Box className="wrap-flex box-space">
              <Box className="left_space info-space">
                <IconButton className="info-icons">
                  <LocationOn />
                </IconButton>
              </Box>
              <Box className="right_space">
                <Typography className={props.customerEditData?.location?.is_changed && props.customerEditData?.location?.version[0]?.city_name !==
                       props.customerEditData?.location?.live[0]?.city_name || props.customerEditData?.location?.version[0]?.country_name !==
                       props.customerEditData?.location?.live[0]?.country_name ? 'labelData_update' : 'labelData'}
                >
                  {props.customerEditData?.location?.version.length && props.customerEditData?.location?.live.length !== 0 ? <>
                    {
                      props?.customerEditData?.location?.is_changed ? `${props?.customerEditData?.location?.version[0]?.city_name}${' '}${props?.customerEditData?.location?.version[0]?.country_name}`
                        : `${props?.customerEditData?.location?.live[0]?.city_name}${' '}${props?.customerEditData?.location?.live[0]?.country_name}`
                    }</> : null}

                </Typography>
              </Box>
            </Box>
            <Box className="wrap-flex box-space">
              <Box className="left_space info-space">
                <IconButton className="info-icons">
                  <Call />
                </IconButton>
              </Box>
              <Box className="right_space">
                <Typography className={props.customerEditData?.user_detail?.is_changed && props.customerEditData?.user_detail?.version[0]?.phone_number !==
                       props.customerEditData?.user_detail?.live[0]?.phone_number ? 'labelData_update' : 'labelData'}
                >
                  {
                    props.customerEditData?.user_detail?.is_changed ? props.customerEditData?.user_detail?.version[0]?.phone_number
                      : props.customerEditData?.user_detail?.live[0]?.phone_number
                  }
                </Typography>
                <Typography className={props.customerEditData?.user_detail?.is_changed && props.customerEditData?.user_detail?.version[0]?.secondary_phone_number !==
                     props.customerEditData?.user_detail?.live[0]?.secondary_phone_number ? 'labelData_update' : 'labelData'}
                >
                  {
                    props.customerEditData?.user_detail?.is_changed ? props.customerEditData?.user_detail?.version[0]?.secondary_phone_number
                      : props.customerEditData?.user_detail?.live[0]?.secondary_phone_number
                  }
                </Typography>
              </Box>
            </Box>
            <Box className="wrap-flex box-space">
              <Box className="left_space info-space">
                <IconButton className="info-icons">
                  <Email />
                </IconButton>
              </Box>
              <Box className="right_space">
                <Typography className={props.customerEditData?.user_detail?.is_changed && props.customerEditData?.user_detail?.version[0]?.email !==
                       props.customerEditData?.user_detail?.live[0]?.email ? 'labelData_update' : 'labelData'}
                >{
                    props.customerEditData?.user_detail?.is_changed ? props.customerEditData?.user_detail?.version[0]?.email
                      : props.customerEditData?.user_detail?.live[0]?.email
                  }</Typography>
              </Box>
            </Box>
            <Box className="wrap-flex box-space">
              <Box className="left_space info-space">
                <IconButton className="info-icons">
                  <Public />
                </IconButton>
              </Box>
              <Box className="right_space">
                <Typography className={props.customerEditData?.user_detail?.is_changed && props.customerEditData?.user_detail?.version[0]?.website !==
                     props.customerEditData?.user_detail?.live[0]?.website ? 'labelData_update' : 'labelData'}
                >
                  {
                    props.customerEditData?.user_detail?.is_changed ? props.customerEditData?.user_detail?.version[0]?.website
                      : props.customerEditData?.user_detail?.live[0]?.website
                  }
                </Typography>
              </Box>
            </Box>
            <Box className="wrap-flex">
              <Box className="left_space info-space">
                <IconButton className="info-icons">
                  <NearMe />
                </IconButton>
              </Box>
              <Box mt={2} className="right_space inner-wrap-flex">
                {props.customerEditData?.social_media?.is_changed
                  ?
                  props.customerEditData?.social_media?.version?.map((item, index) => {
                    return (
                      <Box key={index}>
                        <img className={props.customerEditData?.social_media?.is_changed ? 'sm_icn_update' : 'sm_icn'} src={item?.social_media_icon} />
                      </Box>
                    )
                  })
                  :
                  props.customerEditData?.social_media?.live?.map((item, index) => {
                    return (
                      <Box key={index}>
                        <img className={props.customerEditData?.social_media?.is_changed ? 'sm_icn_update' : 'sm_icn'} src={item?.social_media_icon} />
                      </Box>
                    )
                  })
                }
              </Box>
            </Box>
          </Grid>
          <Grid item md={8}>
            <Box mt={3}>
              <Typography className={props.customerEditData?.about_me?.is_changed && props.customerEditData?.about_me?.version[0]?.about_me !==
                    props.customerEditData?.about_me?.live[0]?.about_me ? 'labelName_update label_space' : 'labelName label_space'}
              >About Me</Typography>
              <Typography className={props.customerEditData?.about_me?.is_changed && props.customerEditData?.about_me?.version[0]?.about_me !==
                   props.customerEditData?.about_me?.live[0]?.about_me ? 'labelData_update' : 'labelData'}
              >
                {
                  props.customerEditData?.about_me?.is_changed ? textHandle(props.customerEditData?.about_me?.version[0]?.about_me)
                    : textHandle(props.customerEditData?.about_me?.live[0]?.about_me)
                }
              </Typography>
            </Box>
            <Box mt={3}>
              <Typography className={props.customerEditData?.language?.is_changed ? 'labelName_update label_space' : 'labelName label_space'}>Languages</Typography>
              {props.customerEditData?.language?.is_changed
                ?
                props.customerEditData?.language?.version?.map((item, index) => {
                  return (
                    <Box className="inner-wrap-flex lang-space" key={index}>
                      <Typography className={props.customerEditData?.language?.is_changed ? 'labelNameBold_update' : 'labelNameBold'}>{item?.language_name}:</Typography>
                      <Typography className={props.customerEditData?.language?.is_changed ? 'labelData_update' : 'labelData'}>{item?.proficiency_name}
                        {item?.isNative ? ' (native language)' : null}
                      </Typography>
                    </Box>
                  )
                })
                :
                props.customerEditData?.language?.live?.map((item, index) => {
                  return (
                    <Box className="inner-wrap-flex lang-space" key={index}>
                      <Typography className={props.customerEditData?.language?.is_changed ? 'labelNameBold_update' : 'labelNameBold'}>{item?.language_name}:</Typography>
                      <Typography className={props.customerEditData?.language?.is_changed ? 'labelData_update' : 'labelData'}>{item?.proficiency_name}
                        {item?.isNative ? ' (native language)' : null}
                      </Typography>
                    </Box>
                  )
                })
              }
            </Box>
          </Grid>
        </Grid>
      </Box>

    </MyDiv>
  )
}
