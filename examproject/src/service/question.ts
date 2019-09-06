import request from '../utils/request';

// 获取试题
export let getQuestion = () => {
    return request.get('/exam/questions/new');
}