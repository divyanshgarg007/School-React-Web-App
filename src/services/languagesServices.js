import apiInstance from '../config/api/axios'

// export const getLanguagesList = async() => {
//   let config = {
//     headers: {
//       'Content-Type': 'application/json',
//       'accept': 'application/json',
//     },
//   }
//   const response = await apiInstance.get('user/version-details', config)
//   return response
// }

export const postLanguagesList = async(payload) => {
  let config = {
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json',
    },
  }
  const response = await apiInstance.post('user/language', payload, config)
  return response
}
