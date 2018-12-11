import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { Select } from 'antd';
import { httpAjax, serviceURL } from '../../util/httpAjax';
import { province } from '../../util/serviceAPI';

const Option = Select.Option;

class ProvinceSelector extends Component {

  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    const { getProvince } = this.props;
    getProvince();
  }

  render(){
    const { provinceData, handleChange } = this.props;
    return (
      <Select
        showSearch
        placeholder="选择省份"
        optionFilterProp="children"
        onChange={this.handleChange}
        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
      >
        {this.renderOption(provinceData)}
      </Select>
    )
  }

  renderOption= (provinceData) => {
    return provinceData.map((item, index) => {
      return <Option value={item.province} key={index}>{item.province}</Option>
    });
  }

  handleChange(value){
    const { onChange } = this.props;
    onChange && onChange(value)
  }
}

const mapStateToProps = (state) => {
  return {
    provinceData: state.get('province').get("provinceData")
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getProvince: function(){
      httpAjax(province.get.method,serviceURL+province.get.url).then((res)=>{
        const action = actionCreators.getProvince(res.data);
        dispatch(action);
      });
    },
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProvinceSelector);