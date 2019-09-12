import { observable, action } from 'mobx'
import { addtype } from '../../service/index'

class addType {
    // 按条件获取试题
    @action async addtype(params: any): Promise<any> {
        let result: any = await addtype(params);
        return result;
        console.log('question...', result);
    }
}

export default addType;