import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { Form, Row, Col, Input, Checkbox, Button  } from 'antd';
import ProviceSelector from '../../components/proviceSelector';
import { adjustQueryItemLayout, adjustQueryRowLayout } from '../../util/responsivelayout';
import { httpAjax, serviceURL } from '../../util/httpAjax';
import { adjust } from '../../util/serviceAPI';
import { colStyle } from './antd.style';

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
                  <ProviceSelector />
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
            <Button type='primary' onClick={this.handleClick}>查询</Button>
          </Col>
        </Row>
      </Form>
    );
  }
  
  handleClick(e){
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values);
        if(!values.yx) delete values.yx;
        if(!values.zy) delete values.zy;
        if(!values.sf) delete values.sf;
        if(!values.yxsx) {delete values.yxsx}else{};
        this.props.getAdjustData(values);
      }
    });
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
        const action = actionCreators.getAdjustData({data: res.data, loading: false});
        dispatch(action);
      });
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(queryCondition));