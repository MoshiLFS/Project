import request from '../utils/request';

// 获取试题
export let adduser = (params:object) => {
    return request.post('/user',params);
}