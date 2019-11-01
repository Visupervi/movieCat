//入口地址
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from '../service/registerServiceWorker';
import App from "./pages/App"
ReactDOM.render(
  <App/>,
  document.getElementById("app")
);
registerServiceWorker();