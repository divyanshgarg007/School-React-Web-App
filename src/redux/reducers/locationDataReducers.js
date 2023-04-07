import * as actionTypes from '../actions/actionsType'

const INITIAL_STATE = {
  postLocation: {
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

const locationDataReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.LOCATION_POST_REQUEST:
      return {
        ...state,
        postLocation: {
          ...state.postLocation,
          data: null,
          loading: true,
          error: null,
        },
      }
    case actionTypes.LOCATION_POST_SUCCESS:
      return {
        ...state,
        postLocation: {
          ...state.postLocation,
          data: action.payload,
          loading: false,
          error: null,
        },
      }
    case actionTypes.LOCATION_POST_FAILURE:
      return {
        ...state,
        postLocation: {
          ...state.postLocation,
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
        postLocation: {
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


export default locationDataReducers
