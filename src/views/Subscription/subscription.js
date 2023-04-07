import React, {useEffect, useState} from 'react'
import {Box, Card, CardActions, CardContent, Typography, IconButton} from '@mui/material'
import {AccountBalance, Person} from '@mui/icons-material'
import {useTranslation} from 'react-i18next'
import {useHistory} from 'react-router-dom'
import {bindActionCreators} from 'redux'
import {connect, useSelector} from 'react-redux'
import moment from 'moment'
import * as routesNames from '../../constants/routes'
import {ActionCreators} from '../../redux/actions'
import {CustomButton, Loader} from '../../components'
import MyDiv from './subscription.style'
import {ConfirmationDialog} from './components'

const Subscription = (props) => {
  const {t} = useTranslation()
  const history = useHistory()
  const [packagesList, setPackagesList] = useState([])
  const [packageId, setPackageId] = useState()
  const [orderDetails, setOrderDetails] = useState()
  const [redirectUrl, setRedirectUrl] = useState('')
  const [openDialog, setOpenDialog] = useState(false)

  const globalState = useSelector((state) => state.globalState)
  const paymentState = useSelector((state) => state.paymentState)
  const masterState = useSelector((state) => state.masterState)

  const expiryDate = masterState?.getIsPublish?.data?.expiry_date


  useEffect(() => {
    props.actions.getListAction()
  }, [])

  useEffect(() => {
    setPackagesList(globalState.getList.data?.payload?.packages)
  }, [globalState.getList.data])

  useEffect(() => {
    setOrderDetails(paymentState?.postPayment?.data?.data?.payload)
  }, [paymentState?.postPayment?.data])


  useEffect(() => {
    setRedirectUrl(paymentState?.postConfirmPayment?.data?.payload?.safer_pay?.body?.RedirectUrl)
  }, [paymentState?.postConfirmPayment?.data])

  useEffect(() => {
    if (paymentState?.postConfirmPayment?.data?.meta?.status === 'success') {
      setRedirectUrl(paymentState?.postConfirmPayment?.data?.payload?.safer_pay?.body?.RedirectUrl)
    } else if (paymentState?.postConfirmPayment?.data?.meta?.status === 'failure') {
      setRedirectUrl(null)
    }
  }, [paymentState?.postConfirmPayment?.data])


  const getDaysToExpire = (date) => {
    let current = moment().startOf('day')
    let given = moment(date, 'YYYY-MM-DD')
    return !!((moment.duration(given.diff(current)).asDays() > 0) && (moment.duration(given.diff(current)).asDays() < 31))
  }

  const handleBilling = () => {
    history.push(routesNames.PAYMENTDETAILS)
  }

  const handleClickDialog = (e, id) => {
    setPackageId(id)
    setOpenDialog(!openDialog)
  }

  const handleConfirmation = () => {
    let obj = {
      package_id: packageId,
    }
    props.actions.postPaymentAction(obj)
  }

  const handlePayment = () => {
    let url
    if (location.hostname === 'localhost') {
      url = process.env.REACT_APP_REDIRECT_URL
    } else {
      url = process.env.REACT_APP_REDIRECT_SERVER
    }
    let obj =
      {
        orderId: orderDetails?.order_detail?.order_id,
        domain_url: url,
      }
    props.actions.postConfirmPaymentAction(obj)
  }


  return (
    <MyDiv>
      {(globalState?.getList?.loading || paymentState?.postPayment?.loading || paymentState?.postConfirmPayment?.loading) &&
      <div>
        <Loader />
      </div>
      }
      <Box className="sub_box">
        <Box className="billing_details">
          <Typography className="page_title">{t('SubscriptionDetails')}</Typography>
          <CustomButton title={t('billingDetails')} onClick={handleBilling} className="btn_subs" />
        </Box>
        <Box className="card_flex">
          {packagesList?.map((item, index) => (
            <><Card className="card_prop" key={index}>
              <CardContent>
                <Typography mb={1} className="card_heading">{item.name}</Typography>
                <Typography mb={1} className="card_heading4">{item.description}</Typography>
                <IconButton className="subs_icons">
                  {item.package_id !== 1 ? <AccountBalance /> : <Person />}
                </IconButton>
                <Typography mt={1} className="card_heading1">{item.per_account_user}</Typography>
                <Typography>{item.upgrade}</Typography>
                <Typography mt={1} className="card_heading2"><span>{item.currency}</span>{item.amount} / {item.amount_type}</Typography>
              </CardContent>
              <CardActions className="action_btns">
                <CustomButton
                  // disabled={getDaysToExpire(expiryDate) && true}
                  title={getDaysToExpire(expiryDate) ? item.upgrade : item.button_name}
                  onClick={(e) => handleClickDialog(e, item.package_id)}
                  className="btn_subs"
                />
              </CardActions>
            </Card><ConfirmationDialog
              redirectUrl={redirectUrl}
              handlePayment={handlePayment}
              orderDetails={orderDetails}
              handleConfirmation={handleConfirmation}
              openDialog={openDialog}
              handleClickDialog={handleClickDialog}
              packagesList={packagesList}
              packageId={packageId}
            />
            </>
          ))}
        </Box>
      </Box>
    </MyDiv>
  )
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ActionCreators, dispatch),
})

export default connect(null, mapDispatchToProps)(Subscription)
