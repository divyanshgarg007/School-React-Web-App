import {Box, Checkbox, FormControlLabel, FormGroup, Grid, Typography} from '@mui/material'
import React from 'react'
import {useTranslation} from 'react-i18next'
import {CustomButton} from '../../../../components'
import MyDiv from './distanceTab.style'
const distance = [
  {
    id: 1,
    label: '500m',
    value: 500,
  },
  {
    id: 2,
    label: '1km',
    value: 1000,
  },
  {
    id: 3,
    label: '2km',
    value: 2000,
  },
  {
    id: 4,
    label: '3km',
    value: 3000,
  },
  {
    id: 5,
    label: '4km',
    value: 4000,
  },
  {
    id: 6,
    label: '5km',
    value: 5000,
  },
]
export default function DistanceTab(props) {
  const {t} = useTranslation()
  return (
    <MyDiv>
      <Box className="filter_box">
        <Typography className="category_name">{t('Distance')}</Typography>
        <Grid container columnSpacing={{sm: 4, md: 4}} mt={1}>
          {distance?.map((item) => {
            return (
              <Grid item xs={6} key={item.id}>
                <FormGroup className="data_list">
                  <FormControlLabel className="filter_items"
                    control={<Checkbox
                      checked={props.distanceValue?.includes(item.value)}
                      onChange={(e) => props.handleDistanceCheck(e, item.value)}
                    />}
                    label={item.label}
                  />
                </FormGroup>
              </Grid>
            )
          })}
        </Grid>
        <CustomButton onClick={props.filterPlacesByDistance} className="btn_submit" title={t('Apply')} />
      </Box>
    </MyDiv>
  )
}
