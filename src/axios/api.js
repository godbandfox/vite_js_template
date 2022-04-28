import axios from '@/axios/http'

export const login = (params) => axios.get('/api/login', { params: params })
