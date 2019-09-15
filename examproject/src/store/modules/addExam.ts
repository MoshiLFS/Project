import { observable, action } from 'mobx';
import {addExam} from '../../service/addExam';

class AddExam {
    @action async addExam(params:any): Promise<any> {
        //console.log(params,"params")
        let result: any = await addExam(params)
        //console.log(result,"jiekoi")
        return result
    }
}
export default AddExam