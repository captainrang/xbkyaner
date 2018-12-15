import React, { Component } from 'react';
import { GlobalStyle } from './style.js';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import * as component from './router';
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'antd/dist/antd.css';

const universityQueryURL = '/uq';
const adjustURL = '/adjust';

class App extends Component {
  render() {
    return (
      <LocaleProvider locale={zh_CN}>
        <Provider store={store}>
          <GlobalStyle />
            <BrowserRouter>
              <Switch>
                <Route path={universityQueryURL}  component={component.UniversityQuery}/>
                <Route path={adjustURL}  component={component.Adjust}/>
                <Redirect path='/' to='/adjust'/>
              </Switch>
            </BrowserRouter>
        </Provider>
      </LocaleProvider>
    );
  }
}

export default App;
