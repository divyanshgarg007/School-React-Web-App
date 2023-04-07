import * as actionTypes from '../actions/actionsType'

const INITIAL_STATE = {
  postLessons: {
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

const lessonsDataReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.LESSONS_POST_REQUEST:
      return {
        ...state,
        postLessons: {
          ...state.postLessons,
          data: null,
          loading: true,
          error: null,
        },
      }
    case actionTypes.LESSONS_POST_SUCCESS:
      return {
        ...state,
        postLessons: {
          ...state.postLessons,
          data: action.payload,
          loading: false,
          error: null,
        },
      }
    case actionTypes.LESSONS_POST_FAILURE:
      return {
        ...state,
        postLessons: {
          ...state.postLessons,
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
        postLessons: {
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


export default lessonsDataReducers
