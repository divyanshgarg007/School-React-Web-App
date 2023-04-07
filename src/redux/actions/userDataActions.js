import * as userDataServices from '../../services/userDataServices'
import * as actionTypes from './actionsType'
import {getDetailsAction} from './masterActions'

// POST aboutme actions
const postAboutMeRequest = () => {
  return {
    type: actionTypes.POST_ABOUTME_REQUEST,
  }
}

const postAboutMeSuccess = (data) => {
  return {
    type: actionTypes.POST_ABOUTME_SUCCESS,
    payload: data,
  }
}

const postAboutMeFailure = (error) => {
  return {
    type: actionTypes.POST_ABOUTME_FAILURE,
    payload: error,
  }
}

export const postAboutMeAction = (payload) =>
  async(dispatch) => {
    dispatch(postAboutMeRequest())
    try {
      const responseData = await userDataServices.postAboutMe(payload)
      if (responseData?.status === 200) {
        dispatch(postAboutMeSuccess(responseData?.data?.meta))
        dispatch(getDetailsAction())
      } else {
        dispatch(postAboutMeFailure(responseData.errors))
      }
    } catch (error) {
      dispatch(postAboutMeFailure(error?.response?.data))
    }
  }

// POST profile data actions
const postProfileDataRequest = () => {
  return {
    type: actionTypes.POST_USER_REQUEST,
  }
}

const postProfileDataSuccess = (data) => {
  return {
    type: actionTypes.POST_USER_SUCCESS,
    payload: data,
  }
}

const postProfileDataFailure = (error) => {
  return {
    type: actionTypes.POST_USER_FAILURE,
    payload: error,
  }
}

export const postProfileDataAction = (payload) =>
  async(dispatch) => {
    dispatch(postProfileDataRequest())
    try {
      const responseData = await userDataServices.postUserProfileData(payload)
      if (responseData?.status === 200) {
        dispatch(postProfileDataSuccess(responseData?.data?.meta))
        dispatch(getDetailsAction())
      } else {
        dispatch(postProfileDataFailure(responseData.errors))
      }
    } catch (error) {
      dispatch(postProfileDataFailure(error?.response?.data))
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


// GET profile picture actions
// const getProfilePictureRequest = () => {
//   return {
//     type: actionTypes.GET_PROFILEPICTURE_REQUEST,
//   }
// }

// const getProfilePictureSuccess = (data) => {
//   return {
//     type: actionTypes.GET_PROFILEPICTURE_SUCCESS,
//     payload: data,
//   }
// }

// const getProfilePictureFailure = (error) => {
//   return {
//     type: actionTypes.GET_PROFILEPICTURE_FAILURE,
//     payload: error,
//   }
// }

// export const getProfilePictureAction = () =>
//   async(dispatch) => {
//     dispatch(getProfilePictureRequest())
//     try {
//       const responseData = await userDataServices.getProfilePicture()
//       if (responseData?.status === 200) {
//         dispatch(getProfilePictureSuccess(responseData?.data?.payload))
//       } else {
//         dispatch(getProfilePictureFailure(responseData.errors))
//       }
//     } catch (error) {
//       dispatch(getProfilePictureFailure(error?.response?.data))
//     }
//   }


// POST profile picture actions
const postProfilePictureRequest = () => {
  return {
    type: actionTypes.POST_PROFILEPICTURE_REQUEST,
  }
}

const postProfilePictureSuccess = (data) => {
  return {
    type: actionTypes.POST_PROFILEPICTURE_SUCCESS,
    payload: data,
  }
}

const postProfilePictureFailure = (error) => {
  return {
    type: actionTypes.POST_PROFILEPICTURE_FAILURE,
    payload: error,
  }
}

export const postProfilePictureAction = (payload) =>
  async(dispatch) => {
    dispatch(postProfilePictureRequest())
    try {
      const responseData = await userDataServices.postProfilePicture(payload)
      if (responseData?.status === 200) {
        dispatch(postProfilePictureSuccess(responseData?.data?.payload))
      } else {
        dispatch(postProfilePictureFailure(responseData.errors))
      }
    } catch (error) {
      dispatch(postProfilePictureFailure(error?.response?.data))
    }
  }
