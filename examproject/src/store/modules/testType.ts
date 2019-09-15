import { observable, action } from 'mobx';
import { getType } from '../../service/index';


class TestType {
    @action async getType(): Promise<any> {
        let result: any = await getType()
        //console.log(result)
        return result;
    }
}
export default TestType