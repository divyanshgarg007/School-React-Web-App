import * as React from 'react'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Slide from '@mui/material/Slide'
import {Close} from '@mui/icons-material'
import {Typography, Grid, IconButton, Box} from '@mui/material'
import {useTranslation} from 'react-i18next'
import {CustomButton, CustomTextBox} from '../../../../components'
import MyDiv from './resetPassword.style'

const Transition = React.forwardRef((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />
})

export default function ResetPassword(props) {
  const {t} = useTranslation()
  const popup = (popupbox) => (
    <MyDiv>
      <Grid container className="grid_dialog">
        <DialogTitle>
          <IconButton className="icon_cross" onClick={props.handleClick}><Close /></IconButton>
          <Typography className="reset_text">{t('PasswordReset')}</Typography>
        </DialogTitle>
        <DialogContent>
          <Grid container md={12}>
            <Grid md={12} className="grid_label">
              <Typography className="text_label">{t('OldPassword')}<span>*</span></Typography>
              <CustomTextBox type="password" value={props.inputPassword?.old_password} onChange={props.handlePassword} name="old_password" fieldLabel={t('enter1')} />
            </Grid>
            <Grid md={12} className="grid_label">
              <Typography className="text_label">{t('NewPassword')}<span>*</span></Typography>
              <CustomTextBox type="password" value={props.inputPassword?.password} onChange={props.handlePassword} name="password" fieldLabel={t('enter2')} />
            </Grid>
            <Grid md={12} className="grid_label">
              <Typography className="text_label">{t('ConfirmNewPassword')}<span>*</span></Typography>
              <CustomTextBox value={props.repeatPassword} onChange={props.handleRepeatpassword} type="password" fieldLabel={t('enter3')} />
            </Grid>
          </Grid>
          <Box mt={3} className="box_btn">
            <CustomButton className="btn_submit" title={t('Submit')} onClick={props.handleSubmitPassword} />
            <CustomButton className="btn_cancel" title={t('Cancel')} onClick={props.handleClick} />
          </Box>
        </DialogContent>

      </Grid>

    </MyDiv>
  )
  return (
    <Dialog
      popupbox="openResetPassword"
      open={props.openResetPassword}
      TransitionComponent={Transition}
      onClose={props.handleClick}
    >
      {popup('openResetPassword')}
    </Dialog>
  )
}
