import * as galleryServices from '../../services/galleryServices'
import * as actionTypes from './actionsType'
import {getDetailsAction} from './masterActions'


// GET cover image actions
const getCoverImageRequest = () => {
  return {
    type: actionTypes.GET_COVERIMAGE_REQUEST,
  }
}

const getCoverImageSuccess = (data) => {
  return {
    type: actionTypes.GET_COVERIMAGE_SUCCESS,
    payload: data,
  }
}

const getCoverImageFailure = (error) => {
  return {
    type: actionTypes.GET_COVERIMAGE_FAILURE,
    payload: error,
  }
}

export const getCoverImageAction = () =>
  async(dispatch) => {
    dispatch(getCoverImageRequest())
    try {
      const responseData = await galleryServices.getCoverImage()
      if (responseData?.status === 200) {
        dispatch(getCoverImageSuccess(responseData?.data?.payload))
      } else {
        dispatch(getCoverImageFailure(responseData.errors))
      }
    } catch (error) {
      dispatch(getCoverImageFailure(error?.response?.data))
    }
  }


// POST cover image actions
const postCoverImageRequest = () => {
  return {
    type: actionTypes.POST_COVERIMAGE_REQUEST,
  }
}

const postCoverImageSuccess = (data) => {
  return {
    type: actionTypes.POST_COVERIMAGE_SUCCESS,
    payload: data,
  }
}

const postCoverImageFailure = (error) => {
  return {
    type: actionTypes.POST_COVERIMAGE_FAILURE,
    payload: error,
  }
}

export const postCoverImageAction = (payload) =>
  async(dispatch) => {
    dispatch(postCoverImageRequest())
    try {
      const responseData = await galleryServices.postCoverImage(payload)
      if (responseData?.status === 200) {
        dispatch(postCoverImageSuccess(responseData?.data?.meta))
        dispatch(getDetailsAction())
      } else {
        dispatch(postCoverImageFailure(responseData.errors))
      }
    } catch (error) {
      dispatch(postCoverImageFailure(error?.response?.data))
    }
  }


// GET image gallery actions
const getImageGalleryRequest = () => {
  return {
    type: actionTypes.GET_IMAGEGALLERY_REQUEST,
  }
}

const getImageGallerySuccess = (data) => {
  return {
    type: actionTypes.GET_IMAGEGALLERY_SUCCESS,
    payload: data,
  }
}

const getImageGalleryFailure = (error) => {
  return {
    type: actionTypes.GET_IMAGEGALLERY_FAILURE,
    payload: error,
  }
}

export const getImageGalleryAction = () =>
  async(dispatch) => {
    dispatch(getImageGalleryRequest())
    try {
      const responseData = await galleryServices.getImageGallery()
      if (responseData?.status === 200) {
        dispatch(getImageGallerySuccess(responseData?.data?.payload))
      } else {
        dispatch(getImageGalleryFailure(responseData.errors))
      }
    } catch (error) {
      dispatch(getImageGalleryFailure(error?.response?.data))
    }
  }


// POST image gallery actions
const postImageGalleryRequest = () => {
  return {
    type: actionTypes.POST_IMAGEGALLERY_REQUEST,
  }
}

const postImageGallerySuccess = (data) => {
  return {
    type: actionTypes.POST_IMAGEGALLERY_SUCCESS,
    payload: data,
  }
}

const postImageGalleryFailure = (error) => {
  return {
    type: actionTypes.POST_IMAGEGALLERY_FAILURE,
    payload: error,
  }
}

export const postImageGalleryAction = (payload) =>
  async(dispatch) => {
    dispatch(postImageGalleryRequest())
    try {
      const responseData = await galleryServices.postImageGallery(payload)
      if (responseData?.status === 200) {
        dispatch(postImageGallerySuccess(responseData?.data?.meta))
        dispatch(getDetailsAction())
      } else {
        dispatch(postImageGalleryFailure(responseData.errors))
      }
    } catch (error) {
      dispatch(postImageGalleryFailure(error?.response?.data))
    }
  }


// GET video link actions
const getVideoLinkRequest = () => {
  return {
    type: actionTypes.GET_VIDEOLINK_REQUEST,
  }
}

const getVideoLinkSuccess = (data) => {
  return {
    type: actionTypes.GET_VIDEOLINK_SUCCESS,
    payload: data,
  }
}

const getVideoLinkFailure = (error) => {
  return {
    type: actionTypes.GET_VIDEOLINK_FAILURE,
    payload: error,
  }
}

export const getVideoLinkAction = () =>
  async(dispatch) => {
    dispatch(getVideoLinkRequest())
    try {
      const responseData = await galleryServices.getVideoLink()
      if (responseData?.status === 200) {
        dispatch(getVideoLinkSuccess(responseData?.data?.payload))
      } else {
        dispatch(getVideoLinkFailure(responseData.errors))
      }
    } catch (error) {
      dispatch(getVideoLinkFailure(error?.response?.data))
    }
  }


// POST video link actions
const postVideoLinkRequest = () => {
  return {
    type: actionTypes.POST_VIDEOLINK_REQUEST,
  }
}

const postVideoLinkSuccess = (data) => {
  return {
    type: actionTypes.POST_VIDEOLINK_SUCCESS,
    payload: data,
  }
}

const postVideoLinkFailure = (error) => {
  return {
    type: actionTypes.POST_VIDEOLINK_FAILURE,
    payload: error,
  }
}

export const postVideoLinkAction = (payload) =>
  async(dispatch) => {
    dispatch(postVideoLinkRequest())
    try {
      const responseData = await galleryServices.postVideoLink(payload)
      if (responseData?.status === 200) {
        dispatch(postVideoLinkSuccess(responseData?.data?.meta))
        dispatch(getDetailsAction())
      } else {
        dispatch(postVideoLinkFailure(responseData.errors))
      }
    } catch (error) {
      dispatch(postVideoLinkFailure(error?.response?.data))
    }
  }

