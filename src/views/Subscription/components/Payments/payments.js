import {Box} from '@mui/material'
import React, {useEffect, useState} from 'react'
import {useTranslation} from 'react-i18next'
import {connect, useSelector} from 'react-redux'
import {bindActionCreators} from 'redux'
import {CustomTable, Loader} from '../../../../components'
import {ActionCreators} from '../../../../redux/actions'
import MyDiv from './payments.style'

const Payments = (props) => {
  const {t} = useTranslation()
  const tableHeading = [
    {
      id: 1,
      title: t('ID'),

    },
    {
      id: 2,
      title: t('invoiceNumber'),

    },
    {
      id: 3,
      title: t('year'),

    },
    {
      id: 4,
      title: t('Download'),

    },
  ]
  const [billingList, setBillingList] = useState()
  const billingState = useSelector((state) => state.paymentState)

  useEffect(() => {
    props.actions.getBillingListAction()
  }, [])

  useEffect(() => {
    setBillingList(billingState?.getBillingList?.data?.payload)
  }, [billingState?.getBillingList?.data])

  return (
    <MyDiv>
      {(billingState?.getBillingList?.loading) &&
        <div>
          <Loader />
        </div>
      }
      <Box className="table_box">
        <CustomTable
          billingList={billingList}
          tableHeading={tableHeading}
          type="invoice"
        />
      </Box>
    </MyDiv>
  )
}


const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ActionCreators, dispatch),
})

export default connect(null, mapDispatchToProps)(Payments)
