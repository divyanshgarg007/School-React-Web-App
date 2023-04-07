import apiInstance from '../config/api/axios'

// export const getLessons = async() => {
//   let config = {
//     headers: {
//       'Content-Type': 'application/json',
//       'accept': 'application/json',
//     },
//   }
//   const response = await apiInstance.get('user/version-details', config)
//   return response
// }


export const postLessons = async(payload) => {
  let config = {
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json',
    },
  }
  const response = await apiInstance.post('user/lessons', payload, config)
  return response
}
