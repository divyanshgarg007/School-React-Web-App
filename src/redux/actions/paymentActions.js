import * as paymentServices from '../../services/paymentServices'
import * as actionTypes from './actionsType'

// post ORDER actions
const postPaymentRequest = () => {
  return {
    type: actionTypes.POST_PAYMENT_REQUEST,
  }
}

const postPaymentSuccess = (data) => {
  return {
    type: actionTypes.POST_PAYMENT_SUCCESS,
    payload: data,
  }
}

const postPaymentFailure = (error) => {
  return {
    type: actionTypes.POST_PAYMENT_FAILURE,
    payload: error,
  }
}

export const postPaymentAction = (payload) =>
  async(dispatch) => {
    dispatch(postPaymentRequest())
    try {
      const responseData = await paymentServices.postPayment(payload)
      if (responseData?.status === 200) {
        dispatch(postPaymentSuccess(responseData))
      } else {
        dispatch(postPaymentFailure(responseData.errors))
      }
    } catch (error) {
      dispatch(postPaymentFailure(error?.response?.data))
    }
  }

// post PAYMENT actions

const postConfirmPaymentRequest = () => {
  return {
    type: actionTypes.POST_CONFIRMPAYMENT_REQUEST,
  }
}

const postConfirmPaymentSuccess = (data) => {
  return {
    type: actionTypes.POST_CONFIRMPAYMENT_SUCCESS,
    payload: data,
  }
}

const postConfirmPaymentFailure = (error) => {
  return {
    type: actionTypes.POST_CONFIRMPAYMENT_FAILURE,
    payload: error,
  }
}

export const postConfirmPaymentAction = (payload) =>
  async(dispatch) => {
    dispatch(postConfirmPaymentRequest())
    try {
      const responseData = await paymentServices.postConfirmPayment(payload)
      if (responseData?.status === 200) {
        dispatch(postConfirmPaymentSuccess(responseData.data))
      } else {
        dispatch(postConfirmPaymentFailure(responseData.errors))
      }
    } catch (error) {
      dispatch(postConfirmPaymentFailure(error?.response?.data))
    }
  }


// post CONFIRM ORDER actions

const postConfirmOrderRequest = () => {
  return {
    type: actionTypes.POST_CONFIRMORDER_REQUEST,
  }
}

const postConfirmOrderSuccess = (data) => {
  return {
    type: actionTypes.POST_CONFIRMORDER_SUCCESS,
    payload: data,
  }
}

const postConfirmOrderFailure = (error) => {
  return {
    type: actionTypes.POST_CONFIRMORDER_FAILURE,
    payload: error,
  }
}

export const postConfirmOrderAction = (payload) =>
  async(dispatch) => {
    dispatch(postConfirmOrderRequest())
    try {
      const responseData = await paymentServices.postConfirmOrder(payload)
      if (responseData?.status === 200) {
        dispatch(postConfirmOrderSuccess(responseData.data))
      } else {
        dispatch(postConfirmOrderFailure(responseData.errors))
      }
    } catch (error) {
      dispatch(postConfirmOrderFailure(error?.response?.data))
    }
  }


// get billing list actions

const getBillingListRequest = () => {
  return {
    type: actionTypes.GET_BILLING_LIST_REQUEST,
  }
}

const getBillingListSuccess = (data) => {
  return {
    type: actionTypes.GET_BILLING_LIST_SUCCESS,
    payload: data,
  }
}

const getBillingListFailure = (error) => {
  return {
    type: actionTypes.GET_BILLING_LIST_FAILURE,
    payload: error,
  }
}

export const getBillingListAction = () =>
  async(dispatch) => {
    dispatch(getBillingListRequest())
    try {
      const responseData = await paymentServices.getBillingList()
      if (responseData?.status === 200) {
        dispatch(getBillingListSuccess(responseData.data))
      } else {
        dispatch(getBillingListFailure(responseData.errors))
      }
    } catch (error) {
      dispatch(getBillingListFailure(error?.response?.data))
    }
  }

// get payment details actions

const getPaymentDetailsRequest = () => {
  return {
    type: actionTypes.GET_PAYMENT_DETAILS_REQUEST,
  }
}

const getPaymentDetailsSuccess = (data) => {
  return {
    type: actionTypes.GET_PAYMENT_DETAILS_SUCCESS,
    payload: data,
  }
}

const getPaymentDetailsFailure = (error) => {
  return {
    type: actionTypes.GET_PAYMENT_DETAILS_FAILURE,
    payload: error,
  }
}

export const getPaymentDetailsAction = () =>
  async(dispatch) => {
    dispatch(getPaymentDetailsRequest())
    try {
      const responseData = await paymentServices.getCardDetails()
      if (responseData?.status === 200) {
        dispatch(getPaymentDetailsSuccess(responseData))
      } else {
        dispatch(getPaymentDetailsFailure(responseData.errors))
      }
    } catch (error) {
      dispatch(getPaymentDetailsFailure(error?.response?.data))
    }
  }


// POST cancel subscription actions

const postCancelSubscriptionRequest = () => {
  return {
    type: actionTypes.POST_CANCEL_SUBSCRIPTION_REQUEST,
  }
}


const postCancelSubscriptionSuccess = (data) => {
  return {
    type: actionTypes.POST_CANCEL_SUBSCRIPTION_SUCCESS,
    payload: data,
  }
}

const postCancelSubscriptionFailure = (error) => {
  return {
    type: actionTypes.POST_CANCEL_SUBSCRIPTION_FAILURE,
    payload: error,
  }
}

export const postCancelSubscriptionAction = (payload) =>
  async(dispatch) => {
    dispatch(postCancelSubscriptionRequest())
    try {
      const responseData = await paymentServices.postCancelSubscription(payload)
      if (responseData?.status === 200) {
        dispatch(postCancelSubscriptionSuccess(responseData))
        dispatch(getPaymentDetailsAction())
      } else {
        dispatch(postCancelSubscriptionFailure(responseData.errors))
      }
    } catch (error) {
      dispatch(postCancelSubscriptionFailure(error?.response?.data))
    }
  }


// POST renew subscription actions

const postRenewSubscriptionRequest = () => {
  return {
    type: actionTypes.POST_RENEW_SUBSCRIPTION_REQUEST,
  }
}


const postRenewSubscriptionSuccess = (data) => {
  return {
    type: actionTypes.POST_RENEW_SUBSCRIPTION_SUCCESS,
    payload: data,
  }
}

const postRenewSubscriptionFailure = (error) => {
  return {
    type: actionTypes.POST_RENEW_SUBSCRIPTION_FAILURE,
    payload: error,
  }
}

export const postRenewSubscriptionAction = (payload) =>
  async(dispatch) => {
    dispatch(postRenewSubscriptionRequest())
    try {
      const responseData = await paymentServices.postRenewSubscription(payload)
      if (responseData?.status === 200) {
        dispatch(postRenewSubscriptionSuccess(responseData))
        dispatch(getPaymentDetailsAction())
      } else {
        dispatch(postRenewSubscriptionFailure(responseData.errors))
      }
    } catch (error) {
      dispatch(postRenewSubscriptionFailure(error?.response?.data))
    }
  }

