import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://192.168.100.154:3333',
})

// baseURL: 'http://192.168.100.1:3333',
