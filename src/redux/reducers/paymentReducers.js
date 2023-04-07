import * as actionTypes from '../actions/actionsType'

const INITIAL_STATE = {
  postPayment: {
    data: null,
    loading: false,
    error: null,
  },
  postConfirmPayment: {
    data: null,
    loading: false,
    error: null,
  },
  postConfirmOrder: {
    data: null,
    loading: false,
    error: null,
  },
  getBillingList: {
    data: null,
    loading: false,
    error: null,
  },
  getPaymentDetails: {
    data: null,
    loading: false,
    error: null,
  },
  postCancelSubscription: {
    data: null,
    loading: false,
    error: null,
  },
  postRenewSubscription: {
    data: null,
    loading: false,
    error: null,
  },
}

const paymentReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.POST_PAYMENT_REQUEST:
      return {
        ...state,
        postPayment: {
          ...state.postPayment,
          data: null,
          loading: true,
          error: null,
        },
      }
    case actionTypes.POST_PAYMENT_SUCCESS:
      return {
        ...state,
        postPayment: {
          ...state.postPayment,
          data: action.payload,
          loading: false,
          error: null,
        },
      }
    case actionTypes.POST_PAYMENT_FAILURE:
      return {
        ...state,
        postPayment: {
          ...state.postPayment,
          data: null,
          loading: false,
          error: action.payload,
        },
      }
    case actionTypes.POST_CONFIRMPAYMENT_REQUEST:
      return {
        ...state,
        postConfirmPayment: {
          ...state.postConfirmPayment,
          data: null,
          loading: true,
          error: null,
        },
      }
    case actionTypes.POST_CONFIRMPAYMENT_SUCCESS:
      return {
        ...state,
        postConfirmPayment: {
          ...state.postConfirmPayment,
          data: action.payload,
          loading: false,
          error: null,
        },
      }
    case actionTypes.POST_CONFIRMPAYMENT_FAILURE:
      return {
        ...state,
        postConfirmPayment: {
          ...state.postConfirmPayment,
          data: null,
          loading: false,
          error: action.payload,
        },
      }
    case actionTypes.POST_CONFIRMORDER_REQUEST:
      return {
        ...state,
        postConfirmOrder: {
          ...state.postConfirmOrder,
          data: null,
          loading: true,
          error: null,
        },
      }
    case actionTypes.POST_CONFIRMORDER_SUCCESS:
      return {
        ...state,
        postConfirmOrder: {
          ...state.postConfirmOrder,
          data: action.payload,
          loading: false,
          error: null,
        },
      }
    case actionTypes.POST_CONFIRMORDER_FAILURE:
      return {
        ...state,
        postConfirmOrder: {
          ...state.postConfirmOrder,
          data: null,
          loading: false,
          error: action.payload,
        },
      }
    case actionTypes.GET_BILLING_LIST_REQUEST:
      return {
        ...state,
        getBillingList: {
          ...state.getBillingList,
          data: null,
          loading: true,
          error: null,
        },
      }
    case actionTypes.GET_BILLING_LIST_SUCCESS:
      return {
        ...state,
        getBillingList: {
          ...state.getBillingList,
          data: action.payload,
          loading: false,
          error: null,
        },
      }
    case actionTypes.GET_BILLING_LIST_FAILURE:
      return {
        ...state,
        getPaymentDetails: {
          ...state.getPaymentDetails,
          data: null,
          loading: false,
          error: action.payload,
        },
      }
    case actionTypes.GET_PAYMENT_DETAILS_REQUEST:
      return {
        ...state,
        getPaymentDetails: {
          ...state.getPaymentDetails,
          data: null,
          loading: true,
          error: null,
        },
      }
    case actionTypes.GET_PAYMENT_DETAILS_SUCCESS:
      return {
        ...state,
        getPaymentDetails: {
          ...state.getPaymentDetails,
          data: action.payload,
          loading: false,
          error: null,
        },
      }
    case actionTypes.GET_PAYMENT_DETAILS_FAILURE:
      return {
        ...state,
        getBillingList: {
          ...state.getBillingList,
          data: null,
          loading: false,
          error: action.payload,
        },
      }
    case actionTypes.POST_CANCEL_SUBSCRIPTION_REQUEST:
      return {
        ...state,
        postCancelSubscription: {
          ...state.postCancelSubscription,
          data: null,
          loading: true,
          error: null,
        },
      }
    case actionTypes.POST_CANCEL_SUBSCRIPTION_SUCCESS:
      return {
        ...state,
        postCancelSubscription: {
          ...state.postCancelSubscription,
          data: action.payload,
          loading: false,
          error: null,
        },
      }
    case actionTypes.POST_CANCEL_SUBSCRIPTION_FAILURE:
      return {
        ...state,
        postCancelSubscription: {
          ...state.postCancelSubscription,
          data: null,
          loading: false,
          error: action.payload,
        },
      }
    case actionTypes.POST_RENEW_SUBSCRIPTION_REQUEST:
      return {
        ...state,
        postRenewSubscription: {
          ...state.postRenewSubscription,
          data: null,
          loading: true,
          error: null,
        },
      }
    case actionTypes.POST_RENEW_SUBSCRIPTION_SUCCESS:
      return {
        ...state,
        postRenewSubscription: {
          ...state.postRenewSubscription,
          data: action.payload,
          loading: false,
          error: null,
        },
      }
    case actionTypes.POST_RENEW_SUBSCRIPTION_FAILURE:
      return {
        ...state,
        postRenewSubscription: {
          ...state.postRenewSubscription,
          data: null,
          loading: false,
          error: action.payload,
        },
      }
    default:
      return state
  }
}


export default paymentReducers
