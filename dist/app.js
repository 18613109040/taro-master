"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require("./npm/@tarojs/async-await/index.js");

var _index = require("./npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("./npm/@tarojs/redux/index.js");

var _dva = require("./utils/dva.js");

var _dva2 = _interopRequireDefault(_dva);

var _index4 = require("./models/index.js");

var _index5 = _interopRequireDefault(_index4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var dvaApp = _dva2.default.createApp({
  initialState: {},
  models: _index5.default
});
var store = dvaApp.getStore();

(0, _index3.setStore)(store);

var _App = function (_BaseComponent) {
  _inherits(_App, _BaseComponent);

  function _App() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, _App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _App.__proto__ || Object.getPrototypeOf(_App)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      pages: ['pages/template/index', 'pages/home/index', 'pages/products/index', 'pages/account/index', 'pages/detail/index'],
      window: {
        backgroundTextStyle: 'dark',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'Taro Demo',
        navigationBarTextStyle: 'black'
        // navigationStyle: "custom"

        // tabBar: {
        //   list: [
        //     {
        //       pagePath: 'pages/home/index',
        //       text: '首页',
        //       iconPath: './images/tab/home.png',
        //       selectedIconPath: './images/tab/home-active.png',
        //     },
        //     {
        //       pagePath: 'pages/products/index',
        //       text: '发现',
        //       iconPath: './images/tab/find.png',
        //       selectedIconPath: './images/tab/find-active.png',
        //     },
        //     {
        //       pagePath: 'pages/account/index',
        //       text: '我的',
        //       iconPath: './images/tab/account.png',
        //       selectedIconPath: './images/tab/account-active.png',
        //     },
        //   ],
        //   color: '#333',
        //   selectedColor: '#333',
        //   backgroundColor: '#fff',
        //   borderStyle: 'white',
        // },
      } }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_App, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "_createData",
    value: function _createData() {}
  }]);

  return _App;
}(_index.Component);

exports.default = _App;

App(require('./npm/@tarojs/taro-weapp/index.js').default.createApp(_App));
_index2.default.initPxTransform({
  "designWidth": 750,
  "deviceRatio": {
    "640": 1.17,
    "750": 1,
    "828": 0.905
  }
});