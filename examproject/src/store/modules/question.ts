import {observable, action} from 'mobx'
import {getQuestion} from '../../service/index'

class Question{
    // 按条件获取试题
    @action async getQuestion(): Promise<any>{
        let result: any = await getQuestion();
        return result;
        console.log('question...', result);
    }
}

export default Question;