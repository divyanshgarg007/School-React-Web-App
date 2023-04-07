import * as categoryServices from '../../services/categoryServices'
import * as actionTypes from './actionsType'

// Get Categories and sub categories

const getCategoryRequest = () => {
  return {
    type: actionTypes.GET_CATEGORIES_REQUEST,
  }
}

const getCategorySuccess = (data) => {
  return {
    type: actionTypes.GET_CATEGORIES_SUCCESS,
    payload: data,
  }
}

const getCategoryFailure = (error) => {
  return {
    type: actionTypes.GET_CATEGORIES_FAILURE,
    payload: error,
  }
}

export const getCategoryAction = (payload) =>
  async(dispatch) => {
    dispatch(getCategoryRequest())
    try {
      const responseData = await categoryServices.getCategorySubCategory(payload)
      if (responseData?.status === 200) {
        dispatch(getCategorySuccess(responseData.data.payload))
      } else {
        dispatch(getCategoryFailure(responseData.errors))
      }
    } catch (error) {
      dispatch(getCategoryFailure(error?.response?.data))
    }
  }


// Get admin Categories and sub categories

const getAdminCategoryRequest = () => {
  return {
    type: actionTypes.GET_ADMIN_CATEGORIES_REQUEST,
  }
}

const getAdminCategorySuccess = (data) => {
  return {
    type: actionTypes.GET_ADMIN_CATEGORIES_SUCCESS,
    payload: data,
  }
}

const getAdminCategoryFailure = (error) => {
  return {
    type: actionTypes.GET_ADMIN_CATEGORIES_FAILURE,
    payload: error,
  }
}

export const getAdminCategoryAction = () =>
  async(dispatch) => {
    dispatch(getAdminCategoryRequest())
    try {
      const responseData = await categoryServices.getAdminCategorySubCategory()
      if (responseData?.status === 200) {
        dispatch(getAdminCategorySuccess(responseData.data.payload))
      } else {
        dispatch(getAdminCategoryFailure(responseData.errors))
      }
    } catch (error) {
      dispatch(getAdminCategoryFailure(error?.response?.data))
    }
  }


// POST Category Actions
const postCategoryListRequest = () => {
  return {
    type: actionTypes.POST_CATEGORY_REQUEST,
  }
}

const postCategoryListSuccess = (data) => {
  return {
    type: actionTypes.POST_CATEGORY_SUCCESS,
    payload: data,
  }
}

const postCategoryListFailure = (error) => {
  return {
    type: actionTypes.POST_CATEGORY_FAILURE,
    payload: error,
  }
}

export const postCategoryListAction = (payload) =>
  async(dispatch) => {
    dispatch(postCategoryListRequest())
    try {
      // we check if paylaod has an id property and call the update service
      let responseData
      if (payload.id) {
        responseData = await categoryServices.updateCategory(payload)
      } else {
        responseData = await categoryServices.postCategoryList(payload)
      }
      if (responseData?.status === 200) {
        dispatch(postCategoryListSuccess(responseData?.data?.meta))
        dispatch(getCategoryAction())
      } else {
        dispatch(postCategoryListFailure(responseData.errors))
      }
    } catch (error) {
      dispatch(postCategoryListFailure(error?.response?.data))
    }
  }

// POST Subcategory Actions
const postSubCategoryListRequest = () => {
  return {
    type: actionTypes.POST_SUBCATEGORY_REQUEST,
  }
}

const postSubCategoryListSuccess = (data) => {
  return {
    type: actionTypes.POST_SUBCATEGORY_SUCCESS,
    payload: data,
  }
}

const postSubCategoryListFailure = (error) => {
  return {
    type: actionTypes.POST_SUBCATEGORY_FAILURE,
    payload: error,
  }
}

export const postSubCategoryListAction = (payload) =>
  async(dispatch) => {
    dispatch(postSubCategoryListRequest())
    try {
      let responseData
      if (payload.sub_category_id) {
        responseData = await categoryServices.updateSubcategory(payload)
      } else {
        responseData = await categoryServices.postSubCategoryList(payload)
      }
      if (responseData?.status === 200) {
        dispatch(postSubCategoryListSuccess(responseData))
        dispatch(getCategoryAction())
      } else {
        dispatch(postSubCategoryListFailure(responseData.errors))
      }
    } catch (error) {
      dispatch(postSubCategoryListFailure(error?.response?.data))
    }
  }


// POST category image actions
const postCategoryImageRequest = () => {
  return {
    type: actionTypes.POST_CATEGORYIMAGE_REQUEST,
  }
}

const postCategoryImageSuccess = (data) => {
  return {
    type: actionTypes.POST_CATEGORYIMAGE_SUCCESS,
    payload: data,
  }
}

const postCategoryImageFailure = (error) => {
  return {
    type: actionTypes.POST_CATEGORYIMAGE_FAILURE,
    payload: error,
  }
}

export const postCategoryImageAction = (payload) =>
  async(dispatch) => {
    dispatch(postCategoryImageRequest())
    try {
      const responseData = await categoryServices.postCategoryPicture(payload)
      if (responseData?.status === 200) {
        dispatch(postCategoryImageSuccess(responseData?.data?.payload))
      } else {
        dispatch(postCategoryImageFailure(responseData.errors))
      }
    } catch (error) {
      dispatch(postCategoryImageFailure(error?.response?.data))
    }
  }


// POST subcategory image actions
const postSubCategoryImageRequest = () => {
  return {
    type: actionTypes.POST_SUBCATEGORYIMAGE_REQUEST,
  }
}

const postSubCategoryImageSuccess = (data) => {
  return {
    type: actionTypes.POST_SUBCATEGORYIMAGE_SUCCESS,
    payload: data,
  }
}

const postSubCategoryImageFailure = (error) => {
  return {
    type: actionTypes.POST_SUBCATEGORYIMAGE_FAILURE,
    payload: error,
  }
}

export const postSubCategoryImageAction = (payload) =>
  async(dispatch) => {
    dispatch(postSubCategoryImageRequest())
    try {
      const responseData = await categoryServices.postCategoryPicture(payload)
      if (responseData?.status === 200) {
        dispatch(postSubCategoryImageSuccess(responseData?.data?.payload))
      } else {
        dispatch(postSubCategoryImageFailure(responseData.errors))
      }
    } catch (error) {
      dispatch(postSubCategoryImageFailure(error?.response?.data))
    }
  }
