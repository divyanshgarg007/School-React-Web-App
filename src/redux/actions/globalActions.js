import * as globalServices from '../../services/globalServices'
import * as actionTypes from './actionsType'
import {getDetailsAction} from './masterActions'


// get location actions
const getListRequest = () => {
  return {
    type: actionTypes.LIST_GET_REQUEST,
  }
}

const getListSuccess = (data) => {
  return {
    type: actionTypes.LIST_GET_SUCCESS,
    payload: data,
  }
}

const getListFailure = (error) => {
  return {
    type: actionTypes.LIST_GET_FAILURE,
    payload: error,
  }
}

export const getListAction = () =>
  async(dispatch) => {
    dispatch(getListRequest())
    try {
      const responseData = await globalServices.getList()
      if (responseData?.status === 200) {
        dispatch(getListSuccess(responseData?.data))
      } else {
        dispatch(getListFailure(responseData.errors))
      }
    } catch (error) {
      dispatch(getListFailure(error?.response?.data))
    }
  }

// delete api

const postDeleteRequest = () => {
  return {
    type: actionTypes.DELETE_POST_REQUEST,
  }
}

const postDeleteSuccess = (data) => {
  return {
    type: actionTypes.DELETE_POST_SUCCESS,
    payload: data,
  }
}

const postDeleteFailure = (error) => {
  return {
    type: actionTypes.DELETE_POST_FAILURE,
    payload: error,
  }
}

export const postDeleteAction = (payload) =>
  async(dispatch) => {
    dispatch(postDeleteRequest())
    try {
      const responseData = await globalServices.postDelete(payload)
      if (responseData?.status === 200) {
        dispatch(postDeleteSuccess(responseData?.data?.meta))
        dispatch(getDetailsAction())
      } else {
        dispatch(postDeleteFailure(responseData.errors))
      }
    } catch (error) {
      dispatch(postDeleteFailure(error?.response?.data))
    }
  }


// GET message actions
const getMessageRequest = () => {
  return {
    type: actionTypes.MESSAGE_GET_REQUEST,
  }
}

const getMessageSuccess = (data) => {
  return {
    type: actionTypes.MESSAGE_GET_SUCCESS,
    payload: data,
  }
}

const getMessageFailure = (error) => {
  return {
    type: actionTypes.MESSAGE_GET_FAILURE,
    payload: error,
  }
}

export const getMessageAction = () =>
  async(dispatch) => {
    dispatch(getMessageRequest())
    try {
      const responseData = await globalServices.getMessage()
      if (responseData?.status === 200) {
        dispatch(getMessageSuccess(responseData))
      } else {
        dispatch(getMessageFailure(responseData.errors))
      }
    } catch (error) {
      dispatch(getMessageFailure(error?.response?.data))
    }
  }

// POST Message actions
const postMessageRequest = () => {
  return {
    type: actionTypes.MESSAGE_POST_REQUEST,
  }
}

const postMessageSuccess = (data) => {
  return {
    type: actionTypes.MESSAGE_POST_SUCCESS,
    payload: data,
  }
}

const postMessageFailure = (error) => {
  return {
    type: actionTypes.MESSAGE_POST_FAILURE,
    payload: error,
  }
}

export const postMessageAction = (payload) =>
  async(dispatch) => {
    dispatch(postMessageRequest())
    try {
      const responseData = await globalServices.postMessage(payload)
      if (responseData?.status === 200) {
        dispatch(postMessageSuccess(responseData?.data?.meta))
      } else {
        dispatch(postMessageFailure(responseData.errors))
      }
    } catch (error) {
      dispatch(postMessageFailure(error?.response?.data))
    }
  }


// POST Message CleanUp actions
const postMessageCleanRequest = () => {
  return {
    type: actionTypes.MESSAGE_CLEAN_REQUEST,
  }
}

const postMessageCleanSuccess = (data) => {
  return {
    type: actionTypes.MESSAGE_CLEAN_SUCCESS,
    payload: data,
  }
}

const postMessageCleanFailure = (error) => {
  return {
    type: actionTypes.MESSAGE_CLEAN_FAILURE,
    payload: error,
  }
}

export const postMessageCleanAction = (payload) =>
  async(dispatch) => {
    dispatch(postMessageCleanRequest())
    try {
      const responseData = await globalServices.postCleanMessage(payload)
      if (responseData?.status === 200) {
        dispatch(postMessageCleanSuccess(responseData))
        dispatch(getMessageAction())
      } else {
        dispatch(postMessageCleanFailure(responseData.errors))
      }
    } catch (error) {
      dispatch(postMessageCleanFailure(error?.response?.data))
    }
  }


// POST package actions
const postPackageRequest = () => {
  return {
    type: actionTypes.POST_PACKAGE_REQUEST,
  }
}

const postPackageSuccess = (data) => {
  return {
    type: actionTypes.POST_PACKAGE_SUCCESS,
    payload: data,
  }
}

const postPackageFailure = (error) => {
  return {
    type: actionTypes.POST_PACKAGE_FAILURE,
    payload: error,
  }
}

export const postPackageAction = (payload) =>
  async(dispatch) => {
    dispatch(postPackageRequest())
    try {
      let responseData
      if (payload.package_id) {
        responseData = await globalServices.updatePackage(payload)
      } else {
        responseData = await globalServices.postPackage(payload)
      }
      if (responseData?.status === 200) {
        dispatch(postPackageSuccess(responseData?.data?.meta))
        dispatch(getListAction())
      } else {
        dispatch(postPackageFailure(responseData.errors))
      }
    } catch (error) {
      dispatch(postPackageFailure(error?.response?.data))
    }
  }

