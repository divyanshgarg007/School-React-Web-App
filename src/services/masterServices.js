/* eslint-disable max-len */
import apiInstance from '../config/api/axios'

export const getTeacher = async(payload) => {
  let config = {
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json',
    },
  }

  const response = await apiInstance.get(`student-teacher-live-details/${payload}`, config, payload)
  return response
}

export const postTeacher = async(payload) => {
  let config = {
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json',
    },
  }
  const response = await apiInstance.post('publish', payload, config)
  return response
}

export const getDetails = async() => {
  let config = {
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json',
    },
  }
  const response = await apiInstance.get('user/version-details', config)
  return response
}

export const getTeachersSummary = async(payload) => {
  let response
  let config = {
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json',
    },
  }
  if (payload) {
    // response = await apiInstance.get(`teacher-details-list?category=${payload.toString()}`, config)
    response = await apiInstance.get(`teacher-details-list?${payload}`, config)
  }
  // else {
  //   response = await apiInstance.get('teacher-details-list', config)
  // }
  return response
}

export const getTeachersFinalData = async(payload) => {
  let config = {
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json',
    },
  }
  const response = await apiInstance.get(`admin/teacher-details/${payload}`, config)
  return response
}

export const getTeachersCardList = async() => {
  let config = {
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json',
    },
  }
  const response = await apiInstance.get('subcategory-list-with-teacher-count', config)
  return response
}

export const postProfileClick = async(payload) => {
  let config = {
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json',
    },
  }
  const response = await apiInstance.post('update-teacher-profile-views', payload, config)
  return response
}

export const postAccountStatus = async(payload) => {
  let config = {
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json',
    },
  }
  const response = await apiInstance.post('teacher-status', payload, config)
  return response
}
