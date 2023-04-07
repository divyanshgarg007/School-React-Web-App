import * as lessonsServices from '../../services/lessonsServices'
import * as actionTypes from './actionsType'
import {getDetailsAction} from './masterActions'

// post lessons actions
const postLessonsListRequest = () => {
  return {
    type: actionTypes.LESSONS_POST_REQUEST,
  }
}

const postLessonsListSuccess = (data) => {
  return {
    type: actionTypes.LESSONS_POST_SUCCESS,
    payload: data,
  }
}

const postLessonsListFailure = (error) => {
  return {
    type: actionTypes.LESSONS_POST_FAILURE,
    payload: error,
  }
}

export const postLessonsListAction = (payload) =>
  async(dispatch) => {
    dispatch(postLessonsListRequest())
    try {
      const responseData = await lessonsServices.postLessons(payload)
      if (responseData?.status === 200) {
        dispatch(postLessonsListSuccess(responseData?.data?.meta))
        dispatch(getDetailsAction())
      } else {
        dispatch(postLessonsListFailure(responseData.errors))
      }
    } catch (error) {
      dispatch(postLessonsListFailure(error?.response?.data))
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
