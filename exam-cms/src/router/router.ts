// 一级路由
import Login from '../views/login';
import Main from '../views/main';
import Home from '../views/home';

// 二级路由
// import Content from '../components/Content';
import Test from '../views/home/test';

export default {
    routes: [{
        path: '/main',
        component: Main,
        children: [{
            path: '/list/content',
            component: () => null
        }]
    }, {
        path: '/login',
        component: Login
    }, {
        path: '/home',
        component: Home,
        children: [
            {
                path: '/home/test',
                component: Test
            }
        ]
    }
    ]
}