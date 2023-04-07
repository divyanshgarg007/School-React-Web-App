import {AlternateEmail, Assignment, CreditCard, SportsBasketball} from '@mui/icons-material'
import {Box, Checkbox, Grid, IconButton, Table, TableBody, TableCell, TableContainer, TableRow, Typography} from '@mui/material'
import React from 'react'
import {useTranslation} from 'react-i18next'
import MyDiv from './lessonAbout.style'
export default function LessonAbout(props) {

  const {t} = useTranslation()
  const monthData = [
    {
      id: 0,
      name: t('Days'),
    },
    {
      id: 1,
      name: t('Monday'),
    },
    {
      id: 2,
      name: t('Tuesday'),
    },
    {
      id: 3,
      name: t('Wednesday'),
    },
    {
      id: 4,
      name: t('Thursday'),
    },
    {
      id: 5,
      name: t('Friday'),
    },
    {
      id: 6,
      name: t('Saturday'),
    },
    {
      id: 7,
      name: t('Sunday'),
    },
  ]

  const textHandle = (text) => {
    const regex = /(<([^>]+)>)/ig
    return text?.replace(regex, '')
  }

  return (
    <MyDiv>
      {props.teachersData?.data?.userLesson?.map((val, index) => {
        return (
          <Box key={index}>
            <Grid container>
              <Grid item md={4} xs={12} className="card_box">
                <Typography sx={{display: {xs: 'none', sm: 'none', md: 'block'}}} className="heading_name">{t('Lesson')}</Typography>
                <Box className="card_data">
                  <Box className="">
                    {/* <Typography className="category_name">{t('Category')}: </Typography> */}
                    <Typography className="category_data">{val.sub_category_name}</Typography>
                  </Box>
                  <Box className="flex_wrapper">
                    <IconButton className="list_icons">
                      <Assignment />
                    </IconButton>
                    <Box>
                      <Typography className="data_label">{t('Providedfor')} </Typography>
                      {val.provided_to_list?.map((item, index) => {
                        return (
                          <Typography className="data_name" key={index}>{item.provided_to_name}</Typography>
                        )
                      })}
                    </Box>
                  </Box>
                  <Box className="flex_wrapper">
                    <IconButton className="list_icons">
                      <AlternateEmail />
                    </IconButton>
                    <Box>
                      <Typography className="data_label">{t('Providedto')} </Typography>
                      {val.lesson_is_provided_list?.map((item, index) => {
                        return (
                          <Typography className="data_name" key={index}>{item.member_type}</Typography>
                        )
                      })}
                    </Box>
                  </Box>
                  <Box className="flex_wrapper">
                    <IconButton className="list_icons">
                      <SportsBasketball />
                    </IconButton>
                    <Box>
                      <Typography className="data_label">{t('isProvided')}</Typography>
                      {val.lesson_provided_to_place_list?.map((item, index) => {
                        return (
                          <Typography className="data_name" key={index}>{item.provided_via_name}</Typography>
                        )
                      })}
                    </Box>
                  </Box>
                  <Box className="flex_wrapper">
                    <IconButton className="list_icons">
                      <CreditCard />
                    </IconButton>
                    <Box>
                      <Typography className="data_label">{t('Cost')} </Typography>
                      <Typography className="data_name">€{val.cost}{' '}/{' '}{val.cost_per_name}</Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item md={0.5} />
              <Grid className="card_box" item md={7.5} xs={12}>
                <Typography className="heading_name">{t('aboutLesson')}</Typography>
                {/* <Divider sx={{width: '100%', backgroundColor: '##EAECEF', marginTop: '24px'}} /> */}
                <Box className="card_data">
                  <Typography className="data_name">{textHandle(val.description)}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Box className="card_box">
              <Typography className="heading_name">{t('Availability')}</Typography>
              <Box className="parent_box">
                <Box className="w-100">
                  <TableContainer>
                    <Table>
                      <TableBody>
                        {monthData?.map((value, index) => (
                          <TableRow key={index}>
                            <TableCell className="cell_table">
                              <Typography className="table_title">{value.name}</Typography>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>
                <Box className="w-100">
                  <TableContainer>
                    <Table>
                      <TableBody>
                        <TableRow>
                          <TableCell className="cell_table">
                            <Typography className="table_title2">{t('Morning')}</Typography>
                          </TableCell>
                        </TableRow>
                        {val.availability.filter((item) => item?.lot === 'morning')?.map((value) => (
                          <TableRow key={value.id}>
                            <TableCell className="check_select cell_table">
                              <Checkbox sx={{padding: '0px!important'}} checked={value.is_available} disabled />
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>
                <Box className="w-100">
                  <TableContainer>
                    <Table>
                      <TableBody>
                        <TableRow>
                          <TableCell className="cell_table">
                            <Typography className="table_title2">{t('Afternoon')}</Typography>
                          </TableCell>
                        </TableRow>
                        {val.availability.filter((item) => item?.lot === 'afternoon')?.map((value) => (
                          <TableRow key={value.id}>
                            <TableCell className="check_select cell_table">
                              <Checkbox sx={{padding: '0px!important'}} checked={value.is_available} disabled />
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>
                <Box className="w-100">
                  <TableContainer>
                    <Table>
                      <TableBody>
                        <TableRow>
                          <TableCell className="cell_table">
                            <Typography className="table_title2">{t('Evening')}</Typography>
                          </TableCell>
                        </TableRow>
                        {val.availability.filter((item) => item?.lot === 'evening')?.map((value) => (
                          <TableRow key={value.id}>
                            <TableCell className="check_select cell_table">
                              <Checkbox sx={{padding: '0px!important'}} checked={value.is_available} disabled />
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>
              </Box>
            </Box>
          </Box>
        )
      })}
    </MyDiv>
  )
}
