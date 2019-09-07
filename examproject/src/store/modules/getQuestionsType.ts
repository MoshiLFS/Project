import { observable, action } from 'mobx'
import { getQuestionsType } from '../../service/index'

class getQuestion {
    // 按条件获取试题
    @action async getQuestionsType(): Promise<any> {
        let result: any = await getQuestionsType();
        return result;
        console.log('question...', result);
    }
}

export default getQuestion;