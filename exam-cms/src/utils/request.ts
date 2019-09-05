<<<<<<< HEAD
import axios from 'axios';
import {AxiosResponse} from 'axios/index';
import {message} from 'antd';
import {getToken} from './index';
// import {HttpInfo} from '../types/index'
=======
import axios from "axios";
import { AxiosResponse } from "axios/index";
import { HttpInfo } from '../types/index'
>>>>>>> 104cb61350cce7648cddf7b8d9c2d731bcce00a8


const instance = axios.create({
    baseURL: 'http://169.254.32.138:7001',
    timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
});

// 请求拦截器
instance.interceptors.request.use((config) => {
    // Do something before request is sent
    return config;
}, (error) => {
    // Do something with request error
    return Promise.reject(error);
}
);

// 响应拦截器
instance.interceptors.response.use((response: AxiosResponse<any>) => {
    // Do something with response data
<<<<<<< HEAD
    // console.log('response...', response);
    if (response.status !== 200){
      message.error(response.statusText);
    }
    return response.data;
  },  (error) =>{
    // console.log('error...', error.response);
    if (error.response.status && error.response.status !== 200){
      message.error(error.response.statusText);
    }else{
      message.error(error.response);
    }
=======
    return response.data;
}, (error) => {
>>>>>>> 104cb61350cce7648cddf7b8d9c2d731bcce00a8
    // Do something with response error
    return Promise.reject(error);
}
);

export default instance;