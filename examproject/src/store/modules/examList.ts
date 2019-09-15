import { observable, action } from 'mobx';
import { examList } from '../../service/index';


class ExamList {
    @action async examList(): Promise<any> {
        let result: any = await examList()
        //console.log(result)
        return result;
    }
}
export default ExamList