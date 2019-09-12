import request from '../utils/request';

// 获取试题
export let addtype = (params: object) => {
    console.log(params,'params')
    return request.get('/exam/insertQuestionsType',{
        params: params
    });
}