import axios from 'axios'

const apiInstance = axios.create({
  baseURL: 'https://devapi.academbee.com/api/',
})


apiInstance.interceptors.request.use((config) => {
  let token
  if (localStorage.getItem('adminToken')) {
    token = JSON.parse(localStorage.getItem('adminToken'))
  } else {
    token = JSON.parse(localStorage.getItem('token'))
  }
  config.headers.Authorization = token ? `Bearer ${token}` : ''
  config.headers.lang = localStorage.getItem('lang') !== null ? localStorage.getItem('lang') : 'EN'
  localStorage.setItem('lang', config.headers.lang)
  return config
})


// Add a response interceptor
apiInstance.interceptors.response.use((response) => {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response
}, (error) => {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error)
})

export default apiInstance
