import apiInstance from '../config/api/axios'

export const getCategorySubCategory = async() => {
  let config = {
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json',
    },
  }
  const response = await apiInstance.get('admin/category-list', config)
  return response
}
export const getAdminCategorySubCategory = async() => {
  let config = {
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json',
    },
  }
  const response = await apiInstance.get('admin/admin-category-list', config)
  return response
}

export const postCategoryList = async(payload) => {
  let config = {
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json',
    },
  }
  const response = await apiInstance.post('admin/category', payload, config)
  return response
}

export const updateCategory = async(payload) => {
  let config = {
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json',
    },
  }
  const response = await apiInstance.post(`admin/category/${payload.id}`, payload, config)
  return response
}

export const postSubCategoryList = async(payload) => {
  let config = {
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json',
    },
  }
  const response = await apiInstance.post('admin/sub-category', payload, config)
  return response
}

export const updateSubcategory = async(payload) => {
  let config = {
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json',
    },
  }
  const response = await apiInstance.post(`admin/sub-category/${payload.sub_category_id}`, payload, config)
  return response
}

export const postCategoryPicture = async(payload) => {
  const formData = new FormData()
  formData.append('profile_image', payload)
  const response = await apiInstance.post('user/profile-image', formData)
  return response
}
