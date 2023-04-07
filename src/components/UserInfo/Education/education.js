import {Box, Typography} from '@mui/material'
import React from 'react'
import moment from 'moment'
import {useTranslation} from 'react-i18next'
import MyDiv from './education.style'

export default function Education(props) {
  const {t} = useTranslation()
  const textHandle = (text) => {
    const regex = /(<([^>]+)>)/ig
    return text?.replace(regex, '')
  }

  return (
    <MyDiv>
      {props.teachersData?.data?.userEducation.map((val, index) => {
        return (
          <Box className="card_box" key={index}>
            <Typography className="heading_name">{t('Education')}</Typography>
            <Box className="card_data">
              <Typography className="title_dark">{val.institute_name}</Typography>
              <Typography className="title_light">{val.degree_title}</Typography>
              <Typography className="title_light">
                {val.start_date ? moment(val.start_date).format('YYYY') : ''}
                - {val.end_date ? moment(val.end_date).format('YYYY') : ''}
              </Typography>
              <Box className="desc_box">
                <Typography className="desc_name">{t('Description')}</Typography>
                <Typography className="title_light">{textHandle(val.description)}</Typography>
              </Box>
            </Box>
          </Box>
        )
      })}

    </MyDiv>
  )
}
