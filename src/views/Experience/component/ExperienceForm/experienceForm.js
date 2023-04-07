import React from 'react'
import {Box, Typography, IconButton, Grid} from '@mui/material'
import {Edit} from '@mui/icons-material'
import {useTranslation} from 'react-i18next'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import {CustomButton, CustomDateTimePicker, CustomTextBox} from '../../../../components'
import {toolbarOptions} from '../../../../constants/constant'
import MyDiv from './experienceForm.style'

export default function ExperienceForm(props) {
  const {t} = useTranslation()
  return (
    <MyDiv>
      <Box className="drawer_box">
        <Grid className="box_demo" container>
          <Grid item md={12}>
            <Typography className="title_text2">{t('ExperienceName')}<span> *</span></Typography>
            <CustomTextBox value={props.experienceData?.experience_name} name="experience_name" onChange={props.handleChange}
              className="text-style" fieldLabel={t('freetext')} error={props?.errorData?.experience_name?.[0]}
              startIcon={<IconButton tabIndex="-1" className="icn_fix"><Edit className="icn_size" /></IconButton>}
            />
          </Grid>
        </Grid>
        <Grid container mt={2} columnSpacing={2}>
          <Grid item md={4}>
            <Typography className="title_text2">{t('StartDate')}</Typography>
            <CustomDateTimePicker
              maxDate={props.experienceData?.end_date}
              onError={props?.errorData?.start_date?.[0]}
              handleDate={props.handleStartDateChange}
              date={props.experienceData?.start_date}
            />
          </Grid>
          <Grid item md={4}>
            <Typography className="title_text2">{t('EndDate')}</Typography>
            <CustomDateTimePicker
              minDate={props.experienceData?.start_date}
              onError={props?.errorData?.end_date?.[0]}
              handleDate={props.handleEndDateChange}
              date={props.experienceData?.end_date}
            />
          </Grid>
        </Grid>
        <Box className="box_demo">
          <Grid item md={12} className="grid_box">
            <ReactQuill value={props.experienceData.description}
              onChange={(e) => props.handleDescription(e)} className="quill_style" theme="snow" modules={{toolbar: toolbarOptions}}
            />
          </Grid>
        </Box>
        <Box className="flex_btn">
          <CustomButton onClick={props.handleSubmit} className="btn_submit" title={t('Submit')} />
          <CustomButton onClick={props.handleClick} className="btn_cancel" title={t('Cancel')} />
        </Box>
      </Box>
    </MyDiv>
  )

}
