import Taro, { Component } from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import { AtInput, AtImagePicker } from "taro-ui";
import PropTypes from "prop-types";
import "./index.scss";

class Pay extends Component {
  static propTypes = {
    onChangeValue: PropTypes.func,
    onChangePayImagePicker: PropTypes.func,
    data: PropTypes.object,
    preview: PropTypes.bool
  };

  static defaultProps = {
    data: {
      description: '',
      payImg: '',
      formType: 'pay',
      formIndex: 1,
    },
    preview:false
  };
  constructor() {
    super(...arguments);

  }
  handleChange = value => {
    if (this.props.onChangeValue) {
      const { data } = this.props;
      this.props.onChangeValue(Object.assign(data,{description: value}));
    }
  }
  changePayImagePicker = (files) =>{
    if (this.props.onChangePayImagePicker) {
      const { data } = this.props;
      this.props.onChangePayImagePicker(Object.assign(data,{payImg: files.length>0?files[0].url:''}))
    }
  }
  render() {
    const { preview } = this.props;
    const { description, payImg, title } = this.props.data;
    const files = payImg?[{url:payImg}]:[]
    return (
      <View>
        {
          preview?(
            <View className="preview">
              <Text className="title">{title}</Text>
              <View className="pay-image">
                <Image className='image' src='payImg'></Image>
                <Text className='description'>{description}</Text>
              </View>
            </View>):(
            <View className="pay">
            <AtInput
              title="输入框"
              type="text"
              value={description}
              placeholder="测试输入框"
              onChange={this.handleChange}
            />
            <View className="container">
              <Text className="title">上传图片</Text>
              <AtImagePicker
                className="textarea"
                showAddBtn={files.length < 1}
                files={files}
                onChange={this.changePayImagePicker}
              />
            </View>
          </View>
          )
        }
      </View>
    )
  }
}

export default Pay;
