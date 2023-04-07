/* eslint-disable prefer-template */
import React, {useEffect, useState} from 'react'
import {Box, Chip, Typography} from '@mui/material'
import {Link} from 'react-router-dom'
import moment from 'moment'
import {Euro, LocationOn} from '@mui/icons-material'
import {useTranslation} from 'react-i18next'
import MyDiv from './listviewTab.style'
export default function ListviewTab(props) {
  const {t} = useTranslation()
  const [data, setData] = useState()

  useEffect(() => {
    setData(props.filteredTeachers?.slice(0, 15))
  }, [props.filteredTeachers])

  return (
    <MyDiv>
      {data?.length > 0 ? <>{data?.map((item, index) => {
        return (
          <Box className="list_users" key={index}>
            <Box className="inner_list">
              <img src={item.profile_image} />
              <Box className="list_items">
                <Typography className="username">
                  {item?.name}
                </Typography>
                <Typography className="list_data">
                  {moment(item?.dob, 'YYYYMMDD').fromNow().split('ago')} {t('old')}
                </Typography>
                <Typography className="list_data">
                  {item?.experience_name}
                </Typography>
              </Box>
            </Box>
            <Box className="category_box">
              <Chip label={item?.sub_category_name} className="category_items" />
            </Box>
            <Box className="flex_box">
              <Box className="list_row">
                <LocationOn />
                <Typography className="list_data">
                  {item?.country_name}, {item?.state_name}, {item?.address}
                </Typography>
              </Box>
              <Box className="list_row">
                <Euro />
                <Typography className="list_data">
                  {t('StartingCost')}{item?.cost} / {item?.cost_per}
                </Typography>
              </Box>
            </Box>
            <Link target="_blank" className="view_btn" to={'/teacher/' + item?.name + item?.surname + item?.teacher_id}>{t('ViewProfile')}</Link>
          </Box>
        )
      })}</> : <>No Results found.</>}
    </MyDiv>
  )
}
