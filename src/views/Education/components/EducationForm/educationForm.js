/* eslint-disable no-unused-vars */
import React, {useCallback, useState} from 'react'
import {styled} from '@mui/system'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import {
  Box,
  Typography,
  IconButton,
  Select,
  MenuItem,
  Grid,
  FormControl,
} from '@mui/material'
import {Edit} from '@mui/icons-material'
import {useTranslation} from 'react-i18next'
import {GoogleMap, MarkerF, useJsApiLoader} from '@react-google-maps/api'
import CustomDateTimePicker from '../../../../components/CustomDateTimePicker/customDateTimePicker'
import {toolbarOptions} from '../../../../constants/constant'
import {CustomButton, CustomTextBox} from '../../../../components/Inputs'
import MyDiv from './educationForm.style'
const CustomMenuItem = styled(MenuItem)(({theme}) => ({
  '&.MuiMenuItem-root': {
    backgroundColor: '#EDF2F7',
    fontFamily: 'Proxima Nova',
    fontSize: '15px',
    fontWeight: '600',
    color: '#000000',
  },
  '&.MuiMenuItem-root:nth-child(2)': {
    borderTop: '3px solid #1D3160',
    marginTop: '-8px',
  },
  '&.MuiMenuItem-root:last-child': {
    marginBottom: '-8px',
  },
}))

const Placeholder = styled(MenuItem)(({theme}) => ({
  '&.MuiMenuItem-root': {
    display: 'none',
  },
}))

const containerStyle = {
  width: '100%',
  height: '300px',
}

const center = {
  lat: 65.250856,
  lng: -76.776675,
}

const LIBRARIES = ['places']

const ITEM_HEIGHT = 60
const Menu = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5,
    },
  },
}

export default function EducationForm(props) {
  const {t} = useTranslation()

  // eslint-disable-next-line no-unused-vars
  const [map, setMap] = useState(null)

  const {isLoaded} = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
    libraries: LIBRARIES,

  })

  const onLoad = useCallback((map) => setMap(map), [])

  if (!isLoaded) return

  return (
    <MyDiv>
      <Box className="drawer_box">
        <Box className="grid_boxes">
          <Typography className="text_title">
            {t('InstituteName')}
            <span> *</span>
          </Typography>
          <CustomTextBox
            value={props.educationData?.institute_name}
            name="institute_name"
            onChange={props.handleChange}
            className="text-style"
            error={props?.errorData?.institute_name?.[0]}
            startIcon={
              <IconButton tabIndex="-1" className="icn_fix">
                <Edit className="icn_size" />
              </IconButton>
            }
          />
        </Box>
        <Grid className="text_boxes" container columnSpacing={1}>
          <Grid item md={6}>
            <Typography className="text_title">{t('DegreeTitle')}</Typography>
            <CustomTextBox
              value={props.educationData?.degree_title}
              name="degree_title"
              onChange={props.handleChange}
              className="text-style"
              error={props?.errorData?.degree_title?.[0]}
              startIcon={
                <IconButton tabIndex="-1" className="icn_fix">
                  <Edit className="icn_size" />
                </IconButton>
              }
            />
          </Grid>
          <Grid item md={6}>
            <Typography className="text_title">{t('Country')}</Typography>
            <FormControl fullWidth>
              <Select
                MenuProps={{...Menu, autoFocus: false}}
                className="mu_data"
                name="country"
                value={props.educationData?.country}
                onChange={props.handleCountry}
                id="language_list"
              >
                <CustomTextBox
                  onKeyDown={(e) => {e.stopPropagation()}}
                  autoFocus
                  value={props.value}
                  onChange={props.handleSearch}
                  fieldLabel="Search"
                />
                <Placeholder value={0}>{t('countryPlaceholder')}</Placeholder>
                {props?.countries?.map((data) => {
                  return (
                    <CustomMenuItem
                      key={data.country_id}
                      value={data.country_id}
                    >
                      {data.country_name}
                    </CustomMenuItem>
                  )
                })}
              </Select>
              <div style={{color: 'red', fontSize: '12px'}}>
                {props?.errorData?.country?.[0]}
              </div>
            </FormControl>
          </Grid>
        </Grid>
        <Grid className="text_boxes" container columnSpacing={1}>
          <Grid item md={6}>
            <Typography className="text_title">{t('StartDate')}</Typography>
            <CustomDateTimePicker
              handleDate={props.handleStartDateChange}
              date={props.educationData?.start_date}
              maxDate={props.educationData?.end_date}
            />
          </Grid>
          <Grid item md={6}>
            <Typography className="text_title">{t('EndDate')}</Typography>
            <CustomDateTimePicker
              handleDate={props.handleEndDateChange}
              date={props.educationData?.end_date}
              minDate={props.educationData?.start_date}
            />
          </Grid>
        </Grid>
        <Box className="desc_box">
          <Typography>{t('Description')}</Typography>
          <Grid container md={12} className="grid_box">
            <ReactQuill
              value={props.educationData.description}
              onChange={(e) => props.handleDescription(e)}
              className="quill_style" theme="snow" modules={{toolbar: toolbarOptions}}
            />
          </Grid>
        </Box>
        <Box className="flex_btn">
          <CustomButton
            onClick={props.handleSubmit}
            className="btn_submit"
            title={t('Submit')}
          />
          <CustomButton
            onClick={props.handleClick}
            className="btn_cancel"
            title={t('Cancel')}
          />
        </Box>
      </Box>
    </MyDiv>
  )
}
