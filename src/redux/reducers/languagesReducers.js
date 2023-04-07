import * as actionTypes from '../actions/actionsType'

const INITIAL_STATE = {
  postLanguagesList: {
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

const languagesListReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.LANGUAGES_POST_REQUEST:
      return {
        ...state,
        postLanguagesList: {
          ...state.postLanguagesList,
          data: null,
          loading: true,
          error: null,
        },
      }
    case actionTypes.LANGUAGES_POST_SUCCESS:
      return {
        ...state,
        postLanguagesList: {
          ...state.postLanguagesList,
          data: action.payload,
          loading: false,
          error: null,
        },
      }
    case actionTypes.LANGUAGES_POST_FAILURE:
      return {
        ...state,
        postLanguagesList: {
          ...state.postLanguagesList,
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
        postLanguagesList: {
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

export default languagesListReducers


