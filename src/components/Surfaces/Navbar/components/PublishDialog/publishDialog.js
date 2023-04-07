import * as React from 'react'
import Dialog from '@mui/material/Dialog'
import Slide from '@mui/material/Slide'
import {Box, DialogActions, DialogTitle, IconButton, Typography} from '@mui/material'
import {Close} from '@mui/icons-material'
import {useTranslation} from 'react-i18next'
import {CustomButton} from '../../../../Inputs'
import MyDiv from './publishDialog.style'

const Transition = React.forwardRef((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />
})

export default function PublishDialog(props) {
  const {t} = useTranslation()
  const popup = (popupbox) => (
    <MyDiv>
      <Box container className="grid_dialog">
        <DialogTitle>
          <IconButton className="icon_cross" onClick={props.handleClickDialog}><Close /></IconButton>
          {!props.getDaysToExpire(props.expiryDate) ?
            <Typography className="reset_text">{t('confirmPublish')}</Typography> :
            <Typography className="reset_text">{t('renewText')}</Typography>
          }
        </DialogTitle>
        {!props.getDaysToExpire(props.expiryDate) ?
          <DialogActions>
            <Box className="btn_flex">
              <CustomButton onClick={(e) => props.handleSubmit(true)} className="btn_submit" title={t('Yes')} />
              <CustomButton onClick={props.handleClickDialog} className="btn_cancel" title={t('No')} />
            </Box>
          </DialogActions> : null
        }
      </Box>
    </MyDiv>
  )
  return (
    <Dialog
      popupbox="openDialog"
      open={props.openDialog}
      TransitionComponent={Transition}
      onClose={props.handleDialog}
      fullWidth
    >
      {popup('openDialog')}
    </Dialog>
  )
}
