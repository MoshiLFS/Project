import {observable, action} from 'mobx'
import {getUserdisplay,getQuestion,getTestion,getSubjectLxt,getRoom,getcourse,getClasses,addTestLei,addClassEs,upClassEs,removeClassEs,addRoom,removeRoom,getStudy,removeStudy,getWaitclass,getJuandetail,getQuestionType,examType,addQuestions} from '../../service/index'
// console.log(getTestion,'getTestion')
class Question{
    // 用户展示
    @action async getUserdisplay(url:string,params:any):Promise<any>{
        // console.log(url,'url--store',params,'params---store')
        let data:any=await getUserdisplay(url,params)
        return data
    }
    // 按条件获取试题
    @action async getQuestion(params: any): Promise<any>{
        let result: any = await getQuestion(params);
        // console.log('question...', result);
        return result
    }
    // 试题分类数据
    @action async getTestion(params: any): Promise<any>{
        let result: any = await getTestion(params);
        // console.log('getTestion...', result);
        return result
    }
    // 班级管理
    @action async getClasses(params: any): Promise<any>{
        let result: any = await getClasses(params);
        // console.log('getClasses...', result);
        return result
    }
    // 教室管理   教室号
    @action async getRoom(params: any): Promise<any>{
        let result: any = await getRoom(params);
        // console.log('getRoom...', result);
        return result
    }
    // 课程名 的数据
    @action async getcourse(params:any):Promise<any>{
        let result:any=await getcourse(params);
        return result;
    }
// 试题分类
    // 添加类型
    @action async addTestLei(params: any): Promise<any>{
        let result: any = await addTestLei(params);
        // console.log('addTestLei...', result);
        return result
    }
    // 添加班级接口
    @action async addClassEs(params:any):Promise<any>{
        let result:any=await addClassEs(params);
        // console.log(result,'result')
        return result;
    }
    // 更改（修改）班级接口
    @action async upClassEs(params:any):Promise<any>{
        // console.log(params,'更改班级---params')
        let result:any=await upClassEs(params)
        return result;
    }
    // 删除班级接口
    @action async removeClassEs(params:any):Promise<any>{
        let result:any=await removeClassEs(params);
        // console.log(result,'result')
        return result;
    }
    // 添加教室接口
    @action async addRoom(params:any):Promise<any>{
        let result:any=await addRoom(params);
        // console.log(result,'result')
        return result;
    }
    // 删除教室
    @action async removeRoom(params:any):Promise<any>{
        let result:any=await removeRoom(params);
        // console.log(result,'result')
        return result;
    }
    // 获取学生管理 数据
    @action async getStudy(params:any):Promise<any>{
        let result:any=await getStudy(params);
        // console.log(result,'result')
        return result;
    }
    // 删除 指定项学生的数据
    @action async removeStudy(params:any):Promise<any>{
        let result:any=await removeStudy(params);
        return result;
    }
    // 待批班级 数据 getWaitclass
    @action async getWaitclass(params:any):Promise<any>{
        let result:any=await getWaitclass(params);
        // console.log(result,'result')
        return result;
    }
    // 待批班级 详情
    @action async getJuandetail(params:any):Promise<any>{
        let result:any=await getJuandetail(params);
        // console.log(result,'result')
        return result;
    }
// =========================================================
     //获取课程
     @action async getSubjectLxt(params: any): Promise<any> {
        let result: any = await getSubjectLxt(params);
        const { code, data, msg } = result;
        if (code === 1) {
            return result
        }else {
            return result
        }
    }
    //获取试题类型
    @action async questionType(params: any): Promise<any> {
        let result: any = await getQuestionType(params);
        const { code, data, msg } = result;
        if (code === 1) {
            return result
        }else {
            return result
        }
    }
     //获取考试类型
     @action async getType(params: any): Promise<any> {
        let result: any = await examType(params);
        const { code, data, msg } = result;
        if (code === 1) {
            return result
        }else {
            return result
        }
    }
    //添加试题接口
    @action async addQuestionsAction(params:any){
        let result=await addQuestions(params)
        return result
    }
}

export default Question;