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

//获取全部教室号
export let getAllClass = () => {
    return request.get('/manger/room');
}
//获取全部班级名
export let getAllClassName = () => {
    return request.get('/manger/grade');
}