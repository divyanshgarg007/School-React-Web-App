import * as actionTypes from '../actions/actionsType'

const INITIAL_STATE = {
  postSubscriptionData: {
    data: null,
    loading: false,
    error: null,
  },
}

const subscriptionReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.POST_SUBSCRIPTION_REQUEST:
      return {
        ...state,
        postSubscriptionData: {
          ...state.postSubscriptionData,
          data: null,
          loading: true,
          error: null,
        },
      }
    case actionTypes.POST_SUBSCRIPTION_SUCCESS:
      return {
        ...state,
        postSubscriptionData: {
          ...state.postSubscriptionData,
          data: action.payload,
          loading: false,
          error: null,
        },
      }
    case actionTypes.POST_SUBSCRIPTION_FAILURE:
      return {
        ...state,
        postSubscriptionData: {
          ...state.postSubscriptionData,
          data: null,
          loading: false,
          error: action.payload,
        },
      }
    case actionTypes.CLEANUP_SNACKBAR:
      return {
        ...state,
        postSubscriptionData: {
          data: null,
          loading: false,
          error: null,
        },
      }
    default:
      return state
  }
}


export default subscriptionReducers
