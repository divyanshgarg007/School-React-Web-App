import {TabContext, TabList, TabPanel} from '@mui/lab'
import {Box, Tab, Typography} from '@mui/material'
import {useTranslation} from 'react-i18next'
import React, {useEffect, useState} from 'react'
import {bindActionCreators} from 'redux'
import {connect, useSelector} from 'react-redux'
import CardDetails from '../CardDetails'
import Payments from '../Payments'
import {ActionCreators} from '../../../../redux/actions'
import {SnackBar} from '../../../../components'
import MyDiv from './subscriptionPaymentDetails.style'

const SubscriptionPaymentDetails = (props) => {
  const {t} = useTranslation()
  const [value, setValue] = useState('1')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')
  const [openCancelSubscription, setOpenCancelSubscription] = useState(false)

  const [invoiceDetails, setInvoiceDetails] = useState()
  const paymentState = useSelector((state) => state.paymentState)

  useEffect(() => {
    props.actions.getPaymentDetailsAction()
  }, [])

  useEffect(() => {
    setInvoiceDetails(paymentState?.getPaymentDetails?.data?.data?.payload)
  }, [paymentState])

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleCancelSubscription = () => {
    let obj = {
      reason: 'No longer using Schoolapp.',
    }
    if (invoiceDetails?.unsubscribe_status === 1) {
      props.actions.postRenewSubscriptionAction(obj)
    }
    if (invoiceDetails?.unsubscribe_status === 0) {
      props.actions.postCancelSubscriptionAction(obj)
    }
    setOpenCancelSubscription(!openCancelSubscription)
  }

  useEffect(() => {
    if (paymentState?.postCancelSubscription?.data?.data?.meta?.status === 'success') {
      setMessage(paymentState?.postCancelSubscription?.data?.data?.meta?.message)
      setStatus('success')
    } else if (paymentState?.postCancelSubscription?.data?.data?.meta?.status === 'failure') {
      setMessage(paymentState?.postCancelSubscription?.data?.data?.meta?.message)
      setStatus('error')
    }
  }, [paymentState?.postCancelSubscription?.data?.data])


  //handling snackbar close
  const handleSnackBarClose = () => {
    setMessage('')
    setStatus('')
    props.actions.cleanUpUserState()
  }

  const handleClick = () => {
    setOpenCancelSubscription(!openCancelSubscription)
  }


  return (
    <MyDiv>
      <Box className="sub_box">
        <Typography className="page_title">{t('SubscriptionDetails')}</Typography>
        <TabContext value={value}>
          <Box>
            <TabList
              scrollButtons
              className="tabs_box"
              allowScrollButtonsMobile
              textColor="#262728"
              onChange={handleChange}
              TabIndicatorProps={{
                style: {
                  backgroundColor: '#1D3160',
                },
              }}
            >
              <Tab className="tab_names" label={t('CardDetails')} value="1" />
              <Tab className="tab_names" label={t('Payments')} value="2" />
            </TabList>
          </Box>
          <TabPanel value="1" className="tab_panels">
            <CardDetails
              paymentState={paymentState}
              invoiceDetails={invoiceDetails}
              handleCancelSubscription={handleCancelSubscription}
              handleClick={handleClick}
              openCancelSubscription={openCancelSubscription}
            />
          </TabPanel>
          <TabPanel value="2" className="tab_panels">
            <Payments />
          </TabPanel>
        </TabContext>
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

export default connect(null, mapDispatchToProps)(SubscriptionPaymentDetails)
