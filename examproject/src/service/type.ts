import request from '../utils/request';

export let getType = () => {
    return request.get('/exam/examType');
}
