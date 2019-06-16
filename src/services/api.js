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
