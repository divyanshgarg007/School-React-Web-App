import * as React from 'react'
import Dialog from '@mui/material/Dialog'
import Slide from '@mui/material/Slide'
import {Box, DialogTitle, Grid, Typography} from '@mui/material'
import {useTranslation} from 'react-i18next'
import {CustomButton} from '../Inputs'
import MyDiv from './customDialog.style'

const Transition = React.forwardRef((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />
})

export default function CustomDialog(props) {
  const {t} = useTranslation()
  const popup = (popupbox) => (
    <MyDiv>
      <Grid container className="grid_dialog">
        <DialogTitle>
          <Typography className="label_text">{t('confirmDelete')} {props.title}?</Typography>
          <Box className="flex_btn">
            <CustomButton onClick={props.handleConfirm} title={t('Delete')} className="btn_one" />
            <CustomButton title={t('Cancel')} onClick={props.handleDelete} className="btn_two" />
          </Box>
        </DialogTitle>
      </Grid>
    </MyDiv>
  )
  return (
    <Dialog
      popupbox="openDialog"
      open={props.openDialog}
      TransitionComponent={Transition}
      onClose={props.handleDelete}
      fullWidth
    >
      {popup('openDialog')}
    </Dialog>
  )
}
