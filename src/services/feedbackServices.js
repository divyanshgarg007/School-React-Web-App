import apiInstance from '../config/api/axios'

export const getFeedback = async() => {
  let config = {
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json',
    },
  }
  const response = await apiInstance.get('feedback', config)
  return response
}

export const postFeedback = async(payload) => {
  let config = {
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json',
    },
  }
  const response = await apiInstance.post('feedback', payload, config)
  return response
}
