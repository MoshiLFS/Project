import * as React from 'react';
import * as ReactDOM from 'react-dom';

// 引入全局样式
import './index.css';
// 引入antd样式
import 'antd/dist/antd.css';
// 引入mobx实例
import { Provider } from 'mobx-react';
import store from './store';
// 引入配置路由
import RouterView from './router/RouterViews';
import routes from './router/router';
import { BrowserRouter } from 'react-router-dom';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';

import guard,{ filterView } from './utils/permission';
const history = createBrowserHistory();

//const myRoutes = filterView(routes, store.user.viewAuthority);
ReactDOM.render(
  <Provider {...store}>
    {/* <Router history={history}>
      <RouterView routes={myRoutes} />
    </Router> */}
    <BrowserRouter>
      <RouterView routes={routes.routes}/>
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root') as HTMLElement
);
//guard(history)