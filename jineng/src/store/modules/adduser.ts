import { observable, action } from 'mobx'
import { adduser } from '../../service/index'

class addUser {
    // 按条件获取试题
    @action async adduser(params:any): Promise<any> {
        let result: any = await adduser(params);
        return result;
        console.log('question...', result);
    }
}

export default addUser;