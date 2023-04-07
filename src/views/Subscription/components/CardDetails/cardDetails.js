import {Typography, Box} from '@mui/material'
import React from 'react'
import {useTranslation} from 'react-i18next'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import CancelSubscriptionDialog from '../CancelSubscriptionDialog/cancelSubscriptionDialog'
import {CustomButton, Loader} from '../../../../components'
import {ActionCreators} from '../../../../redux/actions'
import MyDiv from './cardDetails.style'

const CardDetails = (props) => {

  const {t} = useTranslation()

  return (
    <MyDiv>
      {(props.paymentState?.getPaymentDetails?.loading) &&
        <div>
          <Loader />
        </div>
      }
      <>
        {props.invoiceDetails?.card_holder_name !== null ?
          <>
            <Typography className="label_name">{t('annualBilling')}</Typography>
            <Typography className="label_name">{props.invoiceDetails?.card_number}</Typography>
            {/* <CustomButton title={t('RemoveCard')} className="btn_remove" /> */}
            <Typography className="label_name">{props.invoiceDetails?.card_holder_name}</Typography>
            <Typography className="label_name">{t('expiresOn')} {props.invoiceDetails?.card_exp_year}</Typography>
            <Box className="btn_upgrade">
              <Typography className="label_heading">{t('upgradeAccount')}</Typography>
              <CustomButton title={t('Upgrade')} className="btn3_text" />
            </Box>
            <Box className="btn_cancel">
              {props.invoiceDetails?.unsubscribe_status === 1 ? <Typography className="label_heading">{t('subscriptionResume')}</Typography>
                : <Typography className="label_heading">{t('subscriptionCancel')}</Typography>}
              {props.invoiceDetails?.unsubscribe_status === 1 &&
                <CustomButton title={t('resumeSubscription')} onClick={props.handleClick} className="btn2_text" />}
              {props.invoiceDetails?.unsubscribe_status === 0 &&
                <CustomButton title={t('cancelSubscription')} onClick={props.handleClick} className="btn2_text" />}
            </Box>
            <CancelSubscriptionDialog
              subStatus={props.invoiceDetails?.unsubscribe_status}
              handleCancelSubscription={props.handleCancelSubscription}
              openCancelSubscription={props.openCancelSubscription}
              handleClick={props.handleClick}
            />
          </> : <Typography>{t('noPay')}</Typography>
        }
      </>
    </MyDiv>
  )
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ActionCreators, dispatch),
})
export default connect(null, mapDispatchToProps)(CardDetails)

