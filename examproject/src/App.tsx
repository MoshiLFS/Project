
import * as React from 'react';
import './App.css';
//引入路由配置
import Router from "./routes/index";
//引入全局样式
import './index.css';
//引入antd样式
import 'antd/dist/antd.css';

function App() {
 return (
    <div>
        <Router/>
    </div>
  );
}

export default App;
