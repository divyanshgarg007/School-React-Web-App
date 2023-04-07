import * as languagesServices from '../../services/languagesServices'
import * as actionTypes from './actionsType'
import {getDetailsAction} from './masterActions'

// post languages list actions
const postLanguagesListRequest = () => {
  return {
    type: actionTypes.LANGUAGES_POST_REQUEST,
  }
}

const postLanguagesListSuccess = (data) => {
  return {
    type: actionTypes.LANGUAGES_POST_SUCCESS,
    payload: data,
  }
}

const postLanguagesListFailure = (error) => {
  return {
    type: actionTypes.LANGUAGES_POST_FAILURE,
    payload: error,
  }
}

export const postLanguagesListAction = (payload) =>
  async(dispatch) => {
    dispatch(postLanguagesListRequest())
    try {
      const responseData = await languagesServices.postLanguagesList(payload)
      if (responseData?.status === 200) {
        dispatch(postLanguagesListSuccess(responseData?.data?.meta))
        dispatch(getDetailsAction())
      } else {
        dispatch(postLanguagesListFailure(responseData.errors))
      }
    } catch (error) {
      dispatch(postLanguagesListFailure(error?.response?.data))
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

