import * as experienceServices from '../../services/experienceServices'
import * as actionTypes from './actionsType'
import {getDetailsAction} from './masterActions'

// post experience list actions
const postExperienceListRequest = () => {
  return {
    type: actionTypes.EXPERIENCE_POST_REQUEST,
  }
}

const postExperienceListSuccess = (data) => {
  return {
    type: actionTypes.EXPERIENCE_POST_SUCCESS,
    payload: data,
  }
}

const postExperienceListFailure = (error) => {
  return {
    type: actionTypes.EXPERIENCE_POST_FAILURE,
    payload: error,
  }
}

export const postExperienceListAction = (payload) =>
  async(dispatch) => {
    dispatch(postExperienceListRequest())
    try {
      const responseData = await experienceServices.postExperience(payload)
      if (responseData?.status === 200) {
        dispatch(postExperienceListSuccess(responseData?.data?.meta))
        dispatch(getDetailsAction())
      } else {
        dispatch(postExperienceListFailure(responseData.errors))
      }
    } catch (error) {
      dispatch(postExperienceListFailure(error?.response?.data))
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
