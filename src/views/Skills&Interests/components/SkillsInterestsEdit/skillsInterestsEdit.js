import React from 'react'
import {Box, IconButton, Typography} from '@mui/material'
import {Edit} from '@mui/icons-material'
import {useTranslation} from 'react-i18next'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import ReactQuill from 'react-quill'
import {CustomTextBox} from '../../../../components'
import {ActionCreators} from '../../../../redux/actions'
import {toolbarOptions} from '../../../../constants/constant'
import MyDiv from './skillsInterestsEdit.style'
const SkillsInterestsEdit = (props) => {

  const {t} = useTranslation()
  return (
    <MyDiv>
      <Box className="edit_sni">
        <Typography className="title_text2">{t('Skills&InterestsName')}<span> *</span></Typography>
        <CustomTextBox value={props.skillsInterestsData?.skill_interest_name} name="skill_interest_name" onChange={props.handleChange}
          error={props?.errorData?.skill_interest_name?.[0]}
          className="text-style" fieldLabel={t('freetext')} startIcon={<IconButton tabIndex="-1" className="icn_fix"><Edit className="icn_size" /></IconButton>}
        />
      </Box>
      <Box className="area_box">
        <Typography className="title3_text">{t('Description')}</Typography>
        <ReactQuill value={props.skillsInterestsData.description}
          onChange={(e) => props.handleDescription(e)} className="quill_style" theme="snow" modules={{toolbar: toolbarOptions}}
        />
      </Box>
    </MyDiv>
  )
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ActionCreators, dispatch),
})

export default connect(null, mapDispatchToProps)(SkillsInterestsEdit)

