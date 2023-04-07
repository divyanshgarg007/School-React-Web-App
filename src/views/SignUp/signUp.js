import React, {useEffect, useState} from 'react'
import {Grid, Box, Typography, Divider, Checkbox, FormGroup, FormControlLabel} from '@mui/material'
import {Link, useHistory} from 'react-router-dom'
import {bindActionCreators} from 'redux'
import {connect, useSelector} from 'react-redux'
import {useTranslation} from 'react-i18next'
import {useGoogleLogin} from '@react-oauth/google'
import axios from 'axios'
import GoogleIcon from '../../images/gplus.png'
import {AuthTopPanel, AuthLeftPanel, CustomTextBox, CustomButton, SnackBar} from '../../components'
import {ActionCreators} from '../../redux/actions'
import {getToken, setEmailId} from '../../utilities/authUtils'
import MyDiv from './signUp.style'


const SignUp = (props) => {
  const {t} = useTranslation()
  const [email, setEmail] = useState('')
  const [acceptedTerms, setAcceptedTerms] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const history = useHistory()
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')
  const authState = useSelector((state) => state.authState)

  useEffect(() => {
    if (getToken('token') || getToken('adminToken')) {
      history.push('/')
    }
  }, [])

  useEffect(() => {
    if (authState?.authSignup?.data?.status === 'success') {
      setMessage(authState?.authSignup?.data?.message)
      setStatus('success')
    } else if (authState?.authSignup?.error?.errors) {
      setMessage(authState?.authSignup?.error?.errors?.email[0])
      setStatus('error')
    }
  }, [authState?.authSignup])


  const handleSignup = () => {
    setEmailId('email', email)
    if (email.length > 0) {
      history.push('/emailverify', {email: email})
      props.actions.signUpStart(email)
      props.actions.emailVerifyAction(
        {
          email: email,
        }
      )
    } else {
      setErrorMessage('Enter Valid Email')
    }
  }

  const handleTerms = () => {
    setAcceptedTerms(!acceptedTerms)
  }


  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async(tokenResponse) => {
      const userInfo = await axios.get(
        'https://www.googleapis.com/oauth2/v3/userinfo',
        {headers: {Authorization: `Bearer ${tokenResponse.access_token}`}}
      )
      let signupCred = {
        surname: userInfo?.data?.family_name,
        password: '1234567890',
        name: userInfo?.data?.given_name,
        queryString: '',
        email: userInfo?.data?.email,
        google_id: userInfo?.data?.sub,
      }
      props.actions.authSignupAction(signupCred)
    },
    onError: (errorResponse) => console.log(errorResponse),
  })

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
              <Typography className="welcome_text">{t('Welcome')}</Typography>
              <Typography className="signup_text">{t('signUp')}</Typography>
              <Box className="text_box">
                <CustomTextBox value={email} name="email"
                  onChange={(event) => setEmail(event.target.value)} error={errorMessage} fieldLabel="name@email.com"
                />
              </Box>
              <FormGroup>
                <FormControlLabel control={<Checkbox onChange={handleTerms} checked={acceptedTerms} />}
                  label={<Typography className="check_field">{t('terms1')} <Link className="link_text">{t('terms2')}</Link> {t('terms3')} {' '}
                    <Link className="link_text">{t('terms4')}</Link>.</Typography>}
                />
              </FormGroup>
              <CustomButton disabled={!acceptedTerms} onClick={handleSignup} className="btn-continue" title={t('Continue')} />
              <Divider className="divider_prop" >{t('or')}</Divider>
              <CustomButton onClick={() => handleGoogleLogin()} className="custom_button2" startIcon={<img className="google_icon" src={GoogleIcon} />} title={t('googleText')} />
              <Typography className="register_text">{t('alreadyRegistered')} <Link className="link_text" to="/login">{t('Login')}</Link></Typography>
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

export default connect(null, mapDispatchToProps)(SignUp)
