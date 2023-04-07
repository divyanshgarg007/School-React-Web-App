import * as actionTypes from '../actions/actionsType'

const INITIAL_STATE = {
  postCoverImage: {
    data: null,
    loading: false,
    error: null,
  },
  getCoverImage: {
    data: null,
    loading: false,
    error: null,
  },
  postImageGallery: {
    data: null,
    loading: false,
    error: null,
  },
  getImageGallery: {
    data: null,
    loading: false,
    error: null,
  },
  postVideoLink: {
    data: null,
    loading: false,
    error: null,
  },
  getVideoLink: {
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

const galleryReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.POST_COVERIMAGE_REQUEST:
      return {
        ...state,
        postCoverImage: {
          ...state.postCoverImage,
          data: null,
          loading: true,
          error: null,
        },
      }
    case actionTypes.POST_COVERIMAGE_SUCCESS:
      return {
        ...state,
        postCoverImage: {
          ...state.postCoverImage,
          data: action.payload,
          loading: false,
          error: null,
        },
      }
    case actionTypes.POST_COVERIMAGE_FAILURE:
      return {
        ...state,
        postCoverImage: {
          ...state.postCoverImage,
          data: null,
          loading: false,
          error: action.payload,
        },
      }
    case actionTypes.GET_COVERIMAGE_REQUEST:
      return {
        ...state,
        getCoverImage: {
          ...state.getCoverImage,
          data: null,
          loading: true,
          error: null,
        },
      }
    case actionTypes.GET_COVERIMAGE_SUCCESS:
      return {
        ...state,
        getCoverImage: {
          ...state.getCoverImage,
          data: action.payload,
          loading: false,
          error: null,
        },
      }
    case actionTypes.GET_COVERIMAGE_FAILURE:
      return {
        ...state,
        getCoverImage: {
          ...state.getCoverImage,
          data: null,
          loading: false,
          error: action.payload,
        },
      }
    case actionTypes.POST_IMAGEGALLERY_REQUEST:
      return {
        ...state,
        postImageGallery: {
          ...state.postImageGallery,
          data: null,
          loading: true,
          error: null,
        },
      }
    case actionTypes.POST_IMAGEGALLERY_SUCCESS:
      return {
        ...state,
        postImageGallery: {
          ...state.postImageGallery,
          data: action.payload,
          loading: false,
          error: null,
        },
      }
    case actionTypes.POST_IMAGEGALLERY_FAILURE:
      return {
        ...state,
        postImageGallery: {
          ...state.postImageGallery,
          data: null,
          loading: false,
          error: action.payload,
        },
      }
    case actionTypes.GET_IMAGEGALLERY_REQUEST:
      return {
        ...state,
        getImageGallery: {
          ...state.getImageGallery,
          data: null,
          loading: true,
          error: null,
        },
      }
    case actionTypes.GET_IMAGEGALLERY_SUCCESS:
      return {
        ...state,
        getImageGallery: {
          ...state.getImageGallery,
          data: action.payload,
          loading: false,
          error: null,
        },
      }
    case actionTypes.GET_IMAGEGALLERY_FAILURE:
      return {
        ...state,
        getImageGallery: {
          ...state.getImageGallery,
          data: null,
          loading: false,
          error: action.payload,
        },
      }
    case actionTypes.POST_VIDEOLINK_REQUEST:
      return {
        ...state,
        postVideoLink: {
          ...state.postVideoLink,
          data: null,
          loading: true,
          error: null,
        },
      }
    case actionTypes.POST_VIDEOLINK_SUCCESS:
      return {
        ...state,
        postVideoLink: {
          ...state.postVideoLink,
          data: action.payload,
          loading: false,
          error: null,
        },
      }
    case actionTypes.POST_VIDEOLINK_FAILURE:
      return {
        ...state,
        postVideoLink: {
          ...state.postVideoLink,
          data: null,
          loading: false,
          error: action.payload,
        },
      }
    case actionTypes.GET_VIDEOLINK_REQUEST:
      return {
        ...state,
        getVideoLink: {
          ...state.getVideoLink,
          data: null,
          loading: true,
          error: null,
        },
      }
    case actionTypes.GET_VIDEOLINK_SUCCESS:
      return {
        ...state,
        getVideoLink: {
          ...state.getVideoLink,
          data: action.payload,
          loading: false,
          error: null,
        },
      }
    case actionTypes.GET_VIDEOLINK_FAILURE:
      return {
        ...state,
        getVideoLink: {
          ...state.getVideoLink,
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
        postCoverImage: {
          data: null,
          loading: false,
          error: null,
        },
        postImageGallery: {
          data: null,
          loading: false,
          error: null,
        },
        postVideoLink: {
          data: null,
          loading: false,
          error: null,
        },
      }
    default:
      return state
  }
}


export default galleryReducers
