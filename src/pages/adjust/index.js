import React, { Component } from 'react';
import QueryCondition from './queryCondition';
import QueryResult from './queryResult';
import CommonLayout from '../commonLayout';
import { QueryWrapper } from './style';

class Adjust extends Component {
  render(){
    return(
      <CommonLayout>
        <QueryWrapper>
          <QueryCondition />
        </QueryWrapper>
        <QueryWrapper>
          <QueryResult />
        </QueryWrapper>
      </CommonLayout>
     
    );
  }
}

export default Adjust;