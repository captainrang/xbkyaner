import React, { Component } from 'react';
import { httpAjax, serviceURL } from '../../util/httpAjax';
import CommonLayout from '../commonLayout';
import { Row, Col} from 'antd'
import Tree from '../../components/tree';
import { TreeWrapper } from './style';
import { types } from '../../statics/universityType';

const leftLayout = {xs: 24, sm:24, md: 24,lg: 24, xl: 6, xxl: 6};
const rightLayout = {xs: 24, sm:24, md: 24,lg: 24, xl: 18, xxl: 18};

class UniversityQuery extends Component {

  componentDidMount(){
    httpAjax("get",serviceURL,).then((data) => {

    });
  }

  render(){
    return(
      <CommonLayout>
        <Row>
          <Col {...leftLayout}>
            <TreeWrapper>
              <Tree data={types}/>
            </TreeWrapper>
          </Col>
          <Col {...rightLayout}></Col>
        </Row>
      </CommonLayout>
    );
  }
}

export default UniversityQuery;