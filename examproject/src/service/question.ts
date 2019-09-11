import request from '../utils/request';

// 获取试题
export let getQuestion = () => {
    return request.get('/exam/questions/new');
}

export let getAllClass = () => {
    return request.post('/manger/grade');
}

export let addQuestion = () => {
    return request.get('/exam/questions');
}

export let getAllClassName = () => {
    return request.post('/manger/room');
}

export let getAllStudent = () => {
    return request.put('/manger/student/edit');
}

