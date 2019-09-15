import { observable, action } from 'mobx';
import {deleteExam} from '../../service/deleteExam';

class DeleteExam {
    @action async deleteExam(): Promise<any> {
        //console.log(params,"params")
        let result: any = await deleteExam()
        //console.log(result,"jiekoi")
        return result
    }
}
export default DeleteExam 