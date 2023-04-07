import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import categoryReducers from './categoryReducers'
import authReducers from './authReducers'
import socialMediaListReducers from './socialMediaReducers'
import locationDataReducers from './locationDataReducers'
import educationDataReducers from './educationReducers'
import userDataReducers from './userDataReducers'
import languagesListReducers from './languagesReducers'
import experienceDataReducers from './experienceReducers'
import skillsInterestsDataReducers from './skillsInterestsReducers'
import lessonsDataReducers from './lessonsReducers'
import masterReducers from './masterReducers'
import feedbackReducers from './feedbackReducers'
import galleryReducers from './galleryReducers'
import subscriptionReducers from './subscriptionReducers'
import globalDataReducers from './globalReducers'
import paymentReducers from './paymentReducers'

const appReducer = combineReducers({
  routerState: routerReducer,
  categoryState: categoryReducers,
  authState: authReducers,
  socialMediaListState: socialMediaListReducers,
  languagesListState: languagesListReducers,
  locationDataState: locationDataReducers,
  educationDataState: educationDataReducers,
  experienceDataState: experienceDataReducers,
  lessonsDataState: lessonsDataReducers,
  skillsInterestsDataState: skillsInterestsDataReducers,
  userDataState: userDataReducers,
  masterState: masterReducers,
  feedbackState: feedbackReducers,
  galleryState: galleryReducers,
  subscriptionState: subscriptionReducers,
  globalState: globalDataReducers,
  paymentState: paymentReducers,
})

const rootReducer = (state, action) => {
  if (action.type === 'AUTH_LOGOUT_USER') {
    return appReducer(undefined, action)
  }
  return appReducer(state, action)
}

export default rootReducer
