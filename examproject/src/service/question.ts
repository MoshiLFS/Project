import request from '../utils/request';

// 获取试题
<<<<<<< HEAD
export let getQuestion = (params: object) => {
    console.log(params)//undefined
    return request.get('/exam/questions/condition', { params });
}

//添加试题
export let addQuestion = (params: any) => {
    return request.get('/exam/questions/new', { params });
=======
export let getQuestion = () => {
    return request.get('/exam/questions/new');
>>>>>>> 6ebd4bb1571a63f79bfac9501e2e7659033756e6
}