import apiInstance from '../config/api/axios'

export const postSubscription = async(payload) => {
  let config = {
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json',
    },
  }
  const response = await apiInstance.post('payment-subscription', payload, config)
  return response
}
