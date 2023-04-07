import * as React from 'react'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import Slide from '@mui/material/Slide'
import {Close} from '@mui/icons-material'
import {Typography, IconButton, Box} from '@mui/material'
import {useTranslation} from 'react-i18next'
import MyDiv from './messageDialog.style'

const Transition = React.forwardRef((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />
})

export default function MessageDialog(props) {
  const {t} = useTranslation()
  const popup = (popupbox) => (
    <MyDiv>
      <Box container className="grid_dialog">

        <IconButton className="icon_cross" onClick={props.handleClickDialog}><Close /></IconButton>

        <DialogContent>
          <Box>
            <Typography className="heading_name1">{t('Message')}</Typography>
            <Box className="wrap_box">
              <Typography className="heading_name">{t('Name')}: </Typography>
              <Typography className="subheading_name">{props?.currentID?.name}</Typography>
            </Box>
            <Box className="wrap_box">
              <Typography className="heading_name">{(t('Email'))}: </Typography>
              <Typography className="subheading_name">{props?.currentID?.email}</Typography>
            </Box>
            <Box className="wrap_box">
              <Typography className="heading_name">{t('Phone1')} </Typography>
              <Typography className="subheading_name">{props?.currentID?.mobile}</Typography>
            </Box>
            <Box className="wrap_box">
              <Typography className="heading_name">{t('Subject')}: </Typography>
              <Typography className="subheading_name">{props?.currentID?.subject}</Typography>
            </Box>
            <Box className="wrap_box">
              <Typography className="heading_name">{t('Description')}: </Typography>
              <Typography className="subheading_name">{props?.currentID?.description}</Typography>
            </Box>
          </Box>
        </DialogContent>
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
