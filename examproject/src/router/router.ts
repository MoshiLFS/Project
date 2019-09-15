// 一级路由
import Login from '../views/login';
import Main from '../views/main';

// 二级路由

// 试题管理 路由
import Testclass from '../views/main/content/testmanage/testclass'
import Locktest from '../views/main/content/testmanage/locktest'
import Addtest from '../views/main/content/testmanage/addtest'
// 用户管理 路由
import Adduser from '../views/main/content/usermanage/adduser'
import Userdisplay from '../views/main/content/usermanage/userdisplay'
// 考试管理 路由
import Addexam from '../views/main/content/exammanage/addexam'
import Examlist from '../views/main/content/exammanage/examlist'
// addexam路由后的
import Testpaper from '../views/main/content/exammanage/testpaper'
// 班级管理 路由
import Classes from '../views/main/content/classsmanage/classes'
import Classroom from '../views/main/content/classsmanage/classroom'
import Study from '../views/main/content/classsmanage/study'
// 阅卷管理 路由
import Waitclass from '../views/main/content/markingmanage/waitclass'
//阅卷 详情
import Juandetail from '../views/main/content/markingmanage/waitclass/Juandetail'

export default {
    routes:[
        {
            path:"/main",
            component:Main,
            children:[
                {
                    path:"/main/testclass",
                    component:Testclass
                },{
                    path:"/main/locktest",
                    component:Locktest
                },{
                    path:"/main/addtest",
                    component:Addtest
                },{
                    path:"/main/adduser",
                    component:Adduser
                },{
                    path:"/main/userdisplay",
                    component:Userdisplay
                },{
                    path:"/main/addexam",
                    component:Addexam
                },{
                    path:"/main/examlist",
                    component:Examlist
                },{
                    path:"/main/classes",
                    component:Classes
                },{
                    path:"/main/classroom",
                    component:Classroom
                },{
                    path:"/main/study",
                    component:Study
                },{
                    path:"/main/waitclass",
                    component:Waitclass
                },{
                    path:"/main/testpaper",
                    component:Testpaper
                },{
                    path:'/main/Juandetail/:id',
                    component:Juandetail
                }
            ]
        },
        {
            path:"/login",
            component:Login
        }
    ]
}