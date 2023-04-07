/* eslint-disable max-len */
import {Grid, Box, Card, CardContent, Divider, IconButton, Typography} from '@mui/material'
import {Favorite} from '@mui/icons-material'
import React from 'react'
import moment from 'moment'
import {Link} from 'react-router-dom'
import {useTranslation} from 'react-i18next'
import MyDiv from './registrationCard.style'

export default function RegistrationCard(props) {
  const {t} = useTranslation()
  return (
    <MyDiv>
      <Box mt={5}>
        <Grid container rowSpacing={4} columnSpacing={{sm: 4, md: 4}}>
          {props?.teacherSummary?.slice(0, 6)?.map((item, index) => {
            return (
              // eslint-disable-next-line prefer-template
              <Grid onClick={() => props.handleClickProfile(item.teacher_id)} className="list_users" item md={4} key={index} component={Link} target="_blank" to={'/teacher/' + item.name + item.surname + item.teacher_id}>
                <Card className="main_card">
                  <IconButton className="icn_btn"><Favorite /></IconButton>

                  <Box key={index} >
                    {item.cover_image !== '' ?
                      <img className="cover_image" src={item.cover_image} /> :
                      <div className="NoBackground" />
                    }
                  </Box>
                  <CardContent className="custom_content">
                    <Typography className="new_btn">New</Typography>
                    <Typography key={index} className="text_label1">{item?.name}{' '}{item?.surname}</Typography>
                    <Box className="flex_box2">
                      <Typography className="text_label2">{t('Category')}:</Typography>
                      <Typography key={index} className="text_label3">{item?.category_name}{' '}</Typography>
                    </Box>
                    <Divider />
                    <Box className="flex_box">
                      <Typography className="text_label2">{t('Location')}:</Typography>
                      <Typography key={index} className="text_label3">{item?.address}, {item?.city_name}, {item?.state_name}, {item?.country_name}</Typography>
                    </Box>
                    {/* <Box className="flex_box">
                      <Typography className="text_label2">Phone Number:</Typography>
                      <Typography key={index} className="text_label3">{item?.phone_number}</Typography>
                    </Box> */}
                    <Box className="flex_box">
                      <Typography className="text_label2">{t('Cost')}:</Typography>
                      <Typography key={index} className="text_label3">{item?.cost} € {t('per')} {item?.cost_per}</Typography>
                    </Box>
                    <Box className="flex_box">
                      <Typography className="text_label2">{t('membersince')}:</Typography>
                      <Typography key={index} className="text_label3">{item?.member_date ? moment(item.member_date).format('DD-MM-YYYY') : ''}</Typography>
                    </Box>
                    <Box className="flex_box">
                      <Typography className="text_label2">{t('views')}:</Typography>
                      <Typography className="text_label3">{item?.views}</Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            )
          })}
        </Grid>
      </Box>
    </MyDiv>
  )
}
