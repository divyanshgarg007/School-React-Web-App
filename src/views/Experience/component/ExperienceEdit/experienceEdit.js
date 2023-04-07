import {Grid, IconButton, Typography} from '@mui/material'
import {Edit} from '@mui/icons-material'
import {useTranslation} from 'react-i18next'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {CustomDateTimePicker, CustomTextBox} from '../../../../components'
import {ActionCreators} from '../../../../redux/actions'
import {toolbarOptions} from '../../../../constants/constant'
import MyDiv from './experienceEdit.style'
const ExperienceEdit = (props) => {
  const {t} = useTranslation()
  return (
    <MyDiv>
      <Grid container xs={12} sm={12} className="edit_exp">
        <Grid className="demo_box" item xs={12} sm={12}>
          <Typography className="title_text2">{t('ExperienceName')}<span> *</span></Typography>
          <CustomTextBox value={props.experienceData?.experience_name} name="experience_name" onChange={props.handleChange}
            classname="text-style" fieldLabel={t('freetext')} startIcon={<IconButton tabIndex="-1" className="icn_fix"><Edit className="icn_size" /></IconButton>}
          />
        </Grid>
        <Grid className="demo_box" item xs={12} sm={12}>
          <Typography className="title_text2">{t('StartDate')}</Typography>
          <CustomDateTimePicker maxDate={props.experienceData?.end_date} handleDate={props.handleStartDateChange} date={props.experienceData?.start_date} />
        </Grid>
        <Grid className="demo_box" item xs={12} sm={12}>
          <Typography className="title_text2">{t('EndDate')}</Typography>
          <CustomDateTimePicker minDate={props.experienceData?.start_date} handleDate={props.handleEndDateChange} date={props.experienceData?.end_date} />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Typography className="title_text2">{t('Description')}</Typography>
          <ReactQuill value={props.experienceData.description}
            onChange={(e) => props.handleDescription(e)} className="quill_style" theme="snow" modules={{toolbar: toolbarOptions}}
          />
        </Grid>
      </Grid>
    </MyDiv>
  )
}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ActionCreators, dispatch),
})

export default connect(null, mapDispatchToProps)(ExperienceEdit)
