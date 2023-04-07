import * as authServices from '../../services/authServices'
import * as authUtils from '../../utilities/authUtils'
import * as actionTypes from './actionsType'
import {getDetailsAction} from './masterActions'

// actions for login
const authLoginRequest = () => {
  return {
    type: actionTypes.AUTH_LOGIN_REQUEST,
  }
}

const authLoginSuccess = (data) => {
  return {
    type: actionTypes.AUTH_LOGIN_SUCCESS,
    payload: data,
  }
}

const authLoginFailure = (error) => {
  return {
    type: actionTypes.AUTH_LOGIN_FAILURE,
    payload: error,
  }
}

//login action
export const authLoginAction = (payload) =>
  async(dispatch) => {
    dispatch(authLoginRequest())
    try {
      const responseData = await authServices.authLogin(payload)
      if (responseData?.status === 200) { // success
        dispatch(authLoginSuccess(responseData?.data))
        if (responseData.data.payload.is_admin) {
          return authUtils.setToken('adminToken', responseData.data.payload.token)
        } else {
          return authUtils.setToken('token', responseData.data.payload.token)
        }
      } else {
        dispatch(authLoginFailure(responseData.errors))
      }
    } catch (error) {
      dispatch(authLoginFailure(error?.response?.data))
    }
  }

//actions for signup
const authSignupRequest = () => {
  return {
    type: actionTypes.AUTH_SIGNUP_REQUEST,
  }
}

const authSignupSuccess = (data) => {
  return {
    type: actionTypes.AUTH_SIGNUP_SUCCESS,
    payload: data,
  }
}

const authSignupFailure = (error) => {
  return {
    type: actionTypes.AUTH_SIGNUP_FAILURE,
    payload: error,
  }
}

const authGoogleSignup = (error) => {
  return {
    type: actionTypes.AUTH_GOOGLE_SIGNUP,
    payload: error,
  }
}

//signup action
export const authSignupAction = (payload) =>
  async(dispatch) => {
    dispatch(authSignupRequest())
    try {
      const responseData = await authServices.authSignup(payload)
      if (responseData?.status === 200) {
        dispatch(authSignupSuccess(responseData?.data?.meta))
        dispatch(authGoogleSignup(responseData))
      } else {
        dispatch(authSignupFailure(responseData.errors))
      }
    } catch (error) {
      dispatch(authSignupFailure(error?.response?.data))
    }
  }

// action for signup
export const signUpStart = (payload) => {
  return {
    type: actionTypes.AUTH_SIGNUP_START,
    payload: payload,
  }
}

// action for logout
export const logOutUser = () => {
  return {
    type: actionTypes.AUTH_LOGOUT_USER,
    payload: undefined,
  }
}

// post reset password actions
const postResetPasswordRequest = () => {
  return {
    type: actionTypes.AUTH_RESET_PASSWORD_REQUEST,
  }
}

const postResetPasswordSuccess = (data) => {
  return {
    type: actionTypes.AUTH_RESET_PASSWORD_SUCCESS,
    payload: data,
  }
}

const postResetPasswordFailure = (error) => {
  return {
    type: actionTypes.AUTH_RESET_PASSWORD_FAILURE,
    payload: error,
  }
}

export const postResetPasswordAction = (payload) =>
  async(dispatch) => {
    dispatch(postResetPasswordRequest())
    try {
      const responseData = await authServices.authResetPassword(payload)
      if (responseData?.status === 200) {
        dispatch(postResetPasswordSuccess(responseData?.data?.meta))
      } else {
        dispatch(postResetPasswordFailure(responseData.errors))
      }
    } catch (error) {
      dispatch(postResetPasswordFailure(error?.response?.data))
    }
  }

// post disable user actions
const postDisableUserRequest = () => {
  return {
    type: actionTypes.DISABLE_USER_REQUEST,
  }
}

const postDisableUserSuccess = (data) => {
  return {
    type: actionTypes.DISABLE_USER_SUCCESS,
    payload: data,
  }
}

const postDisableUserFailure = (error) => {
  return {
    type: actionTypes.DISABLE_USER_FAILURE,
    payload: error,
  }
}

export const postDisableUserAction = (payload) =>
  async(dispatch) => {
    dispatch(postDisableUserRequest())
    try {
      const responseData = await authServices.disableUser(payload)
      if (responseData?.status === 200) {
        dispatch(postDisableUserSuccess(responseData))
        dispatch(getDetailsAction())
      } else {
        dispatch(postDisableUserFailure(responseData.errors))
      }
    } catch (error) {
      dispatch(postDisableUserFailure(error?.response?.data))
    }
  }


