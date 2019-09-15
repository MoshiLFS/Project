import { observable, action } from 'mobx';
import { login, getUserInfo, getViewAuthority } from '../../service/index';
import { setToken, removeToken } from '../../utils/index';
import { HttpInfo, HttpType, LoginForm } from '../../types/index';


// 获取本地存储的用户信息
let account = {};

if (window.localStorage.getItem('account')) {
  account = JSON.parse(window.localStorage.getItem('account') + '');
}
class User {
  @observable isLogin: boolean = false;
  @observable account: any = account;
  @observable userInfo: any = [];
  @observable viewAuthority: object[] = []

  // 登陆逻辑
  @action async login(form: any): Promise<any> {
    let result: any = await login(form);
    console.log('result...', result);
    if (result.code === 1) {
      // 1.判断是否记住用户名和密码
      if (form.remember) {
        window.localStorage.setItem('account', JSON.stringify(form));
      } else {
        window.localStorage.removeItem('account');
      }

      // 2.判断是否七天免登录
      if (form.autoLogin) {
        setToken(result.token);
      }
    }
    return result;
  }

  // 退出登陆
  @action async logout(): Promise<any> {
    removeToken();
  }
  //用户信息
  @action async getUserInfo(): Promise<any> {
    let userInfo: any = await getUserInfo();
    // console.log('userInfo...', userInfo);
    this.userInfo = userInfo.data;
    //this.getViewAuthority();
  }
  // 获取用户信息
  @action async getUserInfoFn(): Promise<any> {
    let userInfo: any = await getUserInfo();
    return userInfo;
  }
  //用户权限
  @action async getViewAuthority(): Promise<any> {
    let viewAuthority: any = await getViewAuthority();
    // console.log('viewAuthority...', viewAuthority);
    this.viewAuthority = viewAuthority.data;
  }
}

export default User;