
import Home from '../views/home';
import Login from "../views/login";
//试题管理
import Rank from '../views/home/question_management/rank/index';
import Add from '../views/home/question_management/add/index';
import Check from '../views/home/question_management/check/index';
//教室管理
import Classroom from '../views/home/classroom/classroom';
import StudentRoom from '../views/home/classroom/student_management';
import ClassroomManagement from '../views/home/classroom/classroom_management';
import Pageadd from '../views/home/user_management/pageadd/index';
import Show from '../views/home/user_management/show';
// import Special from '../views/home/special/index.tsx';
//考试管理
import Addkaoshi from '../views/home/examination_management/exam'
import AddkaoshiList from '../views/home/examination_management/list'

//阅卷管理
import Special_class from '../views/home/special'

const routes = [
    {
        path: '/home',
        component: Home,
        children: [
            {
                title: '试题管理',
                children: [
                    {component: Add, path: '/home/add', title: '添加试题'},
                    {component: Rank, path: '/home/rank', title: '试题分类'},
                    {component: Check, path: '/home/check', title: '查看试题'},
                ]
            },
            {
                title: '添加用户',
                children: [
                    {component: Pageadd, path: '/home/pageadd', title: '添加用户'},
                    {component: Show, path: '/home/show', title: '用户展示'},
                ]
            },
            {
                title: '考试管理',
                children: [
                    {component: Addkaoshi, path: '/home/exam', title: '添加考试'},
                    {component: AddkaoshiList, path: '/home/list', title: '试卷列表'},
                ]
            },
            {
                title: '班级管理',
                children:[
                    {component: Classroom, path: '/home/classroom', title: '班级管理'},
                    {component: StudentRoom, path: '/home/studentRoom', title: '教室管理'},
                    {component: ClassroomManagement, path: '/home/classroom_management',title: '学生管理'},
                ]
            },
            {
                title: '阅卷管理',
                children:[
                    {component: Special_class, path: '/home/special_class',title: '特批班级'},
                ]
            },
            {
                path:'/home', redirecr: '/home/add',
            }
        ]
    },
    {
        path: '/login', component: Login,
    },
    { path: '/', redirect: '/login' }
]
export default routes;