// post enable account actions
const postEnableAccountRequest = () => {
  return {
    type: actionTypes.ENABLE_USER_REQUEST,
  }
}

const postEnableAccountSuccess = (data) => {
  return {
    type: actionTypes.ENABLE_USER_SUCCESS,
    payload: data,
  }
}

const postEnableAccountFailure = (error) => {
  return {
    type: actionTypes.ENABLE_USER_FAILURE,
    payload: error,
  }
}

export const postEnableAccountAction = (payload) =>
  async(dispatch) => {
    dispatch(postEnableAccountRequest())
    try {
      const responseData = await authServices.enableUser(payload)
      if (responseData?.status === 200) {
        dispatch(postEnableAccountSuccess(responseData))
        dispatch(getDetailsAction())
      } else {
        dispatch(postEnableAccountFailure(responseData.errors))
      }
    } catch (error) {
      dispatch(postEnableAccountFailure(error?.response?.data))
    }
  }

// post disable account actions
const postDisableAccountRequest = () => {
  return {
    type: actionTypes.DISABLE_ACCOUNT_REQUEST,
  }
}

const postDisableAccountSuccess = (data) => {
  return {
    type: actionTypes.DISABLE_ACCOUNT_SUCCESS,
    payload: data,
  }
}

const postDisableAccountFailure = (error) => {
  return {
    type: actionTypes.DISABLE_ACCOUNT_FAILURE,
    payload: error,
  }
}

export const postDisableAccountAction = (payload) =>
  async(dispatch) => {
    dispatch(postDisableAccountRequest())
    try {
      const responseData = await authServices.disableAccountUser(payload)
      if (responseData?.status === 200) {
        dispatch(postDisableAccountSuccess(responseData))
      } else {
        dispatch(postDisableAccountFailure(responseData.errors))
      }
    } catch (error) {
      dispatch(postDisableAccountFailure(error?.response?.data))
    }
  }

// post email verify actions
const emailVerifyRequest = () => {
  return {
    type: actionTypes.VERIFY_EMAIL_REQUEST,
  }
}

const emailVerifySuccess = (data) => {
  return {
    type: actionTypes.VERIFY_EMAIL_SUCCESS,
    payload: data,
  }
}

const emailVerifyFailure = (error) => {
  return {
    type: actionTypes.VERIFY_EMAIL_FAILURE,
    payload: error,
  }
}

export const emailVerifyAction = (payload) =>
  async(dispatch) => {
    dispatch(emailVerifyRequest())
    try {
      const responseData = await authServices.verifyEmail(payload)
      if (responseData?.status === 200) {
        dispatch(emailVerifySuccess(responseData?.data?.meta))
      } else {
        dispatch(emailVerifyFailure(responseData.errors))
      }
    } catch (error) {
      dispatch(emailVerifyFailure(error?.response?.data))
    }
  }


// post send otp actions
const sendOtpRequest = () => {
  return {
    type: actionTypes.SEND_OTP_REQUEST,
  }
}

export const sendOtpSuccess = (data) => {
  return {
    type: actionTypes.SEND_OTP_SUCCESS,
    payload: data,
  }
}

const sendOtpFailure = (error) => {
  return {
    type: actionTypes.SEND_OTP_FAILURE,
    payload: error,
  }
}

export const sendOtpAction = (payload) =>
  async(dispatch) => {
    dispatch(sendOtpRequest())
    try {
      const responseData = await authServices.sendOtp(payload)
      if (responseData?.status === 200) {
        dispatch(sendOtpSuccess(responseData))
      } else {
        dispatch(sendOtpFailure(responseData.errors))
      }
    } catch (error) {
      dispatch(sendOtpFailure(error?.response?.data))
    }
  }

// post update pw actions
const updatePasswordRequest = () => {
  return {
    type: actionTypes.UPDATE_PASSWORD_REQUEST,
  }
}

const updatePasswordSuccess = (data) => {
  return {
    type: actionTypes.UPDATE_PASSWORD__SUCCESS,
    payload: data,
  }
}

const updatePasswordFailure = (error) => {
  return {
    type: actionTypes.UPDATE_PASSWORD__FAILURE,
    payload: error,
  }
}

export const updatePasswordAction = (payload) =>
  async(dispatch) => {
    dispatch(updatePasswordRequest())
    try {
      const responseData = await authServices.updatePassword(payload)
      if (responseData?.status === 200) {
        dispatch(updatePasswordSuccess(responseData))
      } else {
        dispatch(updatePasswordFailure(responseData.errors))
      }
    } catch (error) {
      dispatch(updatePasswordFailure(error?.response?.data))
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
