// import routes from "./config";
// import * as React from 'react';
// import {BrowserRouter} from "react-router-dom";
// import Routerview from "./routerview";

// class Router extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { };
//     }
//     render() {
//         return (
//             <BrowserRouter>  
//                 <Routerview routes={routes}/>
//             </BrowserRouter>
//         );
//     }
// }

// export default Router;
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import routes from './config'
import Routerview from './routerview'
export default function Router() {
    return (
        <BrowserRouter>
            <Routerview routes={routes}></Routerview>
        </BrowserRouter>
    )
}