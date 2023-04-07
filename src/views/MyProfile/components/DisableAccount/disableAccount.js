import * as React from 'react'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Slide from '@mui/material/Slide'
import {Close} from '@mui/icons-material'
import {Typography, Grid, IconButton, Box} from '@mui/material'
import {useTranslation} from 'react-i18next'
import {CustomButton, CustomTextBox} from '../../../../components'
import MyDiv from './disableAccount.style'

const Transition = React.forwardRef((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />
})

export default function DisableAccount(props) {
  const {t} = useTranslation()
  const popup = (popupbox) => (
    <MyDiv>
      <Box container className="grid_dialog">
        <DialogTitle>
          <IconButton className="icon_cross" onClick={props.handleDisable}><Close /></IconButton>
          <Typography className="reset_text">{props.accountStatus === 2 && t('EnableDisable')}</Typography>
          <Typography className="reset_text">{props.accountStatus === 1 && t('disableText')}</Typography>
        </DialogTitle>
        <DialogContent>
          <Grid container md={12}>
            {props.accountStatus === 1 ? <Grid md={12} className="grid_label">
              <Typography className="text_label">{t('Email')}<span>*</span></Typography>
              <CustomTextBox type="email" value={props.inputEmail?.email} onChange={props.handleEmail} name="email" />
            </Grid> : null}
          </Grid>
          <Grid container md={12}>
            <Box className="btn_flex">
              <CustomButton className="btn_submit" title={props.accountStatus === 1 ? t('Submit') : t('Yes')} onClick={props.handleDisableAccountConfirmation} />
              <CustomButton className="btn_cancel" title={props.accountStatus === 1 ? t('Cancel') : t('No')} onClick={props.handleDisable} />
            </Box>
          </Grid>
        </DialogContent>
      </Box>
    </MyDiv>
  )
  return (
    <Dialog
      popupbox="openDisableAccount"
      open={props.openDisableAccount}
      TransitionComponent={Transition}
      onClose={props.handleDisable}
      fullWidth
    >
      {popup('openDisableAccount')}
    </Dialog>
  )
}
