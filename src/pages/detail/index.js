import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { AtNavBar } from 'taro-ui'
import { connect } from '@tarojs/redux';
import './index.scss';

@connect(({}) => ({

}))
class Detail extends Component {
  config = {
    navigationBarTitleText: '详情',
  };

  componentDidMount = () => {


  };

  //分享
  onShareAppMessage() {

  }

  // 小程序上拉加载
  onReachBottom() {

  }
  render() {
    return (
      <View className="detail">
      </View>
    );
  }
}

export default Detail;
