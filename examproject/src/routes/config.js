// import * as React from 'react';
// import * as Home from "../views/home";
// const routes=[
//     {
//         path: "/",
//         redirect: "/home"
//     },
//     {
//         component: Home,
//         path: "/home" 
//     }
// ]

// export default routes;

import Home from '../views/home/index.tsx';
import Login from "../views/login/index.tsx";

import Rank from '../views/home/rank/index.tsx';

const routes = [
    {
        component: Login,
        path: '/login'
    }, {
        children: [
            {
                component: Rank,
                path: '/home/rank',
            }
        ],
        component: Home,
        path: '/home'
    }
]
export default routes;
