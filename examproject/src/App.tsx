import * as React from 'react';
import './App.css';
//引入路由配置
import Router from "./routes/index";
import { BrowserRouter } from "react-router-dom";
//引入全局样式
import './index.css';
//引入antd样式
import 'antd/dist/antd.css';

function App() {
 return (
    <div>
     <BrowserRouter>
       <Router />
     </BrowserRouter>
    </div>
  );
}

export default App;
