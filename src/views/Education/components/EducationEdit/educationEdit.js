/* eslint-disable no-unused-vars */
import React from 'react'
import {styled} from '@mui/system'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import {Typography, Select, MenuItem, Grid, IconButton, FormControl} from '@mui/material'
import {Edit} from '@mui/icons-material'
import {useTranslation} from 'react-i18next'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {CustomDateTimePicker, CustomTextBox} from '../../../../components'
import {ActionCreators} from '../../../../redux/actions'
import {toolbarOptions} from '../../../../constants/constant'
import MyDiv from './educationEdit.style.js'

const ITEM_HEIGHT = 60
const Menu = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5,
    },
  },
}
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
const EducationEdit = (props) => {

  const {t} = useTranslation()
  return (
    <MyDiv>
      <Grid container xs={12} sm={12} className="edit_box">
        <Grid item xs={12} sm={12} className="demo_box">
          <Typography className="text_title">{t('InstituteName')}<span> *</span></Typography>
          <CustomTextBox value={props.educationData?.institute_name} name="institute_name" onChange={props.handleChange} error={props?.errorData?.institute_name?.[0]}
            className="text-style" startIcon={<IconButton tabIndex="-1" className="icn_fix"><Edit className="icn_size" /></IconButton>}
          />
        </Grid>
        <Grid className="demo_box" item xs={12} sm={12}>
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
        <Grid className="demo_box" item xs={12} sm={12}>
          <Typography className="text_title">{t('DegreeTitle')}</Typography>
          <CustomTextBox value={props.educationData?.degree_title} name="degree_title" onChange={props.handleChange}
            error={props?.errorData?.degree_title?.[0]}
            className="text-style" startIcon={<IconButton tabIndex="-1" className="icn_fix"><Edit className="icn_size" /></IconButton>}
          />
        </Grid>
        <Grid className="demo_box" item xs={12} sm={12}>
          <Typography className="text_title">{t('StartDate')}</Typography>
          <CustomDateTimePicker handleDate={props.handleStartDateChange} date={props.educationData?.start_date} maxDate={props.educationData?.end_date} />
        </Grid>
        <Grid className="demo_box" item xs={12} sm={12}>
          <Typography className="text_title">{t('EndDate')}</Typography>
          <CustomDateTimePicker handleDate={props.handleEndDateChange} date={props.educationData?.end_date} minDate={props.educationData?.start_date} />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Typography className="quill_des">{t('Description')}</Typography>
          <ReactQuill
            value={props.educationData.description}
            onChange={(e) => props.handleDescription(e)}
            className="quill_style"
            theme="snow"
            modules={{toolbar: toolbarOptions}}
          />
        </Grid>
      </Grid>
    </MyDiv>
  )
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ActionCreators, dispatch),
})

export default connect(null, mapDispatchToProps)(EducationEdit)
