import * as educationServices from '../../services/educationServices'
import * as actionTypes from './actionsType'
import {getDetailsAction} from './masterActions'

// post education list actions
const postEducationListRequest = () => {
  return {
    type: actionTypes.EDUCATION_POST_REQUEST,
  }
}

const postEducationListSuccess = (data) => {
  return {
    type: actionTypes.EDUCATION_POST_SUCCESS,
    payload: data,
  }
}

const postEducationListFailure = (error) => {
  return {
    type: actionTypes.EDUCATION_POST_FAILURE,
    payload: error,
  }
}

export const postEducationListAction = (payload) =>
  async(dispatch) => {
    dispatch(postEducationListRequest())
    try {
      const responseData = await educationServices.postEducation(payload)
      if (responseData?.status === 200) {
        dispatch(postEducationListSuccess(responseData?.data?.meta))
        dispatch(getDetailsAction())
      } else {
        dispatch(postEducationListFailure(responseData.errors))
      }
    } catch (error) {
      dispatch(postEducationListFailure(error?.response?.data))
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
