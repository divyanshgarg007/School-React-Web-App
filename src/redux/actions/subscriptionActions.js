/* eslint-disable no-alert */
import * as subscriptionServices from '../../services/subscriptionServices'
import * as actionTypes from './actionsType'

// POST SUBSCRIPTION data actions

const postSubscriptionRequest = () => {
  return {
    type: actionTypes.POST_SUBSCRIPTION_REQUEST,
  }
}

const postSubscriptionSuccess = (data) => {
  return {
    type: actionTypes.POST_SUBSCRIPTION_SUCCESS,
    payload: data,
  }
}

const postSubscriptionFailure = (error) => {
  return {
    type: actionTypes.POST_SUBSCRIPTION_FAILURE,
    payload: error,
  }
}

export const postSubscriptionAction = (payload) =>
  async(dispatch) => {
    dispatch(postSubscriptionRequest())
    try {
      const responseData = await subscriptionServices.postSubscription(payload)
      if (responseData?.status === 200) {
        dispatch(postSubscriptionSuccess(responseData?.data?.meta))
      } else {
        dispatch(postSubscriptionFailure(responseData.errors))
      }
    } catch (error) {
      dispatch(postSubscriptionFailure(error?.response?.data))
    }
  }

// snackbar clean state

const cleanUpSnackbar = () => {
  return {
    type: actionTypes.CLEANUP_SNACKBAR,
  }
}
export const cleanUpUserState = () =>
  async(dispatch) => {
    dispatch(cleanUpSnackbar())
  }
