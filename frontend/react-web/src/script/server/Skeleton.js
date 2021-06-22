import ReactDOM from 'react-dom';
import React from 'react';
import {
  Provider,
 } from 'react-redux';
import {
  StaticRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';

import store from '~/store';

import Home from '~/component/page/Home';
import User from '~/component/page/User';

class Skeleton extends React.Component {
  render() {
    return (
      <html className="no-js" lang="en">
        <head>
        <title>Koa Isomerism</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Development Page" />
        <meta name="viewport" content="width=device-width, inital-scale=1" />
        <script defer src="/static/server-render.bundle.cf735ba40c791f1c8905.js" />
        </head>
        <body>
          <main id="frontend-app">
            <Provider store={store}>
              <Router>
                <Switch location={{ pathname: this.props.pathname }}>
                  <Route exact path="/" children={<Home />} />
                  <Route exact path="/user" children={<User />} />
                </Switch>
              </Router>
            </Provider>
          </main>
        </body>
      </html>
    );
  }
}

export default Skeleton;
