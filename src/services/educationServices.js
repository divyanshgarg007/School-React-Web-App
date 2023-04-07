/* eslint-disable */
import apiInstance from '../config/api/axios'

// export const getEducation = async() => {
//   let config = {
//     headers: {
//       'Content-Type': 'application/json',
//       'accept': 'application/json',
//     },
//   }
//   const response = await apiInstance.get('user/version-details', config)
//   return response
// }

export const postEducation = async(payload) => {
  let config = {
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json',
    },
  }
  const response = await apiInstance.post('user/education', payload, config)
  return response
}
