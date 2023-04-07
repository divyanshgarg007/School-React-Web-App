import apiInstance from '../config/api/axios'

// export const getSocialMediaList = async() => {
//   let config = {
//     headers: {
//       'Content-Type': 'application/json',
//       'accept': 'application/json',
//     },
//   }
//   const response = await apiInstance.get('user/version-details', config)
//   return response
// }

export const postSocialMediaList = async(payload) => {
  let config = {
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json',
    },
  }
  const response = await apiInstance.post('user/social-media', payload, config)
  return response
}
