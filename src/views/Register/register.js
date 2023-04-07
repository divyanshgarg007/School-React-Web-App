import {bindActionCreators} from 'redux'
import {connect, useSelector} from 'react-redux'
import React, {useEffect, useState} from 'react'
import {Grid, Box, Typography} from '@mui/material'
import {useHistory} from 'react-router-dom'
import {useTranslation} from 'react-i18next'
import {AuthTopPanel, AuthLeftPanel, CustomTextBox, CustomButton, SnackBar, Loader} from '../../components'
import {ActionCreators} from '../../redux/actions'
import useQuery from '../../constants/queryString'
import {getEmailId, getToken, removeEmailId} from '../../utilities/authUtils'
import MyDiv from './register.style'

const Register = (props) => {
  const {t} = useTranslation()
  const history = useHistory()
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')

  const [repeatPassword, setRepeatpassword] = useState()
  const [registerData, setRegisterData] = useState({})
  const authState = useSelector((state) => state.authState)
  const errorData = authState?.authSignup?.error?.errors
  let query = useQuery()
  const queryString = query.get('queryString')

  const email = getEmailId('email')

  useEffect(() => {
    if (authState?.authSignup?.data?.status === 'success') {
      setMessage(authState?.authSignup?.data?.message)
      setStatus('success')
      history.push('/thankyou')
      removeEmailId('email')

    } else if (authState?.authSignup?.data?.status === 'failure') {
      setMessage(authState?.authSignup?.data?.message)
      setStatus('error')
      history.push('/register')
    }
  }, [authState?.authSignup?.data?.status])


  useEffect(() => {
    if (getToken('token') || getToken('adminToken')) {
      history.push('/')
    }
  }, [])


  const handleRepeatPassword = (e) => {
    setRepeatpassword(e.target.value)
  }

  const handleChange = (e) => {
    setRegisterData({...registerData, [e.target.name]: e.target.value})
  }


  const handleSubmit = () => {

    const regexString = new RegExp('^[a-zA-Z]+$')
    const regex = new RegExp('(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}')
    const isValid = regex.test(registerData?.password)
    const isValidName = regexString.test(registerData?.name)
    const isValidSurname = regexString.test(registerData?.surname)
    if (isValid === false) {
      setMessage(t('passwordValidation'))
      setStatus('error')
    } else {
      setMessage(null)
      setStatus('error')
      if (registerData?.password !== repeatPassword) {
        setMessage('Passwords do not match.')
        setStatus('error')
      } else {
        setMessage(null)
        setStatus('error')
      }
    }

    if (isValidName === false || isValidSurname === false) {
      setMessage('name & surname field contains alphabets only, no spaces or any other character')
      setStatus('error')
    }

    if (isValid === true && registerData?.password === repeatPassword && isValidName === true && isValidSurname === true) {
      props.actions.authSignupAction({...registerData, queryString, email})
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
      {(authState?.authSignup?.loading) &&
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
              <Typography className="welcome_text">{t('Welcome')} {t('to')}</Typography>
              <Typography className="welcome_text">{t('Didaktoras')}</Typography>
              <Typography mt={1} mb={1} className="common_text1">{t('registerText')}</Typography>
              <Box className="text_box">
                <CustomTextBox value={props.registerData?.name} name="name"
                  onChange={handleChange} error={errorData?.name?.[0]} className="custom_input" fieldLabel="Name"
                />
              </Box>
              <Box className="text_box">
                <CustomTextBox value={props.registerData?.surname} name="surname"
                  onChange={handleChange} className="custom_input" fieldLabel="Surname"
                />
              </Box>
              <Box className="text_box">
                <CustomTextBox value={props.registerData?.password} name="password"
                  onChange={handleChange} type="password" error={errorData?.password?.[0]} className="custom_input" fieldLabel="Password"
                />
              </Box>
              <Box className="text_box">
                <CustomTextBox onChange={handleRepeatPassword} type="password" className="custom_input" fieldLabel="Repeat Password" />
              </Box>
              <Typography mt={1} mb={1} className="common_text1">{t('passwordValidation')}</Typography>
              <CustomButton onClick={() => handleSubmit()} className="custom_button" title={t('Continue')} />
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

export default connect(null, mapDispatchToProps)(Register)
