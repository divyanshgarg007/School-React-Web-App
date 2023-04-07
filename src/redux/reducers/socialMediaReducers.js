import * as actionTypes from '../actions/actionsType'

const INITIAL_STATE = {
  postSocialMediaList: {
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

const socialMediaListReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SOCIALMEDIA_POST_REQUEST:
      return {
        ...state,
        postSocialMediaList: {
          ...state.postSocialMediaList,
          data: null,
          loading: true,
          error: null,
        },
      }
    case actionTypes.SOCIALMEDIA_POST_SUCCESS:
      return {
        ...state,
        postSocialMediaList: {
          ...state.postSocialMediaList,
          data: action.payload,
          loading: false,
          error: null,
        },
      }
    case actionTypes.SOCIALMEDIA_POST_FAILURE:
      return {
        ...state,
        postSocialMediaList: {
          ...state.postSocialMediaList,
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
        postSocialMediaList: {
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

export default socialMediaListReducers


