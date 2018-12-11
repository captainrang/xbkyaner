import React, { Component, Fragment } from 'react';
import Header from '../../common/header';
import Footer from '../../common/footer';
import { Content } from './style';

class CommonLayout extends Component {
  render(){
    return (
      <Fragment>
        <Header/>
          <Content>
            {this.props.children}
          </Content>
        <Footer/>
      </Fragment>
    )
  }
}

export default CommonLayout;

