import Taro, { Component } from '@tarojs/taro';
import { View, Image, Swiper, SwiperItem } from '@tarojs/components';

import { connect } from '@tarojs/redux';
import banner1 from '../../images/home/banner1.png'
import banner2 from '../../images/home/banner2.png'
import './index.scss';

@connect(({}) => ({

}))
class Index extends Component {
  config = {
    navigationBarTitleText: '首页',
  };

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
  render() {
    return (
      <View className="home-page">
        <Swiper indicatorColor='#999' indicatorActiveColor='#333'>
          <SwiperItem className='home-swiper'>
            <Image
              lazyLoad
              className="banner-image"
              src={banner1}
            />
          </SwiperItem>
          {/* <SwiperItem className='home-swiper'>
            <Image
              lazyLoad
              className="banner-image"
              src={banner2}
            />
          </SwiperItem> */}
        </Swiper>
      </View>
    );
  }
}

export default Index;
