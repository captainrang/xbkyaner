import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { httpAjax, serviceURL, client_id, client_secret, grant_type } from '../../util/httpAjax';
import { login } from '../../util/serviceAPI';
import { Form, Icon, Input, Button } from 'antd';
import { LoginBox, Logo, Wrapper, LoginType, Register } from './style';
import { loginBtnStyle } from './antd.style';

const FormItem = Form.Item;

class Login extends Component {

  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render(){
    const { getFieldDecorator } = this.props.form;
    return(
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
          <Wrapper>
            <LoginType>手机号登录</LoginType>
            <Register>还没账号?立即注册 </Register>
          </Wrapper>
        </Form>
      </LoginBox>
    )
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { login } = this.props;
        const params = {
          client_id, client_secret, grant_type,
          username: values.userName,
          password: values.password
        }
        login(params);

      }
    });
  }
}

const mapStateToProps = (state) => {
  return {
  
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: function(params){
      httpAjax(login.oauth.method, serviceURL+login.oauth.url,{...params}).then(res => {

      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(Login));