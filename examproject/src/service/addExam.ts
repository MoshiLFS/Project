import request from '../utils/request';

export let addExam = (params:object) => {
    return request.post('/exam/exam',params);
}