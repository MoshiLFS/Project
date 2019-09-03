import Home from '../views/home/index.tsx';
import Login from "../views/login/login.tsx";


const routes = [
    {
    component: Login,
    path: '/login'
}, {
   
    component: Home,
    path: '/home'
}
]
export default routes