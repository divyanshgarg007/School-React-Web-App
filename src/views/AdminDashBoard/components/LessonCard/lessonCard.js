import React from 'react'
import {SportsBasketball, AlternateEmail, CreditCard, Assignment} from '@mui/icons-material'
import {Box, Grid, IconButton, Typography} from '@mui/material'
import MyDiv from './lessonCard.style'

export default function LessonCard(props) {

  const textHandle = (text) => {
    const regex = /(<([^>]+)>)/ig
    return text?.replace(regex, '')
  }

  return (
    <MyDiv>
      <Box className="about_box">
        <Grid container className="grid_space" columnSpacing={{sm: 4, md: 4}}>
          <Grid item md={4}>
            <Typography className="card_heading">Lesson</Typography>
            <Box mt={3}>
              <Box className="category_box box-space">
                <Typography className={props.customerEditData?.lesson?.is_changed && props.customerEditData?.lesson?.version[0]?.category_name !==
                  props.customerEditData?.lesson?.live[0]?.category_name || props.customerEditData?.lesson?.version[0]?.sub_category_name !==
                  props.customerEditData?.lesson?.live[0]?.sub_category_name ? 'categoryName_update' : 'categoryName'}
                >Category: </Typography>
                <Typography className={props.customerEditData?.lesson?.is_changed && props.customerEditData?.lesson?.version[0]?.category_name !==
                  props.customerEditData?.lesson?.live[0]?.category_name || props.customerEditData?.lesson?.version[0]?.sub_category_name !==
                  props.customerEditData?.lesson?.live[0]?.sub_category_name ? 'categoryData_update' : 'categoryData'}
                >{
                    props.customerEditData?.lesson?.is_changed ? `${props.customerEditData?.lesson?.version[0]?.category_name}${', '}${props.customerEditData?.lesson?.version[0]?.sub_category_name}`
                      : `${props.customerEditData?.lesson?.live[0]?.category_name}${', '}${props.customerEditData?.lesson?.live[0]?.sub_category_name}`
                  }</Typography>
              </Box>
              <Box className="wrap-flex box-space">
                <Box className="left_space info-space">
                  <IconButton className="info-icons">
                    <Assignment />
                  </IconButton>
                </Box>
                <Box className="right_space">
                  <Typography className={props.customerEditData?.lesson?.is_changed && props.customerEditData?.lesson?.version[0]?.lesson_is_provided_list !==
                       props.customerEditData?.lesson?.live[0]?.lesson_is_provided_list ? 'labelNameBold_update' : 'labelNameBold'}
                  >Provided for</Typography>
                  <Typography className={props.customerEditData?.lesson?.is_changed && props.customerEditData?.lesson?.version[0]?.lesson_is_provided_list[0]?.member_type !==
                       props.customerEditData?.lesson?.live[0]?.lesson_is_provided_list[0]?.member_type ? 'labelData_update' : 'labelData'}
                  >{
                      props.customerEditData?.lesson?.is_changed ? props.customerEditData?.lesson?.version[0]?.lesson_is_provided_list[0]?.member_type
                        : props.customerEditData?.lesson?.live[0]?.lesson_is_provided_list[0]?.member_type
                    }</Typography>
                </Box>
              </Box>
              <Box className="wrap-flex box-space">
                <Box className="left_space info-space">
                  <IconButton className="info-icons">
                    <AlternateEmail />
                  </IconButton>
                </Box>
                <Box className="right_space">
                  <Typography className={props.customerEditData?.lesson?.is_changed && props.customerEditData?.lesson?.version[0]?.provided_to_list !==
                       props.customerEditData?.lesson?.live[0]?.provided_to_list ? 'labelNameBold_update' : 'labelNameBold'}
                  >Provided to</Typography>
                  <Typography className={props.customerEditData?.lesson?.is_changed && props.customerEditData?.lesson?.version[0]?.provided_to_list[0]?.provided_to_name !==
                       props.customerEditData?.lesson?.live[0]?.provided_to_list[0]?.provided_to_name ? 'labelData_update' : 'labelData'}
                  >{
                      props.customerEditData?.lesson?.is_changed ? props.customerEditData?.lesson?.version[0]?.provided_to_list[0]?.provided_to_name
                        : props.customerEditData?.lesson?.live[0]?.provided_to_list[0]?.provided_to_name
                    }</Typography>
                </Box>
              </Box>
              <Box className="wrap-flex box-space">
                <Box className="left_space info-space">
                  <IconButton className="info-icons">
                    <SportsBasketball />
                  </IconButton>
                </Box>
                <Box className="right_space">
                  <Typography className={props.customerEditData?.lesson?.is_changed && props.customerEditData?.lesson?.version[0]?.lesson_provided_to_place_list !==
                       props.customerEditData?.lesson?.live[0]?.lesson_provided_to_place_list ? 'labelNameBold_update' : 'labelNameBold'}
                  >Is provided</Typography>
                  <Typography className={props.customerEditData?.lesson?.is_changed && props.customerEditData?.lesson?.version[0]?.lesson_provided_to_place_list[0]?.provided_via_name !==
                       props.customerEditData?.lesson?.live[0]?.lesson_provided_to_place_list[0]?.provided_via_name ? 'labelData_update' : 'labelData'}
                  >{
                      props.customerEditData?.lesson?.is_changed ? props.customerEditData?.lesson?.version[0]?.lesson_provided_to_place_list[0]?.provided_via_name
                        : props.customerEditData?.lesson?.live[0]?.lesson_provided_to_place_list[0]?.provided_via_name
                    }</Typography>
                </Box>
              </Box>
              <Box className="wrap-flex box-space">
                <Box className="left_space info-space">
                  <IconButton className="info-icons">
                    <CreditCard />
                  </IconButton>
                </Box>
                <Box className="right_space">
                  <Typography className={props.customerEditData?.lesson?.is_changed && props.customerEditData?.lesson?.version[0]?.cost !==
                     props.customerEditData?.lesson?.live[0]?.cost || props.customerEditData?.lesson?.version[0]?.cost_per_name !==
                     props.customerEditData?.lesson?.live[0]?.cost_per_name ? 'labelData_update' : 'labelData'}
                  >
                    Cost
                  </Typography>
                  <Typography className={props.customerEditData?.lesson?.is_changed && props.customerEditData?.lesson?.version[0]?.cost !==
                     props.customerEditData?.lesson?.live[0]?.cost || props.customerEditData?.lesson?.version[0]?.cost_per_name !==
                     props.customerEditData?.lesson?.live[0]?.cost_per_name ? 'labelData_update' : 'labelData'}
                  >
                    {
                      props.customerEditData?.lesson?.is_changed ? `${'€'}${props.customerEditData?.lesson?.version[0]?.cost}${' / '}
                      ${props.customerEditData?.lesson?.version[0]?.cost_per_name}`
                        : `${'€'}${props.customerEditData?.lesson?.live[0]?.cost}${' / '}${props.customerEditData?.lesson?.live[0]?.cost_per_name}`
                    }
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item md={8}>
            <Typography className="card_heading">About the lesson</Typography>
            <Box mt={3} className="lesson_about">
              <Typography className={props.customerEditData?.lesson?.is_changed && props.customerEditData?.lesson?.version[0]?.description !==
                   props.customerEditData?.lesson?.live[0]?.description ? 'labelData_update' : 'labelData'}
              >
                {
                  props.customerEditData?.lesson?.is_changed ? textHandle(props.customerEditData?.lesson?.version[0]?.description)
                    : textHandle(props.customerEditData?.lesson?.live[0]?.description)
                }
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

    </MyDiv>
  )
}
