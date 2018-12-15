import styled from 'styled-components';
import logo from '../../assets/images/logo.png';

export const LoginBox = styled.div`
  height: 380px;
  padding: 40px 24px;
  box-sizing: border-box;
  background:rgba(255,255,255,.5)
`
export const Logo = styled.a`
  display: block;
  width: 180px;
  height: 33px;
  margin: 10px auto 40px auto;
  background: url(${logo});
`
export const Wrapper = styled.div`
  width: 100%;
  margin-top: 16px;
`
export const LoginType = styled.a`
  display: block;
  float: left;
  text-align: left
`
export const Register = styled.a`
  display: block;
  float: right;
  text-align: right
`