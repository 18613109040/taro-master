import Taro, { Component } from '@tarojs/taro';
import { View, Image, Text } from '@tarojs/components';
import { AtGrid, AtTabs, AtTabsPane, AtAvatar } from 'taro-ui'
import { connect } from '@tarojs/redux';
import './index.scss';

@connect(({}) => ({

}))
class Index extends Component {
  config = {
    navigationBarTitleText: '首页',
  };
  constructor () {
    super(...arguments)
    this.state = {
      current: 0
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
  nativeTest(){
    Taro.navigateTo({
      url: '/pages/detail/index'
    })
  }
  toTemplate(){
    Taro.navigateTo({
      url: '/pages/template/index'
    })
  }
  render() {
    const { current } = this.state;
    return (
      <View className="home-page">
        <View>
          <Text className='man-title'>选择模板</Text>
        </View>
        <View>
          <Text className='sub-title'>请从下方选择模板创建一个主题</Text>
        </View>
        <AtGrid
          className="home-grid"
          columnNum={4}
          hasBorder={false}
          data={[
            {
              image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
              value: '租车'
            },
            {
              image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
              value: '问卷调查'
            },
            {
              image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
              value: '集合签到'
            },
            {
              image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
              value: '新品首发'
            }]}
        />
        <View className='mo-ban' onClick={this.toTemplate}>
          <View className='redios'></View>
          <View className='content'>
            <View><Text className='title'>自定义模板</Text></View>
            <View><Text className='sub'>使用自定义模板创建主题</Text></View>
          </View>
          <View className='btn'>
            <Text>马上开始</Text>
          </View>
        </View>
        <View className='list'>
          <View className="title">
            <Text>我的主题</Text>
          </View>
          <View className='tabs'>
            <AtTabs
              current={current}
              tabList={[
                { title: '已创建' },
                { title: '已参与' }]
              }
            >
            </AtTabs>
          </View>
        </View>
        <View className='tab-panel'>
          <Text className='title'>珠江新城租车</Text>
          <View>
            <Text className='des'>外交部驻香港特区特派员公署负责人24日紧急约见德国驻香港代理总领事施密特施密特...</Text>
          </View>
          <View>
            <View className='avatar-row'>
              <AtAvatar className='avatar-image' circle image="" />
              <AtAvatar className='avatar-image' circle image="" />
              <AtAvatar className='avatar-image' circle image="" />
            </View>
            <View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default Index;
