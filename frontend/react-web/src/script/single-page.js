import '@babel/polyfill';
import 'whatwg-fetch';

import ReactDOM from 'react-dom';
import React from 'react';
import {
  Provider,
 } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';

import store from '~/store';

import Home from '~/component/page/Home';
import User from '~/component/page/User';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" children={<Home />} />
        <Route exact path="/user" children={<User />} />
      </Switch>
    </Router>
  </Provider>,
  document.querySelector('main#frontend-app'),
);
