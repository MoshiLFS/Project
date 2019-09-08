import Home from '../views/home/index.tsx';
import Login from "../views/login/index.tsx";
import Rank from '../views/home/rank/index.tsx';
import Add from '../views/home/add/index.tsx';
import Check from '../views/home/check/index.tsx';
import Pageadd from '../views/home/pageadd/index.tsx';
import Show from '../views/home/show/index.tsx';
import Exam from '../views/home/exam/index.tsx';
import List from '../views/home/list/index.tsx';
const routes = [
    {
        component: Login,
        path: '/login'
    }, {
        children: [
            {
                component: Add,
                path: '/home/add',
            },
            {
                component: Rank,
                path: '/home/rank',
            },
            {
                component: Check,
                path: '/home/check',
            },
            {
                component: Pageadd,
                path: '/home/pageadd',
            }, {
                component: Show,
                path: '/home/show',
            }, {
                component: Exam,
                path: '/home/exam',
            }, {
                component: List,
                path: '/home/list',
            }
        ],
        component: Home,
        path: '/home'
    }
]
export default routes;
