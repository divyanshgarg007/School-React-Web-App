import * as actionTypes from '../actions/actionsType'

const INITIAL_STATE = {
  getList: {
    data: null,
    loading: false,
    error: null,
  },
  postPackage: {
    data: null,
    loading: false,
    error: null,
  },
  deletePackage: {
    data: null,
    loading: false,
    error: null,
  },
  postDelete: {
    data: null,
    loading: false,
    error: null,
  },
  getMessage: {
    data: null,
    loading: false,
    error: null,
  },
  postMessage: {
    data: null,
    loading: false,
    error: null,
  },
  getUsers: {
    data: null,
    loading: false,
    error: null,
  },
  updateOrder: {
    data: null,
    loading: false,
    error: null,
  },
  postCleanMessage: {
    data: null,
    loading: false,
    error: null,
  },
  getStaticData: {
    data: null,
    loading: false,
    error: null,
  },
  getStaticAdminData: {
    data: null,
    loading: false,
    error: null,
  },
}

const globalDataReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.LIST_GET_REQUEST:
      return {
        ...state,
        getList: {
          ...state.getList,
          data: null,
          loading: true,
          error: null,
        },
      }
    case actionTypes.LIST_GET_SUCCESS:
      return {
        ...state,
        getList: {
          ...state.getList,
          data: action.payload,
          loading: false,
          error: null,
        },
      }
    case actionTypes.LIST_GET_FAILURE:
      return {
        ...state,
        getList: {
          ...state.getList,
          data: null,
          loading: false,
          error: action.payload,
        },
      }
    case actionTypes.POST_PACKAGE_REQUEST:
      return {
        ...state,
        postPackage: {
          ...state.postPackage,
          data: null,
          loading: true,
          error: null,
        },
      }
    case actionTypes.POST_PACKAGE_SUCCESS:
      return {
        ...state,
        postPackage: {
          ...state.postPackage,
          data: action.payload,
          loading: false,
          error: null,
        },
      }
    case actionTypes.POST_PACKAGE_FAILURE:
      return {
        ...state,
        postPackage: {
          ...state.postPackage,
          data: null,
          loading: false,
          error: action.payload,
        },
      }
    case actionTypes.DELETE_PACKAGE_REQUEST:
      return {
        ...state,
        deletePackage: {
          ...state.deletePackage,
          data: null,
          loading: true,
          error: null,
        },
      }
    case actionTypes.DELETE_PACKAGE_SUCCESS:
      return {
        ...state,
        deletePackage: {
          ...state.deletePackage,
          data: action.payload,
          loading: false,
          error: null,
        },
      }
    case actionTypes.DELETE_PACKAGE_FAILURE:
      return {
        ...state,
        deletePackage: {
          ...state.deletePackage,
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
    case actionTypes.MESSAGE_GET_REQUEST:
      return {
        ...state,
        getMessage: {
          ...state.getMessage,
          data: null,
          loading: true,
          error: null,
        },
      }
    case actionTypes.MESSAGE_GET_SUCCESS:
      return {
        ...state,
        getMessage: {
          ...state.getMessage,
          data: action.payload,
          loading: false,
          error: null,
        },
      }
    case actionTypes.MESSAGE_GET_FAILURE:
      return {
        ...state,
        getMessage: {
          ...state.getMessage,
          data: null,
          loading: false,
          error: action.payload,
        },
      }
    case actionTypes.MESSAGE_POST_REQUEST:
      return {
        ...state,
        postMessage: {
          ...state.postMessage,
          data: null,
          loading: true,
          error: null,
        },
      }
    case actionTypes.MESSAGE_POST_SUCCESS:
      return {
        ...state,
        postMessage: {
          ...state.postMessage,
          data: action.payload,
          loading: false,
          error: null,
        },
      }
    case actionTypes.MESSAGE_POST_FAILURE:
      return {
        ...state,
        postMessage: {
          ...state.postMessage,
          data: null,
          loading: false,
          error: action.payload,
        },
      }
    case actionTypes.MESSAGE_CLEAN_REQUEST:
      return {
        ...state,
        postCleanMessage: {
          ...state.postCleanMessage,
          data: null,
          loading: true,
          error: null,
        },
      }
    case actionTypes.MESSAGE_CLEAN_SUCCESS:
      return {
        ...state,
        postCleanMessage: {
          ...state.postCleanMessage,
          data: action.payload,
          loading: false,
          error: null,
        },
      }
    case actionTypes.MESSAGE_CLEAN_FAILURE:
      return {
        ...state,
        postCleanMessage: {
          ...state.postCleanMessage,
          data: null,
          loading: false,
          error: action.payload,
        },
      }
    case actionTypes.GET_USERS_REQUEST:
      return {
        ...state,
        getUsers: {
          ...state.getUsers,
          data: null,
          loading: true,
          error: null,
        },
      }
    case actionTypes.GET_USERS_SUCCESS:
      return {
        ...state,
        getUsers: {
          ...state.getUsers,
          data: action.payload,
          loading: false,
          error: null,
        },
      }
    case actionTypes.GET_USERS_FAILURE:
      return {
        ...state,
        getUsers: {
          ...state.getUsers,
          data: null,
          loading: false,
          error: action.payload,
        },
      }
    case actionTypes.UPDATE_ORDER_REQUEST:
      return {
        ...state,
        updateOrder: {
          ...state.updateOrder,
          data: null,
          loading: true,
          error: null,
        },
      }
    case actionTypes.UPDATE_ORDER_SUCCESS:
      return {
        ...state,
        updateOrder: {
          ...state.updateOrder,
          data: action.payload,
          loading: false,
          error: null,
        },
      }
    case actionTypes.UPDATE_ORDER_FAILURE:
      return {
        ...state,
        updateOrder: {
          ...state.updateOrder,
          data: null,
          loading: false,
          error: action.payload,
        },
      }
    case actionTypes.GET_STATIC_DATA_REQUEST:
      return {
        ...state,
        getStaticData: {
          ...state.getStaticData,
          data: null,
          loading: true,
          error: null,
        },
      }
    case actionTypes.GET_STATIC_DATA_SUCCESS:
      return {
        ...state,
        getStaticData: {
          ...state.getStaticData,
          data: action.payload,
          loading: false,
          error: null,
        },
      }
    case actionTypes.GET_STATIC_DATA_FAILURE:
      return {
        ...state,
        getStaticData: {
          ...state.getStaticData,
          data: null,
          loading: false,
          error: action.payload,
        },
      }
    case actionTypes.GET_SALES_REQUEST:
      return {
        ...state,
        getStaticAdminData: {
          ...state.getStaticAdminData,
          data: null,
          loading: true,
          error: null,
        },
      }
    case actionTypes.GET_SALES_SUCCESS:
      return {
        ...state,
        getStaticAdminData: {
          ...state.getStaticAdminData,
          data: action.payload,
          loading: false,
          error: null,
        },
      }
    case actionTypes.GET_SALES_FAILURE:
      return {
        ...state,
        getStaticAdminData: {
          ...state.getStaticAdminData,
          data: null,
          loading: false,
          error: action.payload,
        },
      }
    case actionTypes.CLEANUP_SNACKBAR:
      return {
        ...state,
        postDelete: {
          data: null,
          loading: false,
          error: null,
        },
        postMessage: {
          data: null,
          loading: false,
          error: null,
        },
        updateOrder: {
          data: null,
          loading: false,
          error: null,
        },
      }
    default:
      return state
  }
}


export default globalDataReducers
