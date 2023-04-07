import * as locationServices from '../../services/locationServices'
import * as actionTypes from './actionsType'
import {getDetailsAction} from './masterActions'

// post location actions
const postLocationListRequest = () => {
  return {
    type: actionTypes.LOCATION_POST_REQUEST,
  }
}

const postLocationListSuccess = (data) => {
  return {
    type: actionTypes.LOCATION_POST_SUCCESS,
    payload: data,
  }
}

const postLocationListFailure = (error) => {
  return {
    type: actionTypes.LOCATION_POST_FAILURE,
    payload: error,
  }
}

export const postLocationListAction = (payload) =>
  async(dispatch) => {
    dispatch(postLocationListRequest())
    try {
      const responseData = await locationServices.postLocation(payload)
      if (responseData?.status === 200) {
        dispatch(postLocationListSuccess(responseData?.data?.meta))
        dispatch(getDetailsAction())
      } else {
        dispatch(postLocationListFailure(responseData.errors))
      }
    } catch (error) {
      dispatch(postLocationListFailure(error?.response?.data))
    }
  }

// SNACKBAR cleanup

const cleanUpSnackbar = () => {
  return {
    type: actionTypes.CLEANUP_SNACKBAR,
  }
}
export const cleanUpUserState = () =>
  async(dispatch) => {
    dispatch(cleanUpSnackbar())
  }
