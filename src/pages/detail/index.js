import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { AtNavBar } from 'taro-ui'
import { connect } from '@tarojs/redux';
import './index.scss';

@connect(({}) => ({

}))
class Index extends Component {
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
      <View className="home-page">
      <AtNavBar
        color='#000'
        title='NavBar 导航栏示例'
        leftText='返回'
        rightFirstIconType='bullet-list'
        rightSecondIconType='user'
      />
       <Text >详情</Text>
      </View>
    );
  }
}

export default Index;
