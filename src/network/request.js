import axios from 'axios';
export function request(config) {
  const q = axios.create({
    baseURL: 'http://106.54.54.237:8000/api/mn/',
    timeout: 5000
  })
  q.interceptors.request.use(config => {
    return config
  },
    err => {
      console.log(err);
    })
  q.interceptors.response.use(res => {
    return res
  }, err => {
    console.log(err);
  })
  return q(config)

}