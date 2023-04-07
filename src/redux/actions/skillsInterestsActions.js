import * as skillsInterestsServices from '../../services/skillsInterestsServices'
import * as actionTypes from './actionsType'
import {getDetailsAction} from './masterActions'

// post skills interests list actions
const postSkillsInterestsListRequest = () => {
  return {
    type: actionTypes.SKILLSINTERESTS_POST_REQUEST,
  }
}

const postSkillsInterestsListSuccess = (data) => {
  return {
    type: actionTypes.SKILLSINTERESTS_POST_SUCCESS,
    payload: data,
  }
}

const postSkillsInterestsListFailure = (error) => {
  return {
    type: actionTypes.SKILLSINTERESTS_POST_FAILURE,
    payload: error,
  }
}

export const postSkillsInterestsListAction = (payload) =>
  async(dispatch) => {
    dispatch(postSkillsInterestsListRequest())
    try {
      const responseData = await skillsInterestsServices.postSkillsInterests(payload)
      if (responseData?.status === 200) {
        dispatch(postSkillsInterestsListSuccess(responseData?.data?.meta))
        dispatch(getDetailsAction())
      } else {
        dispatch(postSkillsInterestsListFailure(responseData.errors))
      }
    } catch (error) {
      dispatch(postSkillsInterestsListFailure(error?.response?.data))
    }
  }