// DELETE package actions
const deletePackageRequest = () => {
  return {
    type: actionTypes.DELETE_PACKAGE_REQUEST,
  }
}

const deletePackageSuccess = (data) => {
  return {
    type: actionTypes.DELETE_PACKAGE_SUCCESS,
    payload: data,
  }
}

const deletePackageFailure = (error) => {
  return {
    type: actionTypes.DELETE_PACKAGE_FAILURE,
    payload: error,
  }
}

export const deletePackageAction = (payload) =>
  async(dispatch) => {
    dispatch(deletePackageRequest())
    try {
      const responseData = await globalServices.deletePackage(payload)
      if (responseData?.status === 200) {
        dispatch(deletePackageSuccess(responseData?.data?.meta))
        dispatch(getListAction())
      } else {
        dispatch(deletePackageFailure(responseData.errors))
      }
    } catch (error) {
      dispatch(deletePackageFailure(error?.response?.data))
    }
  }


// GET users actions
const getUsersRequest = () => {
  return {
    type: actionTypes.GET_USERS_REQUEST,
  }
}

const getUsersSuccess = (data) => {
  return {
    type: actionTypes.GET_USERS_SUCCESS,
    payload: data,
  }
}

const getUsersFailure = (error) => {
  return {
    type: actionTypes.GET_USERS_FAILURE,
    payload: error,
  }
}

export const getUsersAction = (payload) =>
  async(dispatch) => {
    dispatch(getUsersRequest())
    try {
      const responseData = await globalServices.getCustomers(payload)
      if (responseData?.status === 200) {
        dispatch(getUsersSuccess(responseData?.data?.payload))
      } else {
        dispatch(getUsersFailure(responseData.errors))
      }
    } catch (error) {
      dispatch(getUsersFailure(error?.response?.data))
    }
  }


// POST UPDATE ORDER actions
const updateOrderRequest = () => {
  return {
    type: actionTypes.UPDATE_ORDER_REQUEST,
  }
}

const updateOrderSuccess = (data) => {
  return {
    type: actionTypes.UPDATE_ORDER_SUCCESS,
    payload: data,
  }
}

const updateOrderFailure = (error) => {
  return {
    type: actionTypes.UPDATE_ORDER_FAILURE,
    payload: error,
  }
}

export const updateOrderAction = (payload, type) =>
  async(dispatch) => {
    dispatch(updateOrderRequest())
    try {
      const responseData = await globalServices.updateOrder(payload, type)
      if (responseData?.status === 200) {
        dispatch(updateOrderSuccess(responseData?.data?.meta))
        dispatch(getDetailsAction())
      } else {
        dispatch(updateOrderFailure(responseData.errors))
      }
    } catch (error) {
      dispatch(updateOrderFailure(error?.response?.data))
    }
  }

// post delete user actions
const deleteUserRequest = () => {
  return {
    type: actionTypes.DISABLE_TEACHER_REQUEST,
  }
}

const deleteUserSuccess = (data) => {
  return {
    type: actionTypes.DISABLE_TEACHER_SUCCESS,
    payload: data,
  }
}

const deleteUserFailure = (error) => {
  return {
    type: actionTypes.DISABLE_TEACHER_FAILURE,
    payload: error,
  }
}

export const deleteUserAction = (payload) =>
  async(dispatch) => {
    dispatch(deleteUserRequest())
    try {
      const responseData = await globalServices.deleteUser(payload)
      if (responseData?.status === 200) {
        dispatch(deleteUserSuccess(responseData))
        dispatch(getUsersAction())
      } else {
        dispatch(deleteUserFailure(responseData.errors))
      }
    } catch (error) {
      dispatch(deleteUserFailure(error?.response?.data))
    }
  }


// GET static data actions
const getStaticDataRequest = () => {
  return {
    type: actionTypes.GET_STATIC_DATA_REQUEST,
  }
}

const getStaticDataSuccess = (data) => {
  return {
    type: actionTypes.GET_STATIC_DATA_SUCCESS,
    payload: data,
  }
}

const getStaticDataFailure = (error) => {
  return {
    type: actionTypes.GET_STATIC_DATA_FAILURE,
    payload: error,
  }
}

export const getStaticDataAction = (payload) =>
  async(dispatch) => {
    dispatch(getStaticDataRequest())
    try {
      const responseData = await globalServices.getStaticData(payload)
      if (responseData?.status === 200) {
        dispatch(getStaticDataSuccess(responseData))
      } else {
        dispatch(getStaticDataFailure(responseData.errors))
      }
    } catch (error) {
      dispatch(getStaticDataFailure(error?.response?.data))
    }
  }


// get SALES admin actions
const getStaticAdminDataRequest = () => {
  return {
    type: actionTypes.GET_SALES_REQUEST,
  }
}

const getStaticAdminDataSuccess = (data) => {
  return {
    type: actionTypes.GET_SALES_SUCCESS,
    payload: data,
  }
}

const getStaticAdminDataFailure = (error) => {
  return {
    type: actionTypes.GET_SALES_FAILURE,
    payload: error,
  }
}

export const getStaticAdminDataAction = () =>
  async(dispatch) => {
    dispatch(getStaticAdminDataRequest())
    try {
      const responseData = await globalServices.getStaticAdminData()
      if (responseData?.status === 200) {
        dispatch(getStaticAdminDataSuccess(responseData))
      } else {
        dispatch(getStaticAdminDataFailure(responseData.errors))
      }
    } catch (error) {
      dispatch(getStaticAdminDataFailure(error?.response?.data))
    }
  }
