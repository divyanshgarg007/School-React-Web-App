import * as actionTypes from '../actions/actionsType'

const INITIAL_STATE = {
  getCategorySubCategory: {
    data: null,
    loading: false,
    error: null,
  },
  getAdminCategorySubCategory: {
    data: null,
    loading: false,
    error: null,
  },
  postCategoryList: {
    data: null,
    loading: false,
    error: null,
  },
  postSubCategoryList: {
    data: null,
    loading: false,
    error: null,
  },
  postCategoryImage: {
    data: null,
    loading: false,
    error: null,
  },
  postSubCategoryImage: {
    data: null,
    loading: false,
    error: null,
  },
}

const categoryReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_CATEGORIES_REQUEST:
      return {
        ...state,
        getCategorySubCategory: {
          ...state.getCategorySubCategory,
          data: null,
          loading: true,
          error: null,
        },
      }
    case actionTypes.GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        getCategorySubCategory: {
          ...state.getCategorySubCategory,
          data: action.payload,
          loading: false,
          error: null,
        },
      }
    case actionTypes.GET_CATEGORIES_FAILURE:
      return {
        ...state,
        getCategorySubCategory: {
          ...state.getCategorySubCategory,
          data: null,
          loading: false,
          error: action.payload,
        },
      }
    case actionTypes.GET_ADMIN_CATEGORIES_REQUEST:
      return {
        ...state,
        getAdminCategorySubCategory: {
          ...state.getAdminCategorySubCategory,
          data: null,
          loading: true,
          error: null,
        },
      }
    case actionTypes.GET_ADMIN_CATEGORIES_SUCCESS:
      return {
        ...state,
        getAdminCategorySubCategory: {
          ...state.getAdminCategorySubCategory,
          data: action.payload,
          loading: false,
          error: null,
        },
      }
    case actionTypes.GET_ADMIN_CATEGORIES_FAILURE:
      return {
        ...state,
        getAdminCategorySubCategory: {
          ...state.getAdminCategorySubCategory,
          data: null,
          loading: false,
          error: action.payload,
        },
      }
    case actionTypes.POST_CATEGORY_REQUEST:
      return {
        ...state,
        postCategoryList: {
          ...state.postCategoryList,
          data: null,
          loading: true,
          error: null,
        },
      }
    case actionTypes.POST_CATEGORY_SUCCESS:
      return {
        ...state,
        postCategoryList: {
          ...state.postCategoryList,
          data: action.payload,
          loading: false,
          error: null,
        },
      }
    case actionTypes.POST_CATEGORY_FAILURE:
      return {
        ...state,
        postCategoryList: {
          ...state.postCategoryList,
          data: null,
          loading: false,
          error: action.payload,
        },
      }
    case actionTypes.POST_SUBCATEGORY_REQUEST:
      return {
        ...state,
        postSubCategoryList: {
          ...state.postSubCategoryList,
          data: null,
          loading: true,
          error: null,
        },
      }
    case actionTypes.POST_SUBCATEGORY_SUCCESS:
      return {
        ...state,
        postSubCategoryList: {
          ...state.postSubCategoryList,
          data: action.payload,
          loading: false,
          error: null,
        },
      }
    case actionTypes.POST_SUBCATEGORY_FAILURE:
      return {
        ...state,
        postSubCategoryList: {
          ...state.postSubCategoryList,
          data: null,
          loading: false,
          error: action.payload,
        },
      }
    case actionTypes.POST_CATEGORYIMAGE_REQUEST:
      return {
        ...state,
        postCategoryImage: {
          ...state.postCategoryImage,
          data: null,
          loading: true,
          error: null,
        },
      }
    case actionTypes.POST_CATEGORYIMAGE_SUCCESS:
      return {
        ...state,
        postCategoryImage: {
          ...state.postCategoryImage,
          data: action.payload,
          loading: false,
          error: null,
        },
      }
    case actionTypes.POST_CATEGORYIMAGE_FAILURE:
      return {
        ...state,
        postCategoryImage: {
          ...state.postCategoryImage,
          data: null,
          loading: false,
          error: action.payload,
        },
      }
    case actionTypes.POST_SUBCATEGORYIMAGE_REQUEST:
      return {
        ...state,
        postSubCategoryImage: {
          ...state.postSubCategoryImage,
          data: null,
          loading: true,
          error: null,
        },
      }
    case actionTypes.POST_SUBCATEGORYIMAGE_SUCCESS:
      return {
        ...state,
        postSubCategoryImage: {
          ...state.postSubCategoryImage,
          data: action.payload,
          loading: false,
          error: null,
        },
      }
    case actionTypes.POST_SUBCATEGORYIMAGE_FAILURE:
      return {
        ...state,
        postSubCategoryImage: {
          ...state.postSubCategoryImage,
          data: null,
          loading: false,
          error: action.payload,
        },
      }
    case actionTypes.CLEANUP_SNACKBAR:
      return {
        ...state,
        postCategoryList: {
          data: null,
          loading: false,
          error: null,
        },
        postSubCategoryList: {
          data: null,
          loading: false,
          error: null,
        },
      }
    default:
      return state
  }
}

export default categoryReducers
