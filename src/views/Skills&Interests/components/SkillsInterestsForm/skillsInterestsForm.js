import React from 'react'
import {Box, Typography, IconButton} from '@mui/material'
import {Edit} from '@mui/icons-material'
import {useTranslation} from 'react-i18next'
import ReactQuill from 'react-quill'
import {CustomTextBox} from '../../../../components'
import {CustomButton} from '../../../../components/Inputs'
import {toolbarOptions} from '../../../../constants/constant'
import MyDiv from './skillsInterestsForm.style'

export default function SkillsInterestsForm(props) {
  const {t} = useTranslation()
  return (
    <MyDiv>
      <Box className="drawer_box">
        <Box className="text_box">
          <Typography className="title_text2">{t('Skills&InterestsName')}<span> *</span></Typography>
          <CustomTextBox value={props.skillsInterestsData?.skill_interest_name} name="skill_interest_name" onChange={props.handleChange}
            error={props?.errorData?.skill_interest_name?.[0]}
            className="text-style" fieldLabel={t('freetext')} startIcon={<IconButton tabIndex="-1" className="icn_fix"><Edit className="icn_size" /></IconButton>}
          />
        </Box>
        <Box className="text_box">
          <Typography className="title3_text">{t('Description')}</Typography>
          <ReactQuill value={props.skillsInterestsData.description}
            onChange={(e) => props.handleDescription(e)} className="quill_style" theme="snow" modules={{toolbar: toolbarOptions}}
          />
        </Box>
        <Box className="flex_btn">
          <CustomButton onClick={props.handleSubmit} className="btn_submit" title={t('Submit')} />
          <CustomButton onClick={props.handleClick} className="btn_cancel" title={t('Cancel')} />
        </Box>
      </Box>
    </MyDiv>
  )
}
