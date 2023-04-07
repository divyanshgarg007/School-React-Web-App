import {Box, Checkbox, FormControlLabel, FormGroup, Grid, Typography} from '@mui/material'
import React from 'react'
import {useTranslation} from 'react-i18next'
import MyDiv from './filtersTab.style'

export default function FiltersTab(props) {
  const {t} = useTranslation()
  return (
    <MyDiv>
      <Box className="filter_box">
        <Typography className="category_name">{t('ForAges')}</Typography>
        <Grid container columnSpacing={{sm: 4, md: 4}} mt={1}>
          {props?.filterData?.provided_to?.map((item, index) => {
            return (
              <Grid item xs={6} key={index}>
                <FormGroup className="data_list">
                  <FormControlLabel className="filter_items" value={item.provided_to_id} name="providedTo" control={<Checkbox onChange={(e) =>
                    props.handleCheckBox(e)
                  } checked={props.filterProvidedTo[item?.provided_to_id]}
                  />} label={item?.provided_to}
                  />
                </FormGroup>
              </Grid>
            )
          })}
        </Grid>
      </Box>
      <Box className="filter_box">
        <Typography className="category_name">{t('Availability')}</Typography>
        <Grid container columnSpacing={{sm: 4, md: 4}} mt={1}>
          {props?.filterData?.lot?.map((item, index) => {
            return (
              <Grid item xs={6} key={index}>
                <FormGroup className="data_list">
                  <FormControlLabel className="filter_items" value={item} name="slot" control={<Checkbox onChange={(e) =>
                    props.handleCheckBox(e)
                  } checked={props.filterSlot[item]}
                  />} label={item}
                  />
                </FormGroup>
              </Grid>
            )
          })}
        </Grid>
      </Box>
      <Box className="filter_box">
        <Typography className="category_name">{t('Day')}</Typography>
        <Grid container columnSpacing={{sm: 4, md: 4}} mt={1}>
          {props?.filterData?.days?.map((item) => {
            return (
              <Grid item xs={6} key={item?.day_id}>
                <FormGroup key={item?.day_id} className="data_list">
                  <FormControlLabel className="filter_items" value={item?.day} name="day" control={<Checkbox onChange={(e) =>
                    props.handleCheckBox(e)
                  } checked={props?.filterDay?.[item?.day]}
                  />} label={item?.day}
                  />
                </FormGroup>
              </Grid>
            )
          })}
        </Grid>
      </Box>
      <Box className="filter_box">
        <Typography className="category_name">{t('Where')}</Typography>
        <Grid container columnSpacing={{sm: 4, md: 4}} mt={1}>
          {props?.filterData?.provided_via?.map((item, index) => {
            return (
              <Grid item xs={6} key={index}>
                <FormGroup className="data_list">
                  <FormControlLabel className="filter_items" value={item.provided_to_id} name="providedType" control={<Checkbox onChange={(e) =>
                    props.handleCheckBox(e)
                  } checked={props.filterProvidedType[item?.provided_to_id]}
                  />} label={item?.provided_via}
                  />
                </FormGroup>
              </Grid>
            )
          })}
        </Grid>
      </Box>
      <Box className="filter_box">
        <Typography className="category_name">{t('Type')}</Typography>
        <Grid container columnSpacing={{sm: 4, md: 4}} mt={1}>
          {props?.filterData?.provided_member_type?.map((item, index) => {
            return (
              <Grid item xs={6} key={index}>
                <FormGroup className="data_list">
                  <FormControlLabel className="filter_items" value={item.member_type_id} name="providedWhere" control={<Checkbox onChange={(e) =>
                    props.handleCheckBox(e)
                  } checked={props.filterProvidedWhere[item?.member_type_id]}
                  />} label={item?.member_type}
                  />
                </FormGroup>
              </Grid>
            )
          })}
        </Grid>
      </Box>
    </MyDiv>
  )
}
