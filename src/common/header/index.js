import React from 'react';
import { connect } from 'react-redux';
import { Menu, Icon, Button, Input, Modal } from 'antd';
import { HeaderWrapper, Logo, MenuWrapper, ButtonWrapper, SearchWrapper } from './style';
import { menuStyle, buttonStyle, searchStyle } from './antd.style';
import { actionCreators } from './store';
import Login from '../login';

const Search = Input.Search;

const Header = (props) => {
  return (
    <HeaderWrapper>
      <Logo/>
      <MenuWrapper>
        <Menu
          style={menuStyle}
          onClick={props.handleClick}
          selectedKeys={[props.current]}
          mode="horizontal"
        >
          <Menu.Item key="home">
            <Icon type="home" />首页
          </Menu.Item>
          <Menu.Item key="search">
            <Icon type="file-search" />高校查询
          </Menu.Item>
          <Menu.Item key="app">
            <Icon type="exception" />学科评估（学硕）
          </Menu.Item>
          <Menu.Item key="alipay">
            <Icon type="exception" />专业评估（专硕）
          </Menu.Item>
        </Menu>
      </MenuWrapper>
      <SearchWrapper>
        <Search
          placeholder="搜索点什么"
          style={searchStyle}
        />
      </SearchWrapper>
      <ButtonWrapper>
        <Button type="primary" style={buttonStyle}>注册</Button>
        <Button onClick={props.showLoginModal}>登录</Button>
      </ButtonWrapper>
      {/*登陆弹框*/}
      <Modal 
        visible={props.loginVisible}
        width={400}
        footer={null}
        onCancel={props.handleCancel}
        >
        <Login/>
      </Modal>
    </HeaderWrapper>
  )
}

const mapStateTpProps = (state) => {
  return {
    current: state.get('header').get('current'),
    loginVisible: state.get('header').get('loginVisible'),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: function(e){
      const action = actionCreators.setCurrent(e.key);
      dispatch(action);
    },
    showLoginModal: function(){
      const action = actionCreators.showLoginModal();
      dispatch(action);
    },
    handleCancel: function(){
      const action = actionCreators.hideLoginModal();
      dispatch(action);
    }
  }
}

export default connect(mapStateTpProps, mapDispatchToProps)(Header);