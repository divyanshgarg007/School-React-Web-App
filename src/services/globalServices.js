/* eslint-disable radix */
import apiInstance from '../config/api/axios'

export const getList = async() => {
  let config = {
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json',
    },
  }
  const response = await apiInstance.get('static-services/101', config)
  return response
}

export const postDelete = async(payload) => {
  let config = {
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json',
    },
  }
  const response = await apiInstance.post(`delete-user-data/${payload.data_type}/${payload.version_id}`, payload, config)
  return response
}

export const getMessage = async() => {
  let config = {
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json',
    },
  }
  const response = await apiInstance.get('contact-us', config)
  return response
}

export const postMessage = async(payload) => {
  let config = {
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json',
    },
  }
  const response = await apiInstance.post('contact-us', payload, config)
  return response
}

export const postCleanMessage = async(payload) => {
  let config = {
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json',
    },
  }
  const response = await apiInstance.post('contact-us/read', payload, config)
  return response
}

export const postPackage = async(payload) => {
  let config = {
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json',
    },
  }
  const response = await apiInstance.post('admin/add-package', payload, config)
  return response
}

export const deletePackage = async(payload) => {
  let config = {
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json',
    },
  }
  const response = await apiInstance.delete(`admin/delete-package/${payload.package_id}`, payload, config)
  return response
}

export const updatePackage = async(payload) => {
  let config = {
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json',
    },
  }
  const response = await apiInstance.post('admin/update-package', payload, config)
  return response
}

export const getCustomers = async(payload) => {
  let response
  let config = {
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json',
    },
  }
  if (payload) {
    response = await apiInstance.get(`admin/customer-list?from=${payload.start}&to=${payload.end}`, config)
  } else {
    response = await apiInstance.get('admin/customer-list', config)
  }
  return response
}

export const updateOrder = async(payload, type) => {
  let config = {
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json',
    },
  }
  const response = await apiInstance.post(`update-order/${type}`, payload, config)
  return response
}


export const deleteUser = async(payload) => {
  let config = {
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json',
    },
  }
  const response = await apiInstance.post('user/delete-user', payload, config)
  return response
}

export const getStaticData = async(payload) => {
  let config = {
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json',
    },
  }
  const response = await apiInstance.get(`teacher-dashboard/${payload}`, config)
  return response
}


export const getStaticAdminData = async(payload) => {
  let config = {
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json',
    },
  }
  const response = await apiInstance.get('admin/all-sales', config)
  return response
}
