import request from '../utils/request';

// 用户展示
export let showdata = () => {
    return request.get('/user/user');
}