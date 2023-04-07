import {KeyboardReturn} from '@mui/icons-material'
import {Box} from '@mui/material'
import React, {useEffect, useState} from 'react'
import {useTranslation} from 'react-i18next'
import {connect, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {bindActionCreators} from 'redux'
import {CustomButton, CustomTable} from '../../components'
import AuthTopPanel from '../../components/AuthTopPanel'
import {ActionCreators} from '../../redux/actions'
// import {DataTable} from './components'
import MyDiv from './invoice.style'


const Invoice = (props) => {
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
  const history = useHistory()

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
      <AuthTopPanel />
      <Box className="invoice_box">
        <CustomButton className="button_return" title={t('returnText')} startIcon={<KeyboardReturn className="btn_return" />} onClick={() => history.push('/dashboard')} />
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

export default connect(null, mapDispatchToProps)(Invoice)
