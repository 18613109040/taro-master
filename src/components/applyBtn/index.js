import Taro, { Component } from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import { AtInput, AtImagePicker } from "taro-ui";
import PropTypes from "prop-types";

import "./index.scss";

class Pay extends Component {
  static propTypes = {
    onChangeValue: PropTypes.func,
    data: PropTypes.object,
    preview: PropTypes.bool
  };

  static defaultProps = {
    data: {
      count: '',
      perUser: '',
      formType: 'ApplyBtn',
      formIndex: 3,
      buttonText: ''
    },
    preview:false
  };
  constructor() {
    super(...arguments);
  }
  handleChange=(value, type)=>{
    if(this.props.onChangeValue){
      const { data } = this.props;
      data[type] = value
      this.props.onChangeValue({...data})
    }
  }
  render() {
    const { preview } = this.props;
    const { count, perUser, buttonText } = this.props.data;
    return (
      <View>
        {
          preview?(
            <View className='footer-btn'>
              <View className="footer-left">

              </View>
              <View className='btn'>{buttonText}</View>
            </View>
          ):(
            <View>
              <AtInput
                title='参与人数'
                type='number'
                placeholder='请输入参与人数上限'
                value={count}
                onChange={(value)=>{this.handleChange(value,'count')}}
              />
              <AtInput
                title='每人次数'
                type='number'
                placeholder='默认次数为1'
                value={perUser}
                onChange={(value)=>{this.handleChange(value,'perUser')}}
              />
              <AtInput
                title='参与按钮'
                type='number'
                placeholder='请输入参与按钮名称'
                value={buttonText}
                onChange={(value)=>{this.handleChange(value,'buttonText')}}
              />
            </View>
          )
        }
      </View>
    );
  }
}

export default Pay;
