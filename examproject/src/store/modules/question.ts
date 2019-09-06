import {observable, action} from 'mobx'
import {getQuestion , addQuestion} from '../../service/index'

class Question{
    // 按条件获取试题
    @action async getQuestion(params: any): Promise<any>{
        console.log(params)//undefined
        let result: any = await getQuestion(params);
        console.log('question...', result);
    }

    // 按条件添加试题
    @action async addQuestion(params: any): Promise<any>{
        console.log(params)//undefined
        let result2: any = await getQuestion(params);
        console.log('question2...', result2);
    }
}

export default Question;