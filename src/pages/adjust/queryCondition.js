import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { Form, Row, Col, Input, Checkbox, Button  } from 'antd';
import ProviceSelector from '../../components/proviceSelector';
import { adjustQueryItemLayout, adjustQueryRowLayout } from '../../util/responsivelayout';
import { httpAjax, serviceURL } from '../../util/httpAjax';
import { adjust } from '../../util/serviceAPI';
import { colStyle, btnStyle } from './antd.style';

const FormItem = Form.Item;
const CheckboxGroup = Checkbox.Group;
const options = [
  {label: '双一流', value:'双一流'},
  {label: '985', value:'985'},
  {label: '211', value:'211'},
]

class queryCondition extends Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  componentDidMount(){
    const { getAdjustData } = this.props;
    getAdjustData();
  }

  render(){
    const { getFieldDecorator } = this.props.form;

    return(
      <Form>
        <Row gutter={16}>
          <Col {...adjustQueryRowLayout}>
            <FormItem label="高校名称" {...adjustQueryItemLayout} >
              {getFieldDecorator('yx', {
                
              })(
                <Input placeholder="请输入高校名称" />
              )}
            </FormItem>
          </Col>
          <Col {...adjustQueryRowLayout}>
            <FormItem label="专业名称" {...adjustQueryItemLayout}>
              {getFieldDecorator('zy', {
                
              })(
                <Input placeholder="请输入专业名称" />
              )}
            </FormItem>
          </Col>
          <Col {...adjustQueryRowLayout}>
            <FormItem label="所在省份" {...adjustQueryItemLayout}>
                {getFieldDecorator('sf', {
                  
                })(
                  <ProviceSelector OnRef={(selector) => { this.selector = selector }}/>
                )}
            </FormItem>
          </Col>
          <Col {...adjustQueryRowLayout}>
            <FormItem label="高校类型" {...adjustQueryItemLayout}>
                {getFieldDecorator('yxsx', {
                  
                })(
                  <CheckboxGroup
                    options={options}
                  />
                )}
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col style={colStyle}>
            <Button type='primary' onClick={this.handleClick} style={btnStyle}>查询</Button>
            <Button type='primary' ghost onClick={this.handleReset}>清空</Button>
          </Col>
        </Row>
      </Form>
    );
  }
  
  handleClick(e){
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        if(!values.yx) delete values.yx;
        if(!values.zy) delete values.zy;
        if(!values.sf) delete values.sf;
        if(!values.yxsx) {
          delete values.yxsx
        }else {
          values.yxsx = values.yxsx.join(',')
        };
        this.props.getAdjustData(values);
      }
    });
  }
  handleReset = () => {
    this.props.form.resetFields();
    this.selector.clear();
  }

}

const mapStateToProps = (state) => {
  return {
   
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAdjustData: function(params){
      httpAjax(adjust.get.method, serviceURL+adjust.get.url,{params}).then((res)=>{
        const action = actionCreators.getAdjustData({data: res.data, loading: false, queryParams: params, current:1});
        dispatch(action);
      });
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(queryCondition));