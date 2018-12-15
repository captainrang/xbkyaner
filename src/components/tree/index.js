import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import { ParentWrapper, Parent, PText, ChildWrapper, Child, CText } from './style';
import { iconStyle } from './antd.style';

class Tree extends Component {

   constructor(props){
    super(props);
    this.state = {
      bg: '#fff',
    }
  }

  render() {

    const { bg } = this.state;

    return (
      <Fragment>
        <ParentWrapper>
          <Parent>
            <Icon type="plus" style={iconStyle} />
            <PText>高校类型</PText>
            <Icon type="down" />
          </Parent>
        </ParentWrapper>
        <ChildWrapper>
          <Child onClick={this.handleChildClick} bg={bg}>
            <CText>高校类型</CText>
          </Child>
          <Child>
            <CText>高校类型</CText>
          </Child>
          <Child>
            <CText>高校类型</CText>
          </Child>
          <Child>
            <CText>高校类型</CText>
          </Child>
          <Child>
            <CText>高校类型</CText>
          </Child>
        </ChildWrapper>
      </Fragment>
    );
  }

  handleChildClick(){
    return function(){
      
    }
  }
}

Tree.propTypes = {
  ptitle: PropTypes.string,
  data: PropTypes.array
}

export default Tree;