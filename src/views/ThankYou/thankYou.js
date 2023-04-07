import React, {useEffect} from 'react'
import {Grid, Box, Typography} from '@mui/material'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {useHistory} from 'react-router-dom'
import {useTranslation} from 'react-i18next'
import {AuthTopPanel, AuthLeftPanel, CustomButton} from '../../components'
import {ActionCreators} from '../../redux/actions'
import {getToken} from '../../utilities/authUtils'
import MyDiv from './thankYou.style'

const ThankYou = () => {
  const {t} = useTranslation()
  const history = useHistory()
  const handleSignUpCompleted = () => {
    history.push('/login')
  }
  useEffect(() => {
    if (getToken('token') || getToken('adminToken')) {
      history.push('/')
    }
  }, [])
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
              <Typography className="welcome_text">{t('thankYou')}</Typography>
              {/* <Typography className="common_text">{t('representText')}</Typography>
              <Box className="icn_btn">
                <Box className="icn_btns">
                  <IconButton className="thankyou_icons">
                    <Person />
                  </IconButton>
                  <Typography>{t('justMyself')}</Typography>
                </Box>
                <Box className="icn_btns">
                  <IconButton className="thankyou_icons">
                    <AccountBalance />
                  </IconButton>
                  <Typography className="break_text">{t('team')}</Typography>
                </Box>

              </Box> */}
              <CustomButton onClick={handleSignUpCompleted} className="custom_btn" title={t('Continue')} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </MyDiv>
  )
}


const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ActionCreators, dispatch),
})

export default connect(null, mapDispatchToProps)(ThankYou)
