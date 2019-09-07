import request from '../utils/request';

// 获取试题
export let getQuestion = (params: object) => {
    console.log(params)//undefined
    return request.get('/exam/questions/condition', { params });
}

//添加试题
export let addQuestion = (params: any) => {
    return request.get('/exam/questions/new', { params });
}