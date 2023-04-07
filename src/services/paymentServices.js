import apiInstance from '../config/api/axios'

export const postPayment = async(payload) => {
  let config = {
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json',
    },
  }
  const response = await apiInstance.post('order-request', payload, config)
  return response
}


export const postConfirmPayment = async(payload) => {
  let config = {
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json',
    },
  }
  const response = await apiInstance.post('order', payload, config)
  return response
}


export const postConfirmOrder = async(payload) => {
  let config = {
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json',
    },
  }
  const response = await apiInstance.post('confirm-order', payload, config)
  return response
}


export const getBillingList = async() => {
  let config = {
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json',
    },
  }
  const response = await apiInstance.get('invoice-list', config)
  return response
}


export const postCancelSubscription = async(payload) => {
  let config = {
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json',
    },
  }
  const response = await apiInstance.post('subscription/cancel', payload, config)
  return response
}

export const postRenewSubscription = async(payload) => {
  let config = {
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json',
    },
  }
  const response = await apiInstance.post('subscription/resume', payload, config)
  return response
}

export const getCardDetails = async() => {
  let config = {
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json',
    },
  }
  //https://devapi.academbee.com/api/payment/card-details
  const response = await apiInstance.get('payment/card-details', config)
  return response
}
