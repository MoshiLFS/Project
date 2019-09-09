//引入子模块
import User from "./modules/user";
import Question from "./modules/question";
import getQuestion from "./modules/getQuestionsType";
import addUser from "./modules/adduser";
import Showdata from "./modules/showdata";
//实例化模块

const user = new User();
const question = new Question();
const getQuestionsType = new getQuestion();
const adduser = new addUser();
const showdata = new Showdata();

export default {
    user,
    question,
    getQuestionsType,
    adduser,
    showdata
}