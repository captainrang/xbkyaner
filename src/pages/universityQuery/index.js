import React, { Component } from 'react';
import { httpAjax, serviceURL } from '../../util/httpAjax';
import CommonLayout from '../commonLayout';

class UniversityQuery extends Component {

  componentDidMount(){
    httpAjax("get",serviceURL,).then((data) => {

    });
  }

  render(){
    return(
      <CommonLayout>test</CommonLayout>
    );
  }
}

export default UniversityQuery;