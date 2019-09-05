// 一级路由
import Login from '../views/login';
import Main from '../views/main';
import OneView from '../views/main/childrenViews/oneView';
import TwoView from '../views/main/childrenViews/twoView';
import ThreeView from '../views/main/childrenViews/threeView'

// 二级路由
// import Content from '../components/Content';

export default {
    routes: [{
        path: '/main',
        component: Main,
        children: [{
            path: '/main/oneView',
            component: OneView
        },{
            path: '/main/twoView',
            component: TwoView
        },{
            path: '/main/threeView',
            component: ThreeView
        },{
            path : '/main',
            redirect : '/main/oneView'
        }]
    },{
        path: '/login',
        component: Login
    },{
        path : '/',
        redirect : '/login'
    }]
}