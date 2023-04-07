import * as React from 'react'
import Dialog from '@mui/material/Dialog'
import Slide from '@mui/material/Slide'
import {Box, DialogTitle, Grid, IconButton, Typography} from '@mui/material'
import {Close, Error} from '@mui/icons-material'
import {useTranslation} from 'react-i18next'
import {CustomButton} from '../../../../components'
import MyDiv from './cancelSubscriptionDialog.style'

const Transition = React.forwardRef((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />
})

export default function CancelSubscriptionDialog(props) {
  const {t} = useTranslation()
  const popup = (popupbox) => (
    <MyDiv>
      <Grid container className="grid_dialog">
        <DialogTitle>
          <IconButton className="icon_cross" onClick={props.handleClick}><Close /></IconButton>
          {props.subStatus === 1 ? <Typography className="label_text">{t('subscriptionResume')}</Typography> : <Typography className="label_text">{t('subscriptionCancel')}</Typography>}
          <Box>
            <IconButton className="icn_btn2"><Error /></IconButton>
          </Box>
          {props.subStatus === 1 ? <Typography className="label_text">{t('renewSubscriptionConfirm')}</Typography> : <Typography className="label_text">{t('cancelSubscriptionConfirm')}</Typography>}
          <Box className="">
            <CustomButton onClick={props.handleCancelSubscription} title={t('Yes')} className="btn_one" />
            <CustomButton title={t('Exit')} onClick={props.handleClick} className="btn_two" />
          </Box>
        </DialogTitle>
      </Grid>
    </MyDiv>
  )
  return (
    <Dialog
      popupbox="openCancelSubscription"
      open={props.openCancelSubscription}
      TransitionComponent={Transition}
      onClose={props.handleClick}
      fullWidth
    >
      {popup('openCancelSubscription')}
    </Dialog>
  )
}
