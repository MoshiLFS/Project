import request from '../utils/request';
// 用户展示
export let getUserdisplay = (url:string,params: object)=>{
    // console.log(url,'url--service',params,'params---service')
    return request.get(url, {params});
}
// 获取试题
export let getQuestion = (params: object)=>{
    return request.get('/exam/questions/condition', {params});
}
// 试题分类数据
export let getTestion = (params: object)=>{
    return request.get('/exam/getQuestionsType', {params});
}
// 教室管理
    // 教室号 的数据
export let getRoom = (params: object)=>{
    return request.get('/manger/room', {params});
}
    // 课程名 的数据
export let getcourse=(params:object)=>{
    return request.get('/exam/subject',{params})
}
// 
// 试题分类
    // 添加类型
export let addTestLei = (params: object)=>{
    // console.log(params,'params---添加类型')
    return request.get('/exam/insertQuestionsType', {params:params});
}
// 班级管理 班级名
export let getClasses = (params: object)=>{
    return request.get('/manger/grade', {params});
}
// 添加班级接口
export let addClassEs=(obj: object)=>{
    // console.log(obj,'obj---添加班级接口') 
    return request.post('/manger/grade',obj)
}  
// 更改（修改）班级 接口
export let upClassEs=(obj:object)=>{
    // console.log(obj,'obj---修改班级接口') 
    return request.put('/manger/grade/update',obj)
}
//删除班级 接口 removeClassEs
export let removeClassEs=(obj: object)=>{
    // console.log(obj,'obj---删除班级接口') 
    return request.delete('/manger/grade/delete',{data:obj})
}   
// 添加教室接口
export let addRoom=(obj: object)=>{
    // console.log(obj,'obj---添加班级接口') 
    return request.post('/manger/room',obj)
}  
// 删除教室
export let removeRoom=(params: object)=>{
    // console.log(params,'id---删除教室接口') 
    return request.delete('/manger/room/delete',{data:params})
}  
// 获取学生管理 数据
export let getStudy=(params:object)=>{
    return request.get('/manger/student')
}
// 删除 指定项学生的 数据
export let removeStudy=(id:any)=>{
    // console.log({data:id},'{data:obj}')
    return request.delete(`/manger/student/${id}`,{data:id})
}
// 待批班级数据
export let getWaitclass=(params:object)=>{
    return request.get('/manger/grade')
}
// /exam/student/t27znv-gu7azm-qpq9ai-laaf9m
// /exam/student?grade_id=m6z5oe-dmv9j-rf3y1u-h7rpju
export let getJuandetail=(id:any)=>{
    return request.get(`/exam/student`,{params:{grade_id:id}})
}
// ============================================================
//获取课程
export let getSubjectLxt= (params:object)=>{
    return request.get("/exam/subject",{params});
}
//获取试题类型
export let getQuestionType = (params:object)=>{
    return request.get("/exam/getQuestionsType",{params})
}
//获取考试类型
export let examType = (params:object)=>{
    return request.get("/exam/examType",{params})
}
//添加试题接口
export let addQuestions=(params:any)=>{
    return request.post("/exam/questions",params)
}