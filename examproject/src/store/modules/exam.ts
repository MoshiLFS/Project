import { observable, action } from 'mobx';
import { getExam } from '../../service/index';


class Exam {
    @action async getExam(): Promise<any> {
        let result: any = await getExam()
        console.log(result)
        return result;
    }
}
export default Exam