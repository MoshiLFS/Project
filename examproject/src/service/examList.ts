import request from '../utils/request';

export let examList = () => {
  return request.get('/exam/exam');
}