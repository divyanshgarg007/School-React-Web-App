import * as socialMediaServices from '../../services/socialMediaServices'
import * as actionTypes from './actionsType'
import {getDetailsAction} from './masterActions'

// post social media list actions
const postSocialMediaListRequest = () => {
  return {
    type: actionTypes.SOCIALMEDIA_POST_REQUEST,
  }
}

const postSocialMediaListSuccess = (data) => {
  return {
    type: actionTypes.SOCIALMEDIA_POST_SUCCESS,
    payload: data,
  }
}

const postSocialMediaListFailure = (error) => {
  return {
    type: actionTypes.SOCIALMEDIA_POST_FAILURE,
    payload: error,
  }
}

export const postSocialMediaListAction = (payload) =>
  async(dispatch) => {
    dispatch(postSocialMediaListRequest())
    try {
      const responseData = await socialMediaServices.postSocialMediaList(payload)
      if (responseData?.status === 200) {
        dispatch(postSocialMediaListSuccess(responseData?.data?.meta))
        dispatch(getDetailsAction())
      } else {
        dispatch(postSocialMediaListFailure(responseData.errors))
      }
    } catch (error) {
      dispatch(postSocialMediaListFailure(error?.response?.data))
    }
  }

// snackbar cleanup
const cleanUpSnackbar = () => {
  return {
    type: actionTypes.CLEANUP_SNACKBAR,
  }
}
export const cleanUpUserState = () =>
  async(dispatch) => {
    dispatch(cleanUpSnackbar())
  }
