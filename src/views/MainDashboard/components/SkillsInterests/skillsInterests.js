import {Typography, Box} from '@mui/material'
import React from 'react'
import {useTranslation} from 'react-i18next'
import MyDiv from './skillsInterests.style'
export default function SkillsInterests(props) {
  const {t} = useTranslation()
  const textHandle = (text) => {
    const regex = /(<([^>]+)>)/ig
    return text?.replace(regex, '')
  }
  return (
    <MyDiv>
      {props.teachersData?.data?.userSkillInterest?.map((val, index) => {
        return (
          <Box className="main_box" key={index}>
            <Box className="card_box">
              <Typography className="heading_name">{t('Skills&Interests')}</Typography>
              <Box className="card_data">
                <Typography className="title_light">{val?.skill_interest_name}</Typography>
                <Box className="desc_box">
                  <Typography className="desc_name">{t('Description')}</Typography>
                  <Typography className="title_light">{textHandle(val?.description)}</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        )
      })}
    </MyDiv>
  )
}
