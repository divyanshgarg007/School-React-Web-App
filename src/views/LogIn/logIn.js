import {useGoogleLogin} from '@react-oauth/google'
import React, {useEffect, useState} from 'react'
import {Grid, Box, Typography, Divider} from '@mui/material'
import {Link, useHistory} from 'react-router-dom'
import {connect, useSelector} from 'react-redux'
import {bindActionCreators} from 'redux'
import axios from 'axios'
import {useTranslation} from 'react-i18next'
import {AuthTopPanel, AuthLeftPanel, CustomTextBox, CustomButton, SnackBar, Loader} from '../../components'
import {getToken} from '../../utilities/authUtils'
import {ActionCreators} from '../../redux/actions'
import * as routesNames from '../../constants/routes'
import GoogleIcon from '../../images/gplus.png'
import {ForgotPassword} from './components'
import MyDiv from './logIn.style'

const LogIn = (props) => {
  const {t} = useTranslation()
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [emailIDforOTP, setEmailIDforOTP] = useState('')
  const [openDialog, setOpenDialog] = useState(false)

  const authState = useSelector((state) => state.authState)
  const errorData = authState?.authLogin?.error?.errors

  useEffect(() => {
    if (authState?.authLogin?.data?.meta?.status === 'success') {
      if (getToken('adminToken')) {
        history.push('/zunpakaloudela')
      } else if (getToken('token')) {
        history.push('/dashboard')
      } else {
        history.push('/login')
      }
    } else {
      history.push('/login')
      setMessage(authState?.authLogin?.error?.meta?.message)
      setStatus('error')
    }
  }, [authState?.authLogin])

  useEffect(() => {
    if (authState?.sendOtp?.data?.data?.meta?.status === 'success') {
      history.push(routesNames.UPDATEPASSWORD)
    } else if (authState?.sendOtp?.error?.meta?.status === 'failure') {
      setMessage(authState?.sendOtp?.error?.meta?.message)
      setStatus('error')
    }
  }, [authState?.sendOtp])

  useEffect(() => {
    if (authState?.updatePassword?.data?.data?.meta?.status === 'success') {
      setMessage(authState?.updatePassword?.data?.data?.meta?.message)
      setStatus('success')
    }
  }, [authState?.updatePassword?.data])

  useEffect(() => {
    if (getToken('token') || getToken('adminToken')) {
      history.push('/')
    }
  }, [])


  const handleLogin = () => {
    let userCredientials = {
      email: email,
      password: password,
    }
    props.actions.authLoginAction(userCredientials)
  }

  //handling snackbar close
  const handleSnackBarClose = () => {
    setMessage('')
    setStatus('')
    props.actions.cleanUpUserState()
  }

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async(tokenResponse) => {
      const userInfo = await axios.get(
        'https://www.googleapis.com/oauth2/v3/userinfo',
        {headers: {Authorization: `Bearer ${tokenResponse.access_token}`}}
      )
      let userCredientials = {
        email: userInfo?.data?.email,
        password: '1234567890',
        google_id: userInfo?.data?.sub,
      }
      props.actions.authLoginAction(userCredientials)
    },
    onError: (errorResponse) => console.log(errorResponse),
  })


  const handleOpen = () => {
    setOpenDialog(!openDialog)
  }
  const handleForgotPassword = () => {
    setOpenDialog(!openDialog)
  }

  const handleChange = (email) => {
    setEmailIDforOTP(email.target.value)
  }
  const handleClickOTP = () => {
    let obj = {
      email: emailIDforOTP,
    }
    props.actions.sendOtpAction(obj)
    setOpenDialog(false)
    setEmailIDforOTP('')
  }

  const handleEnterKey = (e) => {
    if (e.key === 'Enter') {
      handleLogin()
    }
  }

  return (
    <MyDiv>
      {(authState?.authLogin?.loading) &&
      <div>
        <Loader />
      </div>
      }
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
              <Typography className="welcome_text">{t('Welcome')}</Typography>
              <Typography className="login_text">{t('Login')}</Typography>
              <Box className="text_box">
                <CustomTextBox value={email} onChange={(event) => setEmail(event.target.value)} error={errorData?.email?.[0]} fieldLabel="name@email.com" />
              </Box>
              <Box className="text_box" mt={2}>
                <CustomTextBox onKeyUp={handleEnterKey} type="password" value={password} onChange={(event) => setPassword(event.target.value)} error={errorData?.password?.[0]} fieldLabel="password" />
              </Box>
              <CustomButton onClick={handleLogin} type="submit" className="btn-login" title={t('Login')} />
              <Link onClick={handleForgotPassword} className="forgot_text">{t('forgotPassword')}</Link>
              <Divider className="divider_prop" >{t('or')}</Divider>
              <CustomButton onClick={() => handleGoogleLogin()} className="custom_button2" startIcon={<img className="google_icon" src={GoogleIcon} />} title={t('googleText')} />
              <Typography className="register_text">{t('noaccnt')} <Link className="link_text" to="/signup">{t('signUp')}</Link></Typography>
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
      <ForgotPassword
        title="Skill"
        openDialog={openDialog}
        handleOpen={handleOpen}
        handleClickOTP={handleClickOTP}
        handleChange={handleChange}
        emailIDforOTP={emailIDforOTP}
      />
    </MyDiv>
  )
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ActionCreators, dispatch),
})

export default connect(null, mapDispatchToProps)(LogIn)
