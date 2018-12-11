import React, { Component } from 'react';
import { connect } from 'react-redux';
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
  }, {
    title: '专业名称',
    dataIndex: 'zymc',
    key: 'zymc',
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
    render: (text, record, index) => {
      return <span>{moment(text).format('YYYY-MM-DD')}</span>;
    }
  }];

  render(){
    const { loading, dataSource } = this.props;
    const pagination={
      showQuickJumper: true,
      pageSize:20,
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

  }
}

const mapStateToProps = (state) => {
  const adjust = state.get('adjust');
  return {
    loading: adjust.get('loading'),
    dataSource: adjust.get('adjustData'),
    total: adjust.get("total"),
    params: adjust.get("params"),
  }
}

export default connect(mapStateToProps)(QueryResult);