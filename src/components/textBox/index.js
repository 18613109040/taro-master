import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AtInput } from "taro-ui";
import PropTypes from "prop-types";

import "./index.scss";

class TextBox extends Component {
  static propTypes = {
    onChangeValue: PropTypes.func,
    data: PropTypes.object,
    preview: PropTypes.bool
  };

  static defaultProps = {
    data: {
      name: '',
      description: ''
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
    const { name, description } = this.props.data;
    console.dir(preview)
    return (
      <View>
        {
          preview?(
            <View >www</View>
          ):(
            <View>
              <AtInput
                title='标题'
                type="text"
                placeholder='请输入您的姓名'
                value={name}
                onChange={(value)=>{this.handleChange('name',value)}}
              />
              <AtInput
                title='提示信息'
                type="text"
                placeholder='请输入提示信息'
                value={description}
                onChange={(value)=>{this.handleChange('description',value)}}
              />
            </View>
          )
        }
      </View>
    );
  }
}

export default TextBox;
