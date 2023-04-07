/* eslint-disable no-alert */
import * as masterServices from '../../services/masterServices'
import * as actionTypes from './actionsType'
import {getUsersAction} from './globalActions'

// GET teacher data actions
const getTeacherRequest = () => {
  return {
    type: actionTypes.GET_TEACHER_REQUEST,
  }
}

const getTeacherSuccess = (data) => {
  return {
    type: actionTypes.GET_TEACHER_SUCCESS,
    payload: data,
  }
}

const getTeacherFailure = (error) => {
  return {
    type: actionTypes.GET_TEACHER_FAILURE,
    payload: error,
  }
}

export const getTeacherAction = (payload) =>
  async(dispatch) => {
    dispatch(getTeacherRequest())
    try {
      const responseData = await masterServices.getTeacher(payload)
      if (responseData?.status === 200) {
        dispatch(getTeacherSuccess(responseData?.data?.payload))
      } else {
        dispatch(getTeacherFailure(responseData.errors))
      }
    } catch (error) {
      dispatch(getTeacherFailure(error?.response?.data))
    }
  }

// POST teacher data actions

const postTeacherRequest = () => {
  return {
    type: actionTypes.POST_TEACHER_REQUEST,
  }
}

const postTeacherSuccess = (data) => {
  return {
    type: actionTypes.POST_TEACHER_SUCCESS,
    payload: data,
  }
}

const postTeacherFailure = (error) => {
  return {
    type: actionTypes.POST_TEACHER_FAILURE,
    payload: error,
  }
}

export const postTeacherAction = (payload) =>
  async(dispatch) => {
    dispatch(postTeacherRequest())
    try {
      const responseData = await masterServices.postTeacher(payload)
      if (responseData?.status === 200) {
        dispatch(postTeacherSuccess(responseData?.data?.meta))
        // eslint-disable-next-line no-use-before-define
        dispatch(getUsersAction())
      } else {
        dispatch(postTeacherFailure(responseData.errors))
      }
    } catch (error) {
      dispatch(postTeacherFailure(error?.response?.data))
    }
  }


// GET teacher summary actions
const getSummaryRequest = () => {
  return {
    type: actionTypes.GET_SUMMARY_REQUEST,
  }
}

const getSummarySuccess = (data) => {
  return {
    type: actionTypes.GET_SUMMARY_SUCCESS,
    payload: data,
  }
}

const getSummaryFailure = (error) => {
  return {
    type: actionTypes.GET_SUMMARY_FAILURE,
    payload: error,
  }
}

export const getSummaryAction = (payload) =>
  async(dispatch) => {
    dispatch(getSummaryRequest())
    try {
      const responseData = await masterServices.getTeachersSummary(payload)
      if (responseData?.status === 200) {
        dispatch(getSummarySuccess(responseData?.data?.payload))
      } else {
        dispatch(getSummaryFailure(responseData.errors))
      }
    } catch (error) {
      dispatch(getSummaryFailure(error?.response?.data))
    }
  }

// GET teacher final data actions
const getTeacherFinalRequest = () => {
  return {
    type: actionTypes.GET_TEACHER_FINAL_REQUEST,
  }
}

const getTeacherFinalSuccess = (data) => {
  return {
    type: actionTypes.GET_TEACHER_FINAL_SUCCESS,
    payload: data,
  }
}

const getTeacherFinalFailure = (error) => {
  return {
    type: actionTypes.GET_TEACHER_FINAL_FAILURE,
    payload: error,
  }
}

