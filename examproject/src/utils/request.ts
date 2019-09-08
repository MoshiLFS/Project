import axios from "axios";
import { AxiosResponse } from "axios/index";
import { HttpInfo } from '../types/index';
import { getToken } from './index';
import { message } from 'antd'


const instance = axios.create({
    baseURL: 'http://192.168.43.16:7001',
    timeout: 1000,
    headers: { 'authorization': getToken() }
    // headers: {'X-Custom-Header': 'foobar'}
});
// console.log(getToken())
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
    if (response.status !== 200) {
        message.error(response.statusText)
    }
    return response.data;
}, (error) => {
    // Do something with response error
        // if (error.response.status && error.response.status !== 200) {
        //     message.error(error.response.statusText)
        // }
    return Promise.reject(error);
}
);

export default instance;