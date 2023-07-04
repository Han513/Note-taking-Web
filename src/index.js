import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from "react-router-dom";
import 'antd/dist/antd.css';
import './index.css'
import { Provider } from 'react-redux'
import store from './connector/noteStore'
import { Redirect, Route, Switch } from "react-router-dom";
import App from './App';
ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route exact path='/tags/:id'>
          <App />
        </Route>
        <Route>
          <Redirect to='/tags/all' />
        </Route>
      </Switch>
    </HashRouter>
  </Provider>
  // </React.StrictMode>
  ,
  document.getElementById('root')
);

