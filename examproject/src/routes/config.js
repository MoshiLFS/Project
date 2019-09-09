
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
// import Pageadd from '../views/home/pageadd/index.tsx';
// import Show from '../views/home/show/index.tsx';
// import Special from '../views/home/special/index.tsx';
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

            // {component: Pageadd, path: '/home/pageadd'},
            // {component: Show, path: '/home/show'},
            // {component: Special, path: '/home/special'},
        ],
        component: Home,
        path: '/home'
    },
    {
        path: '/', redirect: '/login'
    }
]
export default routes;
