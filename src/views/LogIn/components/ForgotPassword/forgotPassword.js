import * as React from 'react'
import Dialog from '@mui/material/Dialog'
import Slide from '@mui/material/Slide'
import {Box, DialogTitle, Grid, Typography} from '@mui/material'
import {CustomButton, CustomTextBox} from '../../../../components/Inputs'
import MyDiv from './forgotPassword.style'

const Transition = React.forwardRef((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />
})

export default function ForgotPassword(props) {
  const popup = (popupbox) => (
    <MyDiv>
      <Grid container className="grid_dialog">
        <DialogTitle>
          <Typography className="label_text">Enter your E-mail id to recieve OTP</Typography>
          <Box className="flex_btn">
            <CustomTextBox value={props.emailIDforOTP} onChange={props.handleChange} />
            <CustomButton onClick={props.handleClickOTP} title="Send OTP" className="btn_one" />
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
      onClose={props.handleOpen}
      fullWidth
    >
      {popup('openDialog')}
    </Dialog>
  )
}
