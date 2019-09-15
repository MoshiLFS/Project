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
// import * as  React from 'react'


// let main = () => import("../views/main/index")
// let login = () => import("../views/login/index")
// let className = null
// let marking = null
// let question = null
// let text = null
// let user = null
// let addQuestion = null
// let showQuestion = null
// let typeQuestion = null
// let classRoom = null
// let classType = null
// let student = null
// let watingClass = null
// let addText = null
// let listText = null
// let addUser = null
// let showUser = null
// let showDetail = null
// let classMate = null
// let routes = [
//   {
//     component: login,
//     path: "/login"
//   },
//   {
//     children: [
//       {
//         children: [{
//           component: classRoom,
//           path: "/main/className/classRoom"
//         },
//         {
//           component: classType,
//           path: "/main/className/classType"
//         }, {
//           component: student,
//           path: "/main/className/student"
//         }],
//         component: className,
//         path: "/main/className"

//       }, {
//         children: [{
//           component: watingClass,
//           path: "/main/marking/watingClass"
//         }, {
//           component: classMate,
//           path: "/main/marking/classMate/:id"
//         }],
//         component: marking,
//         path: "/main/marking"

//       }, {
//         children: [
//           {
//             component: addQuestion,
//             view_id: "main-addQuestions9999",
//             path: "/main/question/addQuestion"
//           }
//           , {
//             component: showDetail,
//             path: "/main/question/detail/:id"
//           },
//           {
//             component: showQuestion,
//             view_id: "main-watchQuestions9999",
//             path: "/main/question/showQuestion"
//           }, {
//             component: typeQuestion,
//             view_id: "main-questionsType",
//             path: "/main/question/typeQuestion"
//           }
//         ],
//         component: question,
//         path: "/main/question"

//       },
//       {
//         children: [{
//           component: addText,
//           path: "/main/text/addText"
//         }, {
//           component: listText,
//           path: "/main/text/listText"
//         }],
//         component: text,
//         path: "/main/text"

//       }, {
//         children: [{
//           component: addUser,
//           path: "/main/user/addUser"
//         }, {
//           component: showUser,
//           path: "/main/user/showUser"
//         }],
//         component: user,
//         path: "/main/user"

//       }, {
//         from: "/main",
//         to: "/main/question"
//       }
//     ],
//     component: main,
//     path: "/main"
//   },
//    {
//     path: '/403',
//     component: () =><div>403</div>
//   }, {
//     path: '/404',
//     component: () =><div>404</div>
//   }, {
//     from: "/",
//     to: "/login"
//   }, {
//     from: '*',
//     to: '/404'
//   }
// ]
// export default routes