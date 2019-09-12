//引入子模块
import User from "./modules/user";
import Question from "./modules/question";
import getQuestion from "./modules/getQuestionsType";
import addUser from "./modules/adduser";
import Showdata from "./modules/showdata";
import Special from "./modules/special";
//添加试题类型;
import addType from "./modules/addtype";
//实例化模块

const user = new User();
const question = new Question();
const getQuestionsType = new getQuestion();
const adduser = new addUser();
const showdata = new Showdata();
const special = new Special();
//添加试题类型;
const addtype =new addType();

export default {
    user,
    question,
    getQuestionsType,
    adduser,
    showdata,
    special,
    addtype
}