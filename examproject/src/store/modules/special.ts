import { observable, action } from 'mobx'
import { special } from '../../service/index'

class Special {
    // 按条件获取试题
    @action async special(): Promise<any> {
        let result: any = await special();
        return result;
        console.log('question...', result);
    }
}

export default Special;