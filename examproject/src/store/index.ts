// 引入子模块
import User from './modules/user';
import Question from './modules/question';
import Exam from './modules/exam';
import Subject from './modules/subject';
import Addexam from './modules/addExam';
import TestType from './modules/testType';
import DeleteExam from './modules/deleteExam';
import ExamList from './modules/examList';

// 实例化模块
const user = new User();
const question = new Question();
const exam = new Exam();
const subject =new Subject();
const addExam =new Addexam();
const testType= new TestType();
const deleteExam= new DeleteExam();
const examList=new ExamList();

// setInterval(()=>{ 
//     user.isLogin = !user.isLogin;
//     // console.log('user...', user);
// }, 1000);

export default {
    user,
    question,
    exam,
    subject,
    addExam,
    testType,
    deleteExam,
    examList
}