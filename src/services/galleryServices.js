import apiInstance from '../config/api/axios'

export const getCoverImage = async() => {
  let config = {
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json',
    },
  }
  const response = await apiInstance.get('user/version-details', config)
  return response
}

//https://devapi.didaktoras.com/api/gallery/cover-image

export const postCoverImage = async(payload) => {
  const formData = new FormData()
  formData.append('cover_image', payload)
  const response = await apiInstance.post('gallery/cover-image', formData)
  return response
}


export const getImageGallery = async() => {
  let config = {
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json',
    },
  }
  const response = await apiInstance.get('user/version-details', config)
  return response
}

// https://devapi.didaktoras.com/api/gallery/gallery-image

export const postImageGallery = async(payload) => {
  const formData = new FormData()
  Array.from(payload).forEach((item) => {
    formData.append('media[]', item)
  })
  const response = await apiInstance.post('gallery/gallery-image', formData)
  return response
}


export const getVideoLink = async() => {
  let config = {
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json',
    },
  }
  const response = await apiInstance.get('user/version-details', config)
  return response
}

// https://devapi.didaktoras.com/api/gallery/gallery-video

export const postVideoLink = async(payload) => {
  let config = {
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json',
    },
  }
  const response = await apiInstance.post('gallery/gallery-video', payload, config)
  return response
}
