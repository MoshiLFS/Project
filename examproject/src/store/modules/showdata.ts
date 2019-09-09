import { observable, action } from 'mobx'
import { showdata } from '../../service/index'

class SelfData {
    // 按条件获取试题
    @action async showdata(): Promise<any> {
        let result: any = await showdata();
        return result;
        console.log('question...', result);
    }
}

export default SelfData;