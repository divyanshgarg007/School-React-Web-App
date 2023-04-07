import * as actionTypes from '../actions/actionsType'

const INITIAL_STATE = {
  postEducation: {
    data: null,
    loading: false,
    error: null,
  },
  postDelete: {
    data: null,
    loading: false,
    error: null,
  },
}

const educationDataReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.EDUCATION_POST_REQUEST:
      return {
        ...state,
        postEducation: {
          ...state.postEducation,
          data: null,
          loading: true,
          error: null,
        },
      }
    case actionTypes.EDUCATION_POST_SUCCESS:
      return {
        ...state,
        postEducation: {
          ...state.postEducation,
          data: action.payload,
          loading: false,
          error: null,
        },
      }
    case actionTypes.EDUCATION_POST_FAILURE:
      return {
        ...state,
        postEducation: {
          ...state.postEducation,
          data: null,
          loading: false,
          error: action.payload,
        },
      }
    case actionTypes.DELETE_POST_REQUEST:
      return {
        ...state,
        postDelete: {
          ...state.postDelete,
          data: null,
          loading: true,
          error: null,
        },
      }
    case actionTypes.DELETE_POST_SUCCESS:
      return {
        ...state,
        postDelete: {
          ...state.postDelete,
          data: action.payload,
          loading: false,
          error: null,
        },
      }
    case actionTypes.DELETE_POST_FAILURE:
      return {
        ...state,
        postDelete: {
          ...state.postDelete,
          data: null,
          loading: false,
          error: action.payload,
        },
      }
    case actionTypes.CLEANUP_SNACKBAR:
      return {
        ...state,
        postEducation: {
          data: null,
          loading: false,
          error: null,
        },
        postDelete: {
          data: null,
          loading: false,
          error: null,
        },
      }
    default:
      return state
  }
}


export default educationDataReducers
