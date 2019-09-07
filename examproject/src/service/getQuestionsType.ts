import request from '../utils/request';

// 获取试题
export let getQuestionsType = () => {
    return request.get('/exam/getQuestionsType');
}