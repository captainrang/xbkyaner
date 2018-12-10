import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Menu, Icon, Button, Input } from 'antd';
import { HeaderWrapper, Logo, MenuWrapper, ButtonWrapper, SearchWrapper } from './style';
import { menuStyle, buttonStyle, searchStyle } from './antd.style';
import { actionCreators } from './store';

const Search = Input.Search;

const Header = (props) => {
  return (
    <HeaderWrapper>
      <Logo/>
      <SearchWrapper>
        <Search
          placeholder="搜索点什么"
          style={searchStyle}
        />
      </SearchWrapper>
      <MenuWrapper>
        <Menu
          style={menuStyle}
          onClick={props.handleClick}
          selectedKeys={[props.current]}
          mode="horizontal"
        >
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
      <ButtonWrapper>
        <Button type="primary" style={buttonStyle}>注册</Button>
        <Link to='/login'><Button>登录</Button></Link>
      </ButtonWrapper>
    </HeaderWrapper>
  )
}

const mapStateTpProps = (state) => {
  return {
    current: state.get('header').get('current')
  }
}

const mapDispachToProps = (dispach) => {
  return {
    handleClick: function(e){
      const action = actionCreators.setCurrent(e.key);
      dispach(action);
    }
  }
}

export default connect(mapStateTpProps, mapDispachToProps)(Header);