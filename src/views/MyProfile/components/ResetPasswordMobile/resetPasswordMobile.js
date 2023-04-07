import React from 'react'
import {Typography, Box, Grid} from '@mui/material'
import {useTranslation} from 'react-i18next'
import {CustomTextBox} from '../../../../components'
import MyDiv from './resetPasswordMobile.style'

export default function ResetPasswordMobile(props) {
  const {t} = useTranslation()
  return (
    <MyDiv>
      <Box>
        <Typography className="reset_text">{t('PasswordReset')}</Typography>
        <Grid container xs={12}>
          <Grid item xs={12} className="grid_label">
            <Typography className="text_label">{t('OldPassword')}<span>*</span></Typography>
            <CustomTextBox type="password" value={props.inputPassword?.old_password} onChange={props.handlePassword} name="old_password" fieldLabel={t('enter1')} />
          </Grid>
          <Grid item xs={12} className="grid_label">
            <Typography className="text_label">{t('NewPassword')}<span>*</span></Typography>
            <CustomTextBox type="password" value={props.inputPassword?.password} onChange={props.handlePassword} name="password" fieldLabel={t('enter2')} />
          </Grid>
          <Grid item xs={12} className="grid_label">
            <Typography className="text_label">{t('ConfirmNewPassword')}<span>*</span></Typography>
            <CustomTextBox type="password" value={props.repeatPassword} onChange={props.handleRepeatpassword} name="password" fieldLabel={t('enter3')} />
          </Grid>
        </Grid>
      </Box>
    </MyDiv>
  )
}
