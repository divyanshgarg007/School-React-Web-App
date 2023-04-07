/* eslint-disable no-unused-vars */
import {KeyboardReturn} from '@mui/icons-material'
import {Alert, Box, IconButton} from '@mui/material'
import React, {useEffect, useState} from 'react'
import {connect, useSelector} from 'react-redux'
import {bindActionCreators} from 'redux'
import {useHistory} from 'react-router-dom'
import {SnackBar} from '../../components'
import useQuery from '../../constants/queryString'
import {ActionCreators} from '../../redux/actions'
import * as routesNames from '../../constants/routes'
import MyDiv from './accountDisabled.style'

const AccountDisabled = (props) => {
  let query = useQuery()
  const token = query.get('disable_account_token')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')
  const authState = useSelector((state) => state.authState)
  const history = useHistory()
  useEffect(() => {
    let obj = {
      is_active: false,
      disable_account_token: token,
    }
    props.actions.postDisableAccountAction(obj)
  }, [token])

  useEffect(() => {
    if (authState?.disableAccount?.data?.data?.meta?.status === 'success') {
      setMessage(authState?.disableAccount?.data?.data?.meta?.message)
      setStatus('success')
    } else if (authState?.disableAccount?.error?.meta?.status === 'failure') {
      setMessage(authState?.disableAccount?.error?.meta?.message)
      setStatus('error')
    }
  }, [authState?.disableAccount])

  //handling snackbar close
  const handleSnackBarClose = () => {
    setMessage('')
    setStatus('')
    props.actions.cleanUpUserState()
  }

  const handleBackToHome = () => {
    history.push(routesNames.MYPROFILE)
  }


  return (
    <MyDiv>
      <Box m={3}>
        <Alert>Account Disabled</Alert>
        <IconButton onClick={handleBackToHome}><KeyboardReturn className="icn_style2" /></IconButton>
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

export default connect(null, mapDispatchToProps)(AccountDisabled)
