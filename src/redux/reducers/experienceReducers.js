import * as actionTypes from '../actions/actionsType'

const INITIAL_STATE = {
  postExperience: {
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

const experienceDataReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.EXPERIENCE_POST_REQUEST:
      return {
        ...state,
        postExperience: {
          ...state.postExperience,
          data: null,
          loading: true,
          error: null,
        },
      }
    case actionTypes.EXPERIENCE_POST_SUCCESS:
      return {
        ...state,
        postExperience: {
          ...state.postExperience,
          data: action.payload,
          loading: false,
          error: null,
        },
      }
    case actionTypes.EXPERIENCE_POST_FAILURE:
      return {
        ...state,
        postExperience: {
          ...state.postExperience,
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
        postExperience: {
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


export default experienceDataReducers
