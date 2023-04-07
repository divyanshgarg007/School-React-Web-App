import React, {useEffect, useState} from 'react'
import {Grid, Box, Typography} from '@mui/material'
import {bindActionCreators} from 'redux'
import {connect, useSelector} from 'react-redux'
import {useLocation} from 'react-router-dom'
import {useTranslation} from 'react-i18next'
import {AuthTopPanel, AuthLeftPanel, CustomButton, SnackBar} from '../../components'
import {ActionCreators} from '../../redux/actions'
import MyDiv from './emailVerify.style'
const EmailVerification = (props) => {
  const {t} = useTranslation()
  const location = useLocation()
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')
  const authState = useSelector((state) => state.authState)

  useEffect(() => {
    if (authState?.verifyEmail?.data?.status === 'success') {
      setMessage(authState?.verifyEmail?.data?.message)
      setStatus('success')
    } else {
      setMessage(authState?.verifyEmail?.data?.message)
      setStatus('error')
    }
  }, [authState?.verifyEmail?.data?.status])


  const handleResendLink = () => {
    props.actions.emailVerifyAction(
      {
        email: location?.state?.email,
        resend: 1,
      }
    )
  }

  //handling snackbar close
  const handleSnackBarClose = () => {
    setMessage('')
    setStatus('')
    props.actions.cleanUpUserState()
  }

  return (
    <MyDiv>
      <Box className="top_panel">
        <AuthTopPanel />
      </Box>
      <Box>
        <Grid container className="auth-container">
          <Grid item md={7}>
            <AuthLeftPanel />
          </Grid>
          <Grid item md={5}>
            <Box className="login_box">
              <Typography className="welcome_text">{t('verificationText')}</Typography>
              <Typography className="common_text">
                {t('verificationText1')}
              </Typography>
              <Typography className="common_text">{t('verificationText2')} <span className="link_text">{location?.state?.email}</span>.
                {t('verificationText3')}
              </Typography>
              <Typography className="common_text">
                {t('verificationText4')}
              </Typography>
              <Typography className="common_text2">
                {t('verificationText5')}
              </Typography>
              <CustomButton onClick={handleResendLink} className="custom_button" title={t('resendEmail')} />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <SnackBar
        message={message}
        severity={status}
        open={message?.length > 0}
        close={handleSnackBarClose}
      />
    </MyDiv>
  )
}


const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ActionCreators, dispatch),
})

export default connect(null, mapDispatchToProps)(EmailVerification)
