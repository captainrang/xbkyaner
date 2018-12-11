import styled from 'styled-components';
import logo from '../../assets/images/logo.png';

export const HeaderWrapper = styled.div`
  position: relative;
  height: 64px;
  border-bottom: 1px solid #ededed;
  box-shadow: 0 0px 10px 0px #ddd;
  background: #fff;
`
export const Logo = styled.a`
  position: absolute;
  top: 0;
  left: 30px;
  width: 160px;
  height: 64px;
  display: block;
  background: url(${logo}) no-repeat center center;
  background-size: contain;
  `
export const SearchWrapper = styled.div`
  position: absolute;
  right: 220px;
  top: 15px;
`
export const MenuWrapper = styled.div`
  position: absolute;
  left: 200px;
`
export const ButtonWrapper = styled.div`
  position: absolute;
  right: 30px;
  top: 15px;
`
