import apiInstance from '../config/api/axios'

export const authLogin = async(payload) => {
  let config = {
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json',
    },
  }
  const response = await apiInstance.post('user/login', payload, config)
  return response
}

export const authSignup = async(payload) => {
  let config = {
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json',
    },
  }
  const response = await apiInstance.post('user/register', payload, config)
  return response
}

// reset password service
export const authResetPassword = async(payload) => {
  let config = {
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json',
    },
  }
  const response = await apiInstance.post('user/reset-password', payload, config)
  return response
}

// disable user service
export const disableUser = async(payload) => {
  let config = {
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json',
    },
  }
  // https://devapi.academbee.com/api/user/send-account-disable-mail
  const response = await apiInstance.post('user/send-account-disable-mail', payload, config)
  return response
}


// disable account service
export const disableAccountUser = async(payload) => {
  let config = {
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json',
    },
  }
  // https://devapi.academbee.com/api/user/account-disable
  const response = await apiInstance.post('user/account-disable', payload, config)
  return response
}

// enable user service
export const enableUser = async(payload) => {
  let config = {
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json',
    },
  }
  const response = await apiInstance.post('user/account-disable', payload, config)
  return response
}

// verify email

export const verifyEmail = async(payload) => {
  let config = {
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json',
    },
  }
  const response = await apiInstance.post('user/send-verification-email', payload, config)
  return response
}


export const sendOtp = async(payload) => {
  let config = {
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json',
    },
  }
  const response = await apiInstance.post('user/send-forgot-password-otp', payload, config)
  return response
}


export const updatePassword = async(payload) => {
  let config = {
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json',
    },
  }
  const response = await apiInstance.post('user/update-password', payload, config)
  return response
}
