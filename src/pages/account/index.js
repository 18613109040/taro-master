import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.scss';

@connect(({loading }) => ({

}))
class Account extends Component {
  config = {
    navigationBarTitleText: '我的',
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
      <View className="home-page">
        <Text>我的</Text>
      </View>
    );
  }
}

export default Account;
