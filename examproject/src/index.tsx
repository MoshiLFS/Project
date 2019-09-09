import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//引入mobx实例
import { Provider } from "mobx-react";
import store from "./store/index";
import './index.css';

ReactDOM.render(
  <Provider {...store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
