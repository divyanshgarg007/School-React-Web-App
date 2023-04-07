import {Box, Grid, Typography} from '@mui/material'
import React, {useEffect, useState} from 'react'
import {useTranslation} from 'react-i18next'
import {connect, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {bindActionCreators} from 'redux'
import {AuthLeftPanel, AuthTopPanel, CustomButton, CustomTextBox, SnackBar} from '../../components'
import {ActionCreators} from '../../redux/actions'
import * as routesNames from '../../constants/routes'
import MyDiv from './updatePassword.style'

const UpdatePassword = (props) => {

  const {t} = useTranslation()
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')
  const [data, setData] = useState()
  const history = useHistory()
  const authState = useSelector((state) => state.authState)

  useEffect(() => {
    if (authState?.sendOtp?.data?.data?.meta?.status === 'success') {
      setMessage(authState?.sendOtp?.data?.data?.meta?.message)
      setStatus('success')
    }
  }, [authState?.sendOtp])

  useEffect(() => {
    if (authState?.updatePassword?.data?.data?.meta?.status === 'success') {
      props.actions.sendOtpSuccess(null)
      // setMessage(authState?.updatePassword?.data?.data?.meta?.message)
      // setStatus('success')
      history.push(routesNames.LOGIN)
    } else if (authState?.updatePassword?.error?.meta?.status === 'failure') {
      props.actions.sendOtpSuccess(null)
      setMessage(authState?.updatePassword?.error?.meta?.message)
      setStatus('error')
    }
  }, [authState?.updatePassword])

  const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }

  const handleUpdatePassword = () => {
    let obj = {
      email: data?.email,
      otp: Number(data?.otp),
      password: data?.password,
    }

    const regex = new RegExp('(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}')
    const isValid = regex.test(data?.password)
    if (isValid === false) {
      setMessage(t('passwordValidation'))
      setStatus('error')
    } else {
      setMessage(null)
      setStatus('error')
    }
    if (isValid === true) {
      props.actions.updatePasswordAction(obj)
    }
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
          <Grid item md={5} xs={12}>
            <Box className="login_box">
              <Typography className="welcome_text">{t('ResetPassword')}</Typography>
              <Typography className="heading_text">{t('Email')}</Typography>
              <CustomTextBox onChange={handleChange} name="email" value={data?.email} />
              <Typography className="heading_text">{t('NewPassword')}</Typography>
              <CustomTextBox type="password" onChange={handleChange} name="password" value={data?.password} />
              <Typography className="heading_text">{t('OneTimePassword')}</Typography>
              <CustomTextBox type="password" onChange={handleChange} name="otp" value={data?.otp} />
              <CustomButton onClick={handleUpdatePassword} className="custom_button" title={t('UpdatePassword')} />
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

export default connect(null, mapDispatchToProps)(UpdatePassword)

