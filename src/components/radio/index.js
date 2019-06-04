import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AtInput } from "taro-ui";
import PropTypes from "prop-types";
import "./index.scss";

class CusRadio extends Component {
  static propTypes = {
    onChangeValue: PropTypes.func,
    data: PropTypes.object,
    preview: PropTypes.bool
  };

  static defaultProps = {
    data: {
      name: '',
      options: []
    },
    preview:false
  };
  constructor() {
    super(...arguments);
    this.state = {
      values: ['一','二','三','四','五','六','七','八','九']
    }
  }
  handleChange = (type, value, index) => {
    if (this.props.onChangeValue) {
      const { data } = this.props;
      if(type === 'name'){
        data[type] = value
        this.props.onChangeValue({...data});
      }else{
        data[type][index].value = value
        this.props.onChangeValue({...data});
      }
    }
  }
  render() {
    const { preview } = this.props;
    const { options, name } = this.props.data;
    const { values } = this.state;
    return (
      <View className='redio'>
        {
          preview?(
            <View className="preview">

            </View>):(
            <View className="pay">
              <AtInput
                title="标题"
                type="text"
                value={name}
                placeholder="请输入单选标题"
                onChange={(value)=>this.handleChange('name',value)}
              />
              {
                options.map((item, index) => (
                  <AtInput
                    key={`option_${index}`}
                    title={`选项${values[index]}`}
                    type="text"
                    value={item.value}
                    placeholder="请输入选项内容"
                    onChange={(value)=>this.handleChange('options',value, index)}
                  />
                ))
              }
            </View>
          )
        }
      </View>
    )
  }
}

export default CusRadio;
