import * as actionTypes from '../actions/actionsType'

const INITIAL_STATE = {
  getTeacherData: {
    data: null,
    loading: false,
    error: null,
  },
  postTeacherData: {
    data: null,
    loading: false,
    error: null,
  },
  getDetailsData: {
    data: null,
    loading: false,
    error: null,
  },
  getIsPublish: {
    data: null,
    loading: false,
    error: null,
  },
  getTeacherSummary: {
    data: null,
    loading: false,
    error: null,
  },
  getTeacherFinal: {
    data: null,
    loading: false,
    error: null,
  },
  getTeachersCardList: {
    data: null,
    loading: false,
    error: null,
  },
  postProfileClick: {
    data: null,
    loading: false,
    error: null,
  },
  postAccountStatus: {
    data: null,
    loading: false,
    error: null,
  },
  deleteUser: {
    data: null,
    loading: false,
    error: null,
  },
}

const masterReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_TEACHER_REQUEST:
      return {
        ...state,
        getTeacherData: {
          ...state.getTeacherData,
          data: null,
          loading: true,
          error: null,
        },
      }
    case actionTypes.GET_TEACHER_SUCCESS:
      return {
        ...state,
        getTeacherData: {
          ...state.getTeacherData,
          data: action.payload,
          loading: false,
          error: null,
        },
      }
    case actionTypes.GET_TEACHER_FAILURE:
      return {
        ...state,
        getTeacherData: {
          ...state.getTeacherData,
          data: null,
          loading: false,
          error: action.payload,
        },
      }
    case actionTypes.POST_TEACHER_REQUEST:
      return {
        ...state,
        postTeacherData: {
          ...state.postTeacherData,
          data: null,
          loading: true,
          error: null,
        },
      }
    case actionTypes.POST_TEACHER_SUCCESS:
      return {
        ...state,
        postTeacherData: {
          ...state.postTeacherData,
          data: action.payload,
          loading: false,
          error: null,
        },
      }
    case actionTypes.POST_TEACHER_FAILURE:
      return {
        ...state,
        postTeacherData: {
          ...state.postTeacherData,
          data: null,
          loading: false,
          error: action.payload,
        },
      }
    case actionTypes.GET_DETAILS_REQUEST:
      return {
        ...state,
        getDetailsData: {
          ...state.getDetailsData,
          data: null,
          loading: true,
          error: null,
        },
      }
    case actionTypes.GET_DETAILS_SUCCESS:
      return {
        ...state,
        getDetailsData: {
          ...state.getDetailsData,
          data: action.payload,
          loading: false,
          error: null,
        },
      }
    case actionTypes.GET_DETAILS_FAILURE:
      return {
        ...state,
        getDetailsData: {
          ...state.getDetailsData,
          data: null,
          loading: false,
          error: action.payload,
        },
      }
    case actionTypes.GET_SUMMARY_REQUEST:
      return {
        ...state,
        getTeacherSummary: {
          ...state.getTeacherSummary,
          data: null,
          loading: true,
          error: null,
        },
      }
    case actionTypes.GET_SUMMARY_SUCCESS:
      return {
        ...state,
        getTeacherSummary: {
          ...state.getTeacherSummary,
          data: action.payload,
          loading: false,
          error: null,
        },
      }
    case actionTypes.GET_SUMMARY_FAILURE:
      return {
        ...state,
        getTeacherSummary: {
          ...state.getTeacherSummary,
          data: null,
          loading: false,
          error: action.payload,
        },
      }
    case actionTypes.GET_TEACHER_FINAL_REQUEST:
      return {
        ...state,
        getTeacherFinal: {
          ...state.getTeacherFinal,
          data: null,
          loading: true,
          error: null,
        },
      }
    case actionTypes.GET_TEACHER_FINAL_SUCCESS:
      return {
        ...state,
        getTeacherFinal: {
          ...state.getTeacherFinal,
          data: action.payload,
          loading: false,
          error: null,
        },
      }
    case actionTypes.GET_TEACHER_FINAL_FAILURE:
      return {
        ...state,
        getTeacherFinal: {
          ...state.getTeacherFinal,
          data: null,
          loading: false,
          error: action.payload,
        },
      }
    case actionTypes.GET_TEACHER_CARD_REQUEST:
      return {
        ...state,
        getTeachersCardList: {
          ...state.getTeachersCardList,
          data: null,
          loading: true,
          error: null,
        },
      }
    case actionTypes.GET_TEACHER_CARD_SUCCESS:
      return {
        ...state,
        getTeachersCardList: {
          ...state.getTeachersCardList,
          data: action.payload,
          loading: false,
          error: null,
        },
      }
    case actionTypes.GET_TEACHER_CARD_FAILURE:
      return {
        ...state,
        getTeachersCardList: {
          ...state.getTeachersCardList,
          data: null,
          loading: false,
          error: action.payload,
        },
      }
    case actionTypes.POST_PROFILE_COUNT_REQUEST:
      return {
        ...state,
        postProfileClick: {
          ...state.postProfileClick,
          data: null,
          loading: true,
          error: null,
        },
      }
    case actionTypes.POST_PROFILE_COUNT_SUCCESS:
      return {
        ...state,
        postProfileClick: {
          ...state.postProfileClick,
          data: action.payload,
          loading: false,
          error: null,
        },
      }
    case actionTypes.POST_PROFILE_COUNT_FAILURE:
      return {
        ...state,
        postProfileClick: {
          ...state.postProfileClick,
          data: null,
          loading: false,
          error: action.payload,
        },
      }
    case actionTypes.POST_ACCOUNT_STATUS_REQUEST:
      return {
        ...state,
        postAccountStatus: {
          ...state.postAccountStatus,
          data: null,
          loading: true,
          error: null,
        },
      }
    case actionTypes.POST_ACCOUNT_STATUS_SUCCESS:
      return {
        ...state,
        postAccountStatus: {
          ...state.postAccountStatus,
          data: action.payload,
          loading: false,
          error: null,
        },
      }
    case actionTypes.POST_ACCOUNT_STATUS_FAILURE:
      return {
        ...state,
        postAccountStatus: {
          ...state.postAccountStatus,
          data: null,
          loading: false,
          error: action.payload,
        },
      }
    case actionTypes.DISABLE_TEACHER_REQUEST:
      return {
        ...state,
        deleteUser: {
          ...state.deleteUser,
          data: null,
          loading: true,
          error: null,
        },
      }
    case actionTypes.DISABLE_TEACHER_SUCCESS:
      return {
        ...state,
        deleteUser: {
          ...state.deleteUser,
          data: action.payload,
          loading: false,
          error: null,
        },
      }
    case actionTypes.DISABLE_TEACHER_FAILURE:
      return {
        ...state,
        deleteUser: {
          ...state.deleteUser,
          data: null,
          loading: false,
          error: action.payload,
        },
      }
    case actionTypes.CLEANUP_SNACKBAR:
      return {
        ...state,
        postTeacherData: {
          data: null,
          loading: false,
          error: null,
        },
      }
    case actionTypes.GET_IS_PUBLISH:
      return {
        ...state,
        getIsPublish: {
          ...state.getIsPublish,
          data: action.payload,
          loading: false,
          error: null,
        },
      }
    default:
      return state
  }
}


export default masterReducers
