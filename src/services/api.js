import axios from 'axios'
import { config } from '../config'

export const api = axios.create({
  baseURL: config.apiBaseUrl,
})

api.interceptors.request.use(request => {
  const newConfig = request
  if (!newConfig.headers.authorization) {
    newConfig.headers.authorization = `Bearer ${config.newsApiKey}`
  }
  return newConfig
})

api.interceptors.response.use(
  response => {
    localStorage.setItem('lastApiResponse', JSON.stringify(response))
    return response
  },
  error => {
    if (error.message === 'Network Error') {
      const storedApiResponse = localStorage.getItem('lastApiResponse')
      if (storedApiResponse) {
        return Promise.resolve(JSON.parse(storedApiResponse))
      }
    }
    return Promise.reject(error)
  }
)
