import styled from 'styled-components';
import logo from '../../assets/images/logo.png';
import loginBg from '../../statics/login_bg.jpg';

export const LoginWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: url(${loginBg})
`
export const LoginBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 450px;
  height: 400px;
  padding: 40px 50px;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  background:rgba(255,255,255,.5)
`
export const Logo = styled.a`
  display: block;
  width: 180px;
  height: 33px;
  margin: 20px auto 40px auto;
  background: url(${logo});
`
export const RegisterWrapper = styled.div`
  width: 100%;
  margin-top: 30px;
  text-align: right;
`