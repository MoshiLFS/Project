import { observable, action } from 'mobx';
import { getSubject } from '../../service/index';


class Subject {
    @action async getSubject(): Promise<any> {
        let result: any = await getSubject()
        //console.log(result)
        return result;
    }
}
export default Subject