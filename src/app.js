import '@tarojs/async-await';
import Taro, { Component } from '@tarojs/taro';
import { Provider } from '@tarojs/redux';
import Home from './pages/home';
import dva from './utils/dva';
import models from './models';
import './styles/base.scss';
const dvaApp = dva.createApp({
  initialState: {},
  models: models,
});
const store = dvaApp.getStore();

class App extends Component {
  config = {
    pages: [
      'pages/create/index',
      'pages/home/index',
      'pages/products/index',
      'pages/account/index',
      'pages/detail/index'
    ],
    window: {
      backgroundTextStyle: 'dark',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'Taro Demo',
      navigationBarTextStyle: 'black',
      // navigationStyle: "custom"
    },
    tabBar: {
      list: [
        {
          pagePath: 'pages/home/index',
          text: '首页',
          iconPath: './images/tab/home.png',
          selectedIconPath: './images/tab/home-active.png',
        },
        {
          pagePath: 'pages/products/index',
          text: '发现',
          iconPath: './images/tab/find.png',
          selectedIconPath: './images/tab/find-active.png',
        },
        {
          pagePath: 'pages/account/index',
          text: '我的',
          iconPath: './images/tab/account.png',
          selectedIconPath: './images/tab/account-active.png',
        },
      ],
      color: '#333',
      selectedColor: '#333',
      backgroundColor: '#fff',
      borderStyle: 'white',
    },
  };

  componentDidMount() {}

  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}

Taro.render(<App />, document.getElementById('app'));
