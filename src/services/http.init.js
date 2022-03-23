/**
 * HTTP request layer
 * if auth is required return patched axios instance(with access token in headers)
 * else return clear axios instance
 */

 import axios from 'axios'

 import { API_URL } from '../.env'
 import $store from '@/store/modules/auth'
 
 const instance = axios.create({
   baseURL:API_URL,
   timeout:1000
 })

 instance.interceptors.request.use(
   function(config){
      // 요청 성공 직전에 호출
      config.headers["Authorization"] = $store.state.accessToken;
      config.headers["Access-Control-Allow-Origin"] = "*";
      config.headers["Access-Control-Allow-Methods"] = "GET, POST, PATCH, PUT, DELETE, OPTIONS";
      config.headers["Access-Control-Allow-Headers"] = "Origin, Content-Type, X-Auth-Token";

      return config
   },
   function(error){
      //  요청 에러 직전 호출
      return Promise.reject(error)
   }
 )

 export default instance