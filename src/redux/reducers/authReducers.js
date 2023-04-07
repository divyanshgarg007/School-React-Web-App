import * as actionTypes from '../actions/actionsType'

const INITIAL_STATE = {
  authLogin: {
    data: null,
    loading: false,
    error: null,
  },
  authSignup: {
    email: null,
    data: null,
    loading: false,
    error: null,
  },
  authResetPassword: {
    data: null,
    loading: false,
    error: null,
  },
  verifyEmail: {
    data: null,
    loading: false,
    error: null,
  },
  disableUser: {
    data: null,
    loading: false,
    error: null,
  },
  enableUser: {
    data: null,
    loading: false,
    error: null,
  },
  disableAccount: {
    data: null,
    loading: false,
    error: null,
  },
  sendOtp: {
    data: null,
    loading: false,
    error: null,
  },
  updatePassword: {
    data: null,
    loading: false,
    error: null,
  },
  authGoogleSignup: {
    data: null,
    loading: false,
    error: null,
  },
}

const authReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.AUTH_LOGIN_REQUEST:
      return {
        ...state,
        authLogin: {
          ...state.authLogin,
          data: null,
          loading: true,
          error: null,
        },
      }
    case actionTypes.AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        authLogin: {
          ...state.authLogin,
          data: action.payload,
          loading: false,
          error: null,
        },
      }
    case actionTypes.AUTH_LOGIN_FAILURE:
      return {
        ...state,
        authLogin: {
          ...state.authLogin,
          data: null,
          loading: false,
          error: action.payload,
        },
      }
    case actionTypes.AUTH_SIGNUP_START:
      return {
        ...state,
        authSignup: {
          ...state.authSignup,
          email: action.payload,
        },
      }
    case actionTypes.AUTH_SIGNUP_REQUEST:
      return {
        ...state,
        authSignup: {
          ...state.authSignup,
          data: null,
          loading: true,
          error: null,
        },
      }
    case actionTypes.AUTH_SIGNUP_SUCCESS:
      return {
        ...state,
        authSignup: {
          ...state.authSignup,
          data: action.payload,
          loading: false,
          error: null,
        },
      }
    case actionTypes.AUTH_SIGNUP_FAILURE:
      return {
        ...state,
        authSignup: {
          ...state.authSignup,
          data: null,
          loading: false,
          error: action.payload,
        },
      }
    case actionTypes.CLEANUP_SNACKBAR:
      return {
        ...state,
        authLogin: {
          data: null,
          loading: false,
          error: null,
        },
        authSignup: {
          data: null,
          loading: false,
          error: null,
        },
        authResetPassword: {
          data: null,
          loading: false,
          error: null,
        },
        disableUser: {
          data: null,
          loading: false,
          error: null,
        },
        enableUser: {
          data: null,
          loading: false,
          error: null,
        },
        disableAccount: {
          data: null,
          loading: false,
          error: null,
        },
      }
    case actionTypes.AUTH_RESET_PASSWORD_REQUEST:
      return {
        ...state,
        authResetPassword: {
          ...state.authResetPassword,
          data: null,
          loading: true,
          error: null,
        },
      }
    case actionTypes.AUTH_RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        authResetPassword: {
          ...state.authResetPassword,
          data: action.payload,
          loading: false,
          error: null,
        },
      }
    case actionTypes.AUTH_RESET_PASSWORD_FAILURE:
      return {
        ...state,
        authResetPassword: {
          ...state.authResetPassword,
          data: null,
          loading: false,
          error: action.payload,
        },
      }
    case actionTypes.DISABLE_USER_REQUEST:
      return {
        ...state,
        disableUser: {
          ...state.disableUser,
          data: null,
          loading: true,
          error: null,
        },
      }
    case actionTypes.DISABLE_USER_SUCCESS:
      return {
        ...state,
        disableUser: {
          ...state.disableUser,
          data: action.payload,
          loading: false,
          error: null,
        },
      }
    case actionTypes.DISABLE_USER_FAILURE:
      return {
        ...state,
        disableUser: {
          ...state.disableUser,
          data: null,
          loading: false,
          error: action.payload,
        },
      }
    case actionTypes.DISABLE_ACCOUNT_REQUEST:
      return {
        ...state,
        disableAccount: {
          ...state.disableAccount,
          data: null,
          loading: true,
          error: null,
        },
      }
    case actionTypes.DISABLE_ACCOUNT_SUCCESS:
      return {
        ...state,
        disableAccount: {
          ...state.disableAccount,
          data: action.payload,
          loading: false,
          error: null,
        },
      }
    case actionTypes.DISABLE_ACCOUNT_FAILURE:
      return {
        ...state,
        disableAccount: {
          ...state.disableAccount,
          data: null,
          loading: false,
          error: action.payload,
        },
      }
    case actionTypes.ENABLE_USER_REQUEST:
      return {
        ...state,
        enableUser: {
          ...state.enableUser,
          data: null,
          loading: true,
          error: null,
        },
      }
    case actionTypes.ENABLE_USER_SUCCESS:
      return {
        ...state,
        enableUser: {
          ...state.enableUser,
          data: action.payload,
          loading: false,
          error: null,
        },
      }
    case actionTypes.ENABLE_USER_FAILURE:
      return {
        ...state,
        enableUser: {
          ...state.enableUser,
          data: null,
          loading: false,
          error: action.payload,
        },
      }
    case actionTypes.VERIFY_EMAIL_REQUEST:
      return {
        ...state,
        verifyEmail: {
          ...state.verifyEmail,
          data: null,
          loading: true,
          error: null,
        },
      }
    case actionTypes.VERIFY_EMAIL_SUCCESS:
      return {
        ...state,
        verifyEmail: {
          ...state.verifyEmail,
          data: action.payload,
          loading: false,
          error: null,
        },
      }
    case actionTypes.VERIFY_EMAIL_FAILURE:
      return {
        ...state,
        verifyEmail: {
          ...state.verifyEmail,
          data: null,
          loading: false,
          error: action.payload,
        },
      }
    case actionTypes.SEND_OTP_REQUEST:
      return {
        ...state,
        sendOtp: {
          ...state.sendOtp,
          data: null,
          loading: true,
          error: null,
        },
      }
    case actionTypes.SEND_OTP_SUCCESS:
      return {
        ...state,
        sendOtp: {
          ...state.sendOtp,
          data: action.payload,
          loading: false,
          error: null,
        },
      }
    case actionTypes.SEND_OTP_FAILURE:
      return {
        ...state,
        sendOtp: {
          ...state.sendOtp,
          data: null,
          loading: false,
          error: action.payload,
        },
      }
    case actionTypes.UPDATE_PASSWORD_REQUEST:
      return {
        ...state,
        updatePassword: {
          ...state.updatePassword,
          data: null,
          loading: true,
          error: null,
        },
      }
    case actionTypes.UPDATE_PASSWORD__SUCCESS:
      return {
        ...state,
        updatePassword: {
          ...state.updatePassword,
          data: action.payload,
          loading: false,
          error: null,
        },
      }
    case actionTypes.UPDATE_PASSWORD__FAILURE:
      return {
        ...state,
        updatePassword: {
          ...state.updatePassword,
          data: null,
          loading: false,
          error: action.payload,
        },
      }
    case actionTypes.AUTH_GOOGLE_SIGNUP:
      return {
        ...state,
        authGoogleSignup: {
          ...state.authGoogleSignup,
          data: action.payload,
          loading: false,
          error: null,
        },
      }
    default:
      return state
  }
}

export default authReducers
