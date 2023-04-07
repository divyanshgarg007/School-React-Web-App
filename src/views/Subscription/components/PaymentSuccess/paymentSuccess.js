/* eslint-disable no-unused-vars */
import {Alert, Box} from '@mui/material'
import React, {useEffect, useState} from 'react'
import {connect, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {bindActionCreators} from 'redux'
import {useTranslation} from 'react-i18next'
import useQuery from '../../../../constants/queryString'
import {ActionCreators} from '../../../../redux/actions'
import * as routesNames from '../../../../constants/routes'
import MyDiv from './paymentSuccess.style'

const PaymentSuccess = (props) => {
  const {t} = useTranslation()
  const history = useHistory()
  const paymentState = useSelector((state) => state.paymentState)

  let query = useQuery()
  const id = query.get('orderId')
  const obj = {
    status: 'success',
    orderId: id,
  }

  useEffect(() => {
    props.actions.postConfirmOrderAction(obj)
  }, [])

  useEffect(() => {
    if (paymentState?.postConfirmOrder?.data?.meta?.status === 'success') {
      history.push(routesNames.INVOICE)
    }
  }, [paymentState?.postConfirmOrder?.data])


  return (
    <MyDiv>
      <Box m={3}>
        <Alert>{t('paymentSuccess')}</Alert>
      </Box>
    </MyDiv>
  )
}


const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ActionCreators, dispatch),
})

export default connect(null, mapDispatchToProps)(PaymentSuccess)
