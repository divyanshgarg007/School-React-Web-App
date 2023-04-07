import React from 'react'
import {Box, Typography} from '@mui/material'
import moment from 'moment'
import MyDiv from './educationCard.style'

export default function EducationCard(props) {

  const textHandle = (text) => {
    const regex = /(<([^>]+)>)/ig
    return text?.replace(regex, '')
  }

  return (
    <MyDiv>
      <Box className="about_box">
        <Typography className="card_heading">Education</Typography>
        <Box className="education_box">
          {props.customerEditData?.education?.is_changed ?
            props?.customerEditData?.education?.version?.map((item, index) => {
              return (
                <Box className="education_data" key={index}>
                  <Box className="wrap-flex">
                    <Typography className={props.customerEditData?.education?.is_changed ? 'labelNameBold_update' : 'labelNameBold'}>
                      {item.institute_name}{', '}
                    </Typography>
                    <Typography className={props.customerEditData?.education?.is_changed ? 'labelData_update' : 'labelData'}>
                      {item.country_name}{', '}{item.city_name}
                    </Typography>
                  </Box>
                  <Box mt={2} className="desc_space">
                    <Typography className={props.customerEditData?.education?.is_changed ? 'labelData_update' : 'labelData'}>
                      {item.degree_title}
                    </Typography>
                    <Typography className={props.customerEditData?.education?.is_changed ? 'labelData_update' : 'labelData'}>
                      {item.start_date ? moment(item?.start_date).format('YYYY') : ''}{' - '}{item.end_date ? moment(item?.end_date).format('YYYY') : ''}
                    </Typography>
                  </Box>
                  <Box mt={2}>
                    <Typography className={props.customerEditData?.education?.is_changed ? 'labelNameBold_update underline_text' : 'labelNameBold underline_text'}>
                      Description
                    </Typography>
                    <Typography className={props.customerEditData?.education?.is_changed ? 'labelData_update desc_space' : 'labelData desc_space'}>
                      {textHandle(item.description)}
                    </Typography>
                  </Box>
                </Box>
              )
            }) :
            props?.customerEditData?.education?.live?.map((item, index) => {
              return (
                <Box className="education_data" key={index}>
                  <Box className="wrap-flex">
                    <Typography className={props.customerEditData?.education?.is_changed ? 'labelNameBold_update' : 'labelNameBold'}>
                      {item.institute_name}{', '}
                    </Typography>
                    <Typography className={props.customerEditData?.education?.is_changed ? 'labelData_update' : 'labelData'}>
                      {item.country_name}{', '}{item.city_name}
                    </Typography>
                  </Box>
                  <Box mt={2} className="desc_space">
                    <Typography className={props.customerEditData?.education?.is_changed ? 'labelData_update' : 'labelData'}>
                      {item.degree_title}
                    </Typography>
                    <Typography className={props.customerEditData?.education?.is_changed ? 'labelData_update' : 'labelData'}>
                      {item.start_date ? moment(item?.start_date).format('YYYY') : ''}{' - '}{item.end_date ? moment(item?.end_date).format('YYYY') : ''}
                    </Typography>
                  </Box>
                  <Box mt={2}>
                    <Typography className={props.customerEditData?.education?.is_changed ? 'labelNameBold_update underline_text' : 'labelNameBold underline_text'}>
                      Description
                    </Typography>
                    <Typography className={props.customerEditData?.education?.is_changed ? 'labelData_update desc_space' : 'labelData desc_space'}>
                      {textHandle(item.description)}
                    </Typography>
                  </Box>
                </Box>
              )
            })
          }
        </Box>
      </Box>
    </MyDiv>
  )
}
