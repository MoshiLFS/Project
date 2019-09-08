// import Home from '../views/home/index.tsx';
// import Login from "../views/login/index.tsx";
// import Rank from '../views/home/question_management/rank';
// import Add from '../views/home/question_management/add';
// import Check from '../views/home/question_management/check';
// const routes = [
//     {path: '/login', compoennt: Login} ,
//     {path: '/home', compoennt: Home, children: [
//         {path: '/home/rank', compoennt: Rank},
//         {path: '/home/add', compoennt: Add},
//         {path: '/home/check', compoennt: Check},
//     ]},
//     {path: '/', redirect: '/login'}
// ]
// export default routes;

import Home from '../views/home';
import Login from "../views/login";
//试题管理
import Rank from '../views/home/question_management/rank';
import Add from '../views/home/question_management/add';
import Check from '../views/home/question_management/check';
//教室管理
import Classroom from '../views/home/classroom/classroom';
import StudentRoom from '../views/home/classroom/student_management';
import ClassroomManagement from '../views/home/classroom/classroom_management';
const routes = [
    {
        component: Login,
        path: '/login'
    }, {
        children: [
            {component: Add,path: '/home/add',},
            {component: Rank,path: '/home/rank',},
            {component: Check, path: '/home/check',},

            {component: Classroom, path: '/home/classroom'},
            {component: StudentRoom, path: '/home/studentRoom'},
            {component: ClassroomManagement, path: '/home/classroom_management'},
        ],
        component: Home,
        path: '/home'
    },
    {
        path: '/', redirect: '/login'
    }
]
export default routes;
