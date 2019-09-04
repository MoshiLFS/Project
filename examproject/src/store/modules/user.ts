import {observable,action} from "mobx";
import { login } from '../../service/index'
import { HttpInfo, HttpType } from '../../types/index'

interface LoginForm {
   user_name: string,
   user_pwd: string
}


class User {
    @observable isLogin:boolean=false;

   @action async login(form:LoginForm): Promise<any> {
      let result: any = await login(form);
      console.log('result...', result);
      return result.code;
   }
}

export default User;