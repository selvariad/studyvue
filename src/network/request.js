import axios from 'axios';
export function request(config) {
  const Home = axios.create({
    baseURL: 'http://106.54.54.237:8000/api/mn/',
    timeout: 5000
  })
  Home.interceptors.request.use(config => {
    return config
  },
    err => {
      console.log(err);
    })
  Home.interceptors.response.use(res => {
    console.log(res);
    return res
  }, err => {
    console.log(err);
  })
  return Home(config)

}