import * as React from 'react'
import Dialog from '@mui/material/Dialog'
import Slide from '@mui/material/Slide'
import {Box, DialogContent, DialogTitle, IconButton, Link, Typography} from '@mui/material'
import {Close} from '@mui/icons-material'
import {useTranslation} from 'react-i18next'
import {CustomButton} from '../../../../components/Inputs'
import MyDiv from './confirmationDialog.style'

const Transition = React.forwardRef((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />
})

export default function PublishDialog(props) {
  const {t} = useTranslation()
  const item = props.packagesList?.filter((item) => item.package_id === props.packageId)
  const popup = (popupbox) => (
    <MyDiv>
      <Box container className="grid_dialog">
        <DialogTitle>
          <IconButton className="icon_cross" onClick={props.handleClickDialog}><Close /></IconButton>
          <Typography className="reset_text">{t('subscribePackage')}</Typography>
        </DialogTitle>
        {!props.orderDetails ? <DialogContent>
          {item.map((data) => {
            return (
              <>
                <Box key={data.package_id}>
                  <Typography>{t('subscriptionConfirmText')} {data.button_name}? ({data.per_account_user})</Typography>
                  <Typography>{t('price')}: {data.currency}{data.amount} / {data.amount_type}</Typography>
                </Box>
                <Box className="btn_flex">
                  <CustomButton onClick={props.handleConfirmation} className="btn_submit" title={t('Yes')} />
                  <CustomButton onClick={props.handleClickDialog} className="btn_cancel" title={t('No')} />
                </Box>
              </>
            )
          })}
        </DialogContent> : <DialogContent>
          <Box mb={2}>
            <Typography>{t('packageName')} : {props.orderDetails?.pacage_details?.name}</Typography>
            <Typography>{t('chargeAmount')} : {props.orderDetails?.order_detail?.currency}{props.orderDetails?.order_detail?.package_cost}</Typography>
            <Typography>{t('totalAmount')} : {props.orderDetails?.order_detail?.currency}{props.orderDetails?.order_detail?.total_order_amount}</Typography>
          </Box>
          <Link className="proceed_link" onClick={props.handlePayment} href={props.redirectUrl} target="_blank">
            {!props.redirectUrl ? t('Submit') : t('proceedPayment')}
          </Link>
        </DialogContent>
        }
      </Box>
    </MyDiv>
  )
  return (
    <Dialog
      popupbox="openDialog"
      open={props.openDialog}
      TransitionComponent={Transition}
      onClose={props.handleClickDialog}
      fullWidth
    >
      {popup('openDialog')}
    </Dialog>
  )
}
