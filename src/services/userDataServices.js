import apiInstance from '../config/api/axios'

export const postAboutMe = async(payload) => {
  let config = {
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json',
    },
  }
  const response = await apiInstance.post('user/about', payload, config)
  return response
}

export const postUserProfileData = async(payload) => {
  let config = {
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json',
    },
  }
  const response = await apiInstance.post('user/detail', payload, config)
  return response
}


// export const getProfilePicture = async() => {
//   let config = {
//     headers: {
//       'Content-Type': 'application/json',
//       'accept': 'application/json',
//     },
//   }
//   const response = await apiInstance.get('user/version-details', config)
//   return response
// }

// https://devapi.didaktoras.com/api/user/profile-image

export const postProfilePicture = async(payload) => {
  const formData = new FormData()
  formData.append('profile_image', payload)
  const response = await apiInstance.post('user/profile-image', formData)
  return response
}

