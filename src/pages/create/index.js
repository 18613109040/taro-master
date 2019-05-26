import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { AtInput, AtImagePicker, AtButton, AtTextarea, AtProgress } from 'taro-ui'
import { connect } from '@tarojs/redux';
import './index.scss';

@connect(({loading }) => ({

}))
class Account extends Component {
  config = {
    navigationBarTitleText: '自定义',
  };
  constructor () {
    super(...arguments)
    this.state = {
      value: '',
      files:[]
    }
  }
  componentDidMount = () => {

  };

  //分享
  onShareAppMessage() {

  }

  // 小程序上拉加载
  onReachBottom() {

  }
  handleChange=(value)=>{
    console.dir(value)
  }
  onChangeImagePicker = (files) =>{
    console.dir(files)
    this.setState({
      files
    })
  }
  onFailImagePicker = () => {

  }
  onImageClick =() => {

  }
  render() {
    const { files } = this.state;
    return (
      <View>
        <View className="create-page">
          <View className="panel">
            <View className="sub-title">
              <Text className="title">创建主题</Text>
            </View>
            <AtInput
              name='value'
              title='主题'
              type='text'
              placeholder='请输入您的标题信息(必填)'
              value={this.state.value}
              onChange={this.handleChange.bind(this)}
            />
            <View className="container">
              <Text className="title">内容</Text>
              <AtTextarea
                className="textarea"
                value={this.state.value}
                onChange={this.handleChange.bind(this)}
                title='内容'
                placeholder='为主题添加详细的描述'
              />
            </View>
            <AtImagePicker
              multiple
              length={4}
              count={4}
              showAddBtn={files.length<4}
              files={files}
              onChange={this.onChangeImagePicker}
              onFail={this.onFailImagePicker}
              onImageClick={this.onImageClick}
            />
          </View>

          <View className="panel">
            <View className="sub-title">
              <Text className="title">参与申请</Text>
            </View>
            <AtInput
              name='value'
              title='参与人数'
              type='number'
              placeholder='请输入参与人数上限'
              value={this.state.value}
              onChange={this.handleChange.bind(this)}
            />
            <AtInput
              name='value'
              title='每人次数'
              type='number'
              placeholder='默认次数为1'
              value={this.state.value}
              onChange={this.handleChange.bind(this)}
            />
            <AtInput
              name='value'
              title='参与按钮'
              type='number'
              placeholder='请输入参与按钮名称'
              value={this.state.value}
              onChange={this.handleChange.bind(this)}
            />
          </View>

          <View className="panel">
            <View className="sub-title">
              <Text className="title">付费相关</Text>
            </View>
            <AtInput
              name='value'
              title='付费说明'
              type='text'
              placeholder='请输入付费说明信息'
              value={this.state.value}
              onChange={this.handleChange.bind(this)}
            />
            <View className="container">
              <Text className="title">收款码</Text>
              <AtImagePicker
                className="textarea"
                showAddBtn={files.length<1}
                files={files}
                onChange={this.onChangeImagePicker}
                onFail={this.onFailImagePicker}
                onImageClick={this.onImageClick}
              />
            </View>
          </View>

        </View>
        <View className="footer">
          <Text className="btn">预览</Text>
          <View></View>
          <Text className="btn">发布</Text>
        </View>
      </View>
    );
  }
}

export default Account;
