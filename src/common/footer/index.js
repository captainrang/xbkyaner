import React, { Component } from 'react';
import { FooterWrapper } from './style';
const year = new Date().getFullYear();

class Footer extends Component {
  render(){
    return(
      <FooterWrapper>
        Copyright © {year} - 鄂ICP备17009230号-1, All Rights Reserved Powered By 小白考研
      </FooterWrapper>
    )
  }
}

export default Footer;