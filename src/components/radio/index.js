import Taro, { Component } from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import { AtInput, AtImagePicker } from "taro-ui";
import PropTypes from "prop-types";
import "./index.scss";

class Radio extends Component {
  static propTypes = {
    onChangeValue: PropTypes.func,
    onChangePayImagePicker: PropTypes.func,
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
  handleChange = value => {
    if (this.props.onChangeValue) {
      const { data } = this.props;
      this.props.onChangeValue(Object.assign(data,{description: value}));
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
                onChange={this.handleChange}
              />
              {
                options.map((item, index) => (
                  <AtInput
                    key={`option_${index}`}
                    title={`选项${values[index]}`}
                    type="text"
                    value={item.value}
                    placeholder="请输入选项内容"
                    onChange={this.handleChange}
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

export default Radio;
