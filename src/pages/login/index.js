import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Icon, Input, Button } from 'antd';
import { LoginWrapper, LoginBox, Logo, RegisterWrapper } from './style';
import { loginBtnStyle } from './antd.style';

const FormItem = Form.Item;

class Login extends Component {

  render(){
    const { getFieldDecorator } = this.props.form;
    return(
      <LoginWrapper>
        <LoginBox>
          <Logo href='/index'/>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: '请输入用户名!' }],
              })(
                <Input 
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                  placeholder="用户名" 
                  size="large"
                />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入密码!' }],
              })(
                <Input 
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                  type="password" 
                  placeholder="密码" 
                  size="large"
                />
              )}
            </FormItem>
            <Button type="primary" htmlType="submit" size="large" style={loginBtnStyle}>
                登陆
            </Button>
            <RegisterWrapper>
              <Link to='/register'>还没密码?立即注册 </Link>
            </RegisterWrapper>
          </Form>
        </LoginBox>
      </LoginWrapper>
    )
  }
}

export default Form.create()(Login);;