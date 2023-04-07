export function getToken(key) {
  return JSON.parse(localStorage.getItem(key))
}

export function setToken(key, value) {
  return localStorage.setItem(key, JSON.stringify(value))
}

export function removeToken(key) {
  return localStorage.removeItem(key)
}

export function setEmailId(key, value) {
  return localStorage.setItem(key, JSON.stringify(value))
}

export function getEmailId(key) {
  return JSON.parse(localStorage.getItem(key))
}

export function removeEmailId(key) {
  return localStorage.removeItem(key)
}


export function setPublishStatus(key, value) {
  return localStorage.setItem(key, JSON.stringify(value))
}

export function getPublishStatus(key) {
  return JSON.parse(localStorage.getItem(key))
}

export function removePublishStatus(key) {
  return localStorage.removeItem(key)
}

