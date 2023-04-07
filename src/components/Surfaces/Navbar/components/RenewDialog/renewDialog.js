import * as React from 'react'
import Dialog from '@mui/material/Dialog'
import Slide from '@mui/material/Slide'
import {Box, DialogTitle, Grid, IconButton, Typography} from '@mui/material'
import {Close, Error} from '@mui/icons-material'
import {useTranslation} from 'react-i18next'
import {CustomButton} from '../../../../Inputs'
import MyDiv from './renewDialog.style'

const Transition = React.forwardRef((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />
})

export default function RenewDialog(props) {
  const {t} = useTranslation()
  const popup = (popupbox) => (
    <MyDiv>
      <Grid container className="grid_dialog">
        <DialogTitle>
          <IconButton className="icon_cross" onClick={props.handleClick}><Close /></IconButton>
          <Typography className="label_text">{t('SubscriptionRenew')}</Typography>
          <Box>
            <IconButton className="icn_btn2"><Error /></IconButton>
          </Box>
          <Typography className="label_text">{t('confirmRenew')}</Typography>
          <Box className="">
            <CustomButton onClick={props.handleRenewSubscription} title={t('Yes')} className="btn_one" />
            <CustomButton title={t('No')} onClick={props.handleClick} className="btn_two" />
          </Box>
        </DialogTitle>
      </Grid>
    </MyDiv>
  )
  return (
    <Dialog
      popupbox="openRenewSubscription"
      open={props.openRenewSubscription}
      TransitionComponent={Transition}
      onClose={props.handleClick}
      fullWidth
    >
      {popup('openRenewSubscription')}
    </Dialog>
  )
}
