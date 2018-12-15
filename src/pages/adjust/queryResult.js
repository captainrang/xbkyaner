import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { httpAjax, serviceURL } from '../../util/httpAjax';
import { adjust } from '../../util/serviceAPI';
import { Table } from 'antd';
import moment from 'moment';

class QueryResult extends Component {

  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  columns = [{
    title: '学校名称',
    dataIndex: 'yxmc',
    key: 'yxmc',
    render: (text) =>{
      return <span title={text}>{text.length>16?text.slice(0,15)+'...':text}</span>
    }
  }, {
    title: '专业名称',
    dataIndex: 'zymc',
    key: 'zymc',
    render: (text) =>{
      return <span title={text}>{text.length>16?text.slice(0,15)+'...':text}</span>
    }
  }, {
    title: '调剂信息标题',
    dataIndex: 'title',
    key: 'title',
    render: (text, record, index) => {
      return <a href="#" title={text}>{text.length>30?text.slice(0,30)+'...':text}</a>
    }
  }, {
    title: '发布时间',
    dataIndex: 'fbsj',
    key: 'fbsj',
    render: (text) => {
      return <span>{moment(text).format('YYYY-MM-DD')}</span>;
    }
  }];

  render(){
    const { loading, dataSource, current } = this.props;
    const pagination={
      showQuickJumper: true,
      pageSize:20,
      current:current,
      total: dataSource.total,
      onChange: this.handleChange
    }
    return(
      <Table
        loading={loading}
        columns={this.columns}
        dataSource={dataSource.list}
        pagination={pagination}
      />
    )
  }

  handleChange(page){
    const { getByPage, params } = this.props;
    getByPage(page, params);
  }
}

const mapStateToProps = (state) => {
  const adjust = state.get('adjust');
  return {
    loading: adjust.get('loading'),
    dataSource: adjust.get('adjustData'),
    total: adjust.get("total"),
    current: adjust.get("current"),
    params: adjust.get("queryParams"),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getByPage: function(page,params){
      httpAjax(adjust.get.method, serviceURL+adjust.get.url,{params:{...params,p: page}}).then((res)=>{
        const action = actionCreators.getAdjustData({data: res.data, loading: false, queryParams: params, current: page});
        dispatch(action);
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QueryResult);