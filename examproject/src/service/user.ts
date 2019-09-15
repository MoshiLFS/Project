import request from '../utils/request';

export let login = (params:object)=>{
    return request.post('/user/login',params)
}

//获取用户信息

export let getUserInfo = ()=>{
  return request.get('/user/userInfo')
}

//用户权限
export let getViewAuthority = ()=>{
  return request.get('/user/view_authority');
}
