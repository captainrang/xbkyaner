import React, { Component } from 'react';
import { GlobalStyle } from './style.js';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import * as component from './router';
import 'antd/dist/antd.css';

const loginPath = '/login';
const mainPath = '/index'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle />
        <BrowserRouter>
          <Switch>
            <Route path={loginPath}  component={component.Login}/>
            <Route path={mainPath}  component={component.Main}/>
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
