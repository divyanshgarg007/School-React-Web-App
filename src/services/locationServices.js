import apiInstance from '../config/api/axios'

// export const getLocation = async() => {
//   let config = {
//     headers: {
//       'Content-Type': 'application/json',
//       'accept': 'application/json',
//     },
//   }
//   const response = await apiInstance.get('user/version-details', config)
//   return response
// }


export const postLocation = async(payload) => {
  let config = {
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json',
    },
  }
  const response = await apiInstance.post('user/location', {...payload, long: payload.lng, lat: payload.lat}, config)
  return response
}
