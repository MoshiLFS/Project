import request from '../utils/request';

export let getExam = () => {
    return request.get('/exam/questions/new');
}