import React from 'react'
import {Box, Typography} from '@mui/material'
import moment from 'moment'
import MyDiv from './experienceCard.style'

export default function ExperienceCard(props) {

  const textHandle = (text) => {
    const regex = /(<([^>]+)>)/ig
    return text?.replace(regex, '')
  }

  return (
    <MyDiv>
      <Box className="about_box">
        <Typography className="card_heading">Experience</Typography>
        <Box className="education_box">
          {props.customerEditData?.experience?.is_changed ?
            props?.customerEditData?.experience?.version?.map((item, index) => {
              return (
                <Box className="education_data" key={index}>
                  <Typography className={props.customerEditData?.experience?.is_changed ? 'labelNameBold_update' : 'labelNameBold'}>
                    {item.experience_name}
                  </Typography>
                  <Typography className={props.customerEditData?.experience?.is_changed ? 'labelData_update' : 'labelData'}>
                    {item.start_date ? moment(item?.start_date).format('YYYY') : ''}{' - '}{item.end_date ? moment(item?.end_date).format('YYYY') : ''}
                  </Typography>
                  <Box mt={2}>
                    <Typography className={props.customerEditData?.experience?.is_changed ? 'labelNameBold_update underline_text' : 'labelNameBold underline_text'}>
                      Description
                    </Typography>
                    <Typography className={props.customerEditData?.experience?.is_changed ? 'labelData_update desc_space' : 'labelData desc_space'}>
                      {textHandle(item.description)}
                    </Typography>
                  </Box>
                </Box>
              )
            }) :
            props?.customerEditData?.experience?.live?.map((item, index) => {
              return (
                <Box className="education_data" key={index}>
                  <Typography className={props.customerEditData?.experience?.is_changed ? 'labelNameBold_update' : 'labelNameBold'}>
                    {item.experience_name}
                  </Typography>
                  <Typography className={props.customerEditData?.experience?.is_changed ? 'labelData_update' : 'labelData'}>
                    {item.start_date ? moment(item?.start_date).format('YYYY') : ''}{' - '}{item.end_date ? moment(item?.end_date).format('YYYY') : ''}
                  </Typography>
                  <Box mt={2}>
                    <Typography className={props.customerEditData?.experience?.is_changed ? 'labelNameBold_update underline_text' : 'labelNameBold underline_text'}>
                      Description
                    </Typography>
                    <Typography className={props.customerEditData?.experience?.is_changed ? 'labelData_update desc_space' : 'labelData desc_space'}>
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
