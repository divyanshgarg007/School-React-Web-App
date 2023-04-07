import {Box, Typography} from '@mui/material'
import {Link} from 'react-router-dom'
import React from 'react'
import {useTranslation} from 'react-i18next'
import {CustomTextBox, CustomButton} from '../../../../components/Inputs'
import MyDiv from './authBottomPanelMain.style'
export default function AuthBottomPanelMain() {
  const {t} = useTranslation()
  return (
    <MyDiv>
      <Box className="flex_boxes">
        <Box className="grid_boxes">
          <Typography className="main_headings">{t('Links')}</Typography>
          <Link className="link_text">{t('AboutUs')}</Link>
          <Link className="link_text">{t('ContactUs')}</Link>
          <Link className="link_text">{t('advertiseText')}</Link>
          <Link className="link_text">{t('Blog')}</Link>
        </Box>
        <Box className="grid_boxes">
          <Typography className="main_headings">{t('AccountDetails')}</Typography>
          <Link className="link_text">{t('Login')}</Link>
          <Link className="link_text">{t('Register')}</Link>
          <Link className="link_text">{t('Information')}</Link>
          <Link className="link_text">{t('Blog')}</Link>
        </Box>
        <Box className="grid_boxes">
          <Typography className="main_headings">{t('Newsletter')}</Typography>
          <Typography className="link_text2">{t('SubscribeText')}</Typography>
          <Box className="box_style">
            <CustomTextBox fieldLabel="email address" />
            <CustomButton title={t('Subscribe')} className="btn_style" />
          </Box>
        </Box>
      </Box>
    </MyDiv>
  )
}
