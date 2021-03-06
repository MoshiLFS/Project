import Home from '../views/home/index.tsx';
import Login from "../views/login/index.tsx";
import Rank from '../views/home/rank/index.tsx';
import Add from '../views/home/add/index.tsx';
import Check from '../views/home/check/index.tsx';
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
            }
        ],
        component: Home,
        path: '/home'
    }
]
export default routes;