export const getTeacherFinalAction = (payload) =>
  async(dispatch) => {
    dispatch(getTeacherFinalRequest())
    try {
      const responseData = await masterServices.getTeachersFinalData(payload)
      if (responseData?.status === 200) {
        dispatch(getTeacherFinalSuccess(responseData?.data?.payload))
      } else {
        dispatch(getTeacherFinalFailure(responseData.errors))
      }
    } catch (error) {
      dispatch(getTeacherFinalFailure(error?.response?.data))
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

// GET teacher live data actions
// const getTeacherLiveRequest = () => {
//   return {
//     type: actionTypes.GET_TEACHERLIST_REQUEST,
//   }
// }

// const getTeacherLiveSuccess = (data) => {
//   return {
//     type: actionTypes.GET_TEACHERLIST_SUCCESS,
//     payload: data,
//   }
// }

// const getTeacherLiveFailure = (error) => {
//   return {
//     type: actionTypes.GET_TEACHERLIST_FAILURE,
//     payload: error,
//   }
// }

// export const getTeacherLiveAction = () =>
//   async(dispatch) => {
//     dispatch(getTeacherLiveRequest())
//     try {
//       const responseData = await masterServices.getTeacherLive()
//       if (responseData?.status === 200) {
//         dispatch(getTeacherLiveSuccess(responseData?.data?.payload))
//       } else {
//         dispatch(getTeacherLiveFailure(responseData.errors))
//       }
//     } catch (error) {
//       dispatch(getTeacherLiveFailure(error?.response?.data))
//     }
//   }

// get details user data actions
const getDetailsRequest = () => {
  return {
    type: actionTypes.GET_DETAILS_REQUEST,
  }
}

const getDetailsSuccess = (data) => {
  return {
    type: actionTypes.GET_DETAILS_SUCCESS,
    payload: data,
  }
}

const getDetailsFailure = (error) => {
  return {
    type: actionTypes.GET_DETAILS_FAILURE,
    payload: error,
  }
}

const getIsPublish = (data) => {
  return {
    type: actionTypes.GET_IS_PUBLISH,
    payload: data,
  }
}
export const getDetailsAction = () =>
  async(dispatch) => {
    dispatch(getDetailsRequest())
    try {
      const responseData = await masterServices.getDetails()
      if (responseData?.status === 200) {
        dispatch(getIsPublish(responseData?.data?.payload))
        dispatch(getDetailsSuccess(responseData?.data?.payload?.data))
      } else {
        dispatch(getDetailsFailure(responseData.errors))
      }
    } catch (error) {
      dispatch(getDetailsFailure(error?.response?.data))
    }
  }


// get teacher card list actions
const getTeachersCardListRequest = () => {
  return {
    type: actionTypes.GET_TEACHER_CARD_REQUEST,
  }
}

const getTeachersCardListSuccess = (data) => {
  return {
    type: actionTypes.GET_TEACHER_CARD_SUCCESS,
    payload: data,
  }
}

const getTeachersCardListFailure = (error) => {
  return {
    type: actionTypes.GET_TEACHER_CARD_FAILURE,
    payload: error,
  }
}

export const getTeachersCardListAction = () =>
  async(dispatch) => {
    dispatch(getTeachersCardListRequest())
    try {
      const responseData = await masterServices.getTeachersCardList()
      if (responseData?.status === 200) {
        dispatch(getTeachersCardListSuccess(responseData))
      } else {
        dispatch(getTeachersCardListFailure(responseData.errors))
      }
    } catch (error) {
      dispatch(getTeachersCardListFailure(error?.response?.data))
    }
  }


// post profile click count actions
const postProfileClickCountRequest = () => {
  return {
    type: actionTypes.POST_PROFILE_COUNT_REQUEST,
  }
}

const postProfileClickCountSuccess = (data) => {
  return {
    type: actionTypes.POST_PROFILE_COUNT_SUCCESS,
    payload: data,
  }
}

const postProfileClickCountFailure = (error) => {
  return {
    type: actionTypes.POST_PROFILE_COUNT_FAILURE,
    payload: error,
  }
}

export const postProfileClickCountAction = (payload) =>
  async(dispatch) => {
    dispatch(postProfileClickCountRequest())
    try {
      const responseData = await masterServices.postProfileClick(payload)
      if (responseData?.status === 200) {
        dispatch(postProfileClickCountSuccess(responseData))
      } else {
        dispatch(postProfileClickCountFailure(responseData.errors))
      }
    } catch (error) {
      dispatch(postProfileClickCountFailure(error?.response?.data))
    }
  }

// post postAccountStatus actions
const postAccountStatusRequest = () => {
  return {
    type: actionTypes.POST_ACCOUNT_STATUS_REQUEST,
  }
}

const postAccountStatusSuccess = (data) => {
  return {
    type: actionTypes.POST_ACCOUNT_STATUS_SUCCESS,
    payload: data,
  }
}

const postAccountStatusFailure = (error) => {
  return {
    type: actionTypes.POST_ACCOUNT_STATUS_FAILURE,
    payload: error,
  }
}

export const postAccountStatusAction = (payload) =>
  async(dispatch) => {
    dispatch(postAccountStatusRequest())
    try {
      const responseData = await masterServices.postAccountStatus(payload)
      if (responseData?.status === 200) {
        dispatch(postAccountStatusSuccess(responseData))
      } else {
        dispatch(postAccountStatusFailure(responseData.errors))
      }
    } catch (error) {
      dispatch(postAccountStatusFailure(error?.response?.data))
    }
  }

