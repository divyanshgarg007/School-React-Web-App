import * as feedbackServices from '../../services/feedbackServices'
import * as actionTypes from './actionsType'


// GET feedback actions
const getFeedbackRequest = () => {
  return {
    type: actionTypes.GET_FEEDBACK_REQUEST,
  }
}

const getFeedbackSuccess = (data) => {
  return {
    type: actionTypes.GET_FEEDBACK_SUCCESS,
    payload: data,
  }
}

const getFeedbackFailure = (error) => {
  return {
    type: actionTypes.GET_FEEDBACK_FAILURE,
    payload: error,
  }
}

export const getFeedbackAction = () =>
  async(dispatch) => {
    dispatch(getFeedbackRequest())
    try {
      const responseData = await feedbackServices.getFeedback()
      if (responseData?.status === 200) {
        dispatch(getFeedbackSuccess(responseData))
      } else {
        dispatch(getFeedbackFailure(responseData.errors))
      }
    } catch (error) {
      dispatch(getFeedbackFailure(error?.response?.data))
    }
  }

// POST Feedback actions
const postFeedbackRequest = () => {
  return {
    type: actionTypes.POST_FEEDBACK_REQUEST,
  }
}

const postFeedbackSuccess = (data) => {
  return {
    type: actionTypes.POST_FEEDBACK_SUCCESS,
    payload: data,
  }
}

const postFeedbackFailure = (error) => {
  return {
    type: actionTypes.POST_FEEDBACK_FAILURE,
    payload: error,
  }
}

export const postFeedbackAction = (payload) =>
  async(dispatch) => {
    dispatch(postFeedbackRequest())
    try {
      const responseData = await feedbackServices.postFeedback(payload)
      if (responseData?.status === 200) {
        dispatch(postFeedbackSuccess(responseData?.data?.meta))
      } else {
        dispatch(postFeedbackFailure(responseData.errors))
      }
    } catch (error) {
      dispatch(postFeedbackFailure(error?.response?.data))
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
