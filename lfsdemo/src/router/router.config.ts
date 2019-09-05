import * as React from 'react'

import Login from '../views/login';
import Main from '../views/main'

export default [
    {path : '/login', component : Login },
    {path : '/main', component : Main},
    {path : '/', redirect: '/login'}
]