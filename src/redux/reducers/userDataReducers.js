import * as actionTypes from '../actions/actionsType'

const INITIAL_STATE = {
  postUserProfileData: {
    data: null,
    loading: false,
    error: null,
  },
  postAboutMe: {
    data: null,
    loading: false,
    error: null,
  },
  postProfilePicture: {
    data: null,
    loading: false,
    error: null,
  },
  // getProfilePicture: {
  //   data: null,
  //   loading: false,
  //   error: null,
  // },
}

const userDataReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.POST_USER_REQUEST:
      return {
        ...state,
        postUserProfileData: {
          ...state.postUserProfileData,
          data: null,
          loading: true,
          error: null,
        },
      }
    case actionTypes.POST_USER_SUCCESS:
      return {
        ...state,
        postUserProfileData: {
          ...state.postUserProfileData,
          data: action.payload,
          loading: false,
          error: null,
        },
      }
    case actionTypes.POST_USER_FAILURE:
      return {
        ...state,
        postUserProfileData: {
          ...state.postUserProfileData,
          data: null,
          loading: false,
          error: action.payload,
        },
      }
    case actionTypes.POST_ABOUTME_REQUEST:
      return {
        ...state,
        postAboutMe: {
          ...state.postAboutMe,
          data: null,
          loading: true,
          error: null,
        },
      }
    case actionTypes.POST_ABOUTME_SUCCESS:
      return {
        ...state,
        postAboutMe: {
          ...state.postAboutMe,
          data: action.payload,
          loading: false,
          error: null,
        },
      }
    case actionTypes.POST_ABOUTME_FAILURE:
      return {
        ...state,
        postAboutMe: {
          ...state.postAboutMe,
          data: null,
          loading: false,
          error: action.payload,
        },
      }
    case actionTypes.POST_PROFILEPICTURE_REQUEST:
      return {
        ...state,
        postProfilePicture: {
          ...state.postProfilePicture,
          data: null,
          loading: true,
          error: null,
        },
      }
    case actionTypes.POST_PROFILEPICTURE_SUCCESS:
      return {
        ...state,
        postProfilePicture: {
          ...state.postProfilePicture,
          data: action.payload,
          loading: false,
          error: null,
        },
      }
    case actionTypes.POST_PROFILEPICTURE_FAILURE:
      return {
        ...state,
        postProfilePicture: {
          ...state.postProfilePicture,
          data: null,
          loading: false,
          error: action.payload,
        },
      }
    // case actionTypes.GET_PROFILEPICTURE_REQUEST:
    //   return {
    //     ...state,
    //     getProfilePicture: {
    //       ...state.getProfilePicture,
    //       data: null,
    //       loading: true,
    //       error: null,
    //     },
    //   }
    // case actionTypes.GET_PROFILEPICTURE_SUCCESS:
    //   return {
    //     ...state,
    //     getProfilePicture: {
    //       ...state.getProfilePicture,
    //       data: action.payload,
    //       loading: false,
    //       error: null,
    //     },
    //   }
    // case actionTypes.GET_PROFILEPICTURE_FAILURE:
    //   return {
    //     ...state,
    //     getProfilePicture: {
    //       ...state.getProfilePicture,
    //       data: null,
    //       loading: false,
    //       error: action.payload,
    //     },
    //   }
    case actionTypes.CLEANUP_SNACKBAR:
      return {
        ...state,
        postAboutMe: {
          data: null,
          loading: false,
          error: null,
        },
        postUserProfileData: {
          data: null,
          loading: false,
          error: null,
        },
        // postProfilePicture: {
        //   data: null,
        //   loading: false,
        //   error: null,
        // },
      }
    default:
      return state
  }
}


export default userDataReducers
