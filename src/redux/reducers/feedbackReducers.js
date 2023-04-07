import * as actionTypes from '../actions/actionsType'

const INITIAL_STATE = {
  getFeedback: {
    data: null,
    loading: false,
    error: null,
  },
  postFeedback: {
    data: null,
    loading: false,
    error: null,
  },
}

const feedbackReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_FEEDBACK_REQUEST:
      return {
        ...state,
        getFeedback: {
          ...state.getFeedback,
          data: null,
          loading: true,
          error: null,
        },
      }
    case actionTypes.GET_FEEDBACK_SUCCESS:
      return {
        ...state,
        getFeedback: {
          ...state.getFeedback,
          data: action.payload,
          loading: false,
          error: null,
        },
      }
    case actionTypes.GET_FEEDBACK_FAILURE:
      return {
        ...state,
        getFeedback: {
          ...state.getFeedback,
          data: null,
          loading: false,
          error: action.payload,
        },
      }
    case actionTypes.POST_FEEDBACK_REQUEST:
      return {
        ...state,
        postFeedback: {
          ...state.postFeedback,
          data: null,
          loading: true,
          error: null,
        },
      }
    case actionTypes.POST_FEEDBACK_SUCCESS:
      return {
        ...state,
        postFeedback: {
          ...state.postFeedback,
          data: action.payload,
          loading: false,
          error: null,
        },
      }
    case actionTypes.POST_FEEDBACK_FAILURE:
      return {
        ...state,
        postFeedback: {
          ...state.postFeedback,
          data: null,
          loading: false,
          error: action.payload,
        },
      }
    case actionTypes.CLEANUP_SNACKBAR:
      return {
        ...state,
        postFeedback: {
          data: null,
          loading: false,
          error: null,
        },
      }
    default:
      return state
  }
}


export default feedbackReducers
