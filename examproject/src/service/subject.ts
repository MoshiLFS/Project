import request from '../utils/request';

export let getSubject = () => {
    return request.get('/exam/subject');
}