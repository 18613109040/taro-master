"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dec, _class;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../npm/@tarojs/redux/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CustomTemplate = (_dec = (0, _index3.connect)(function (_ref) {
  var loading = _ref.loading,
      template = _ref.template;
  return {
    loading: loading,
    title: template.title,
    content: template.content,
    contentImgs: template.contentImgs,
    layouts: template.layouts,
    actionBar: template.actionBar
  };
}), _dec(_class = function (_BaseComponent) {
  _inherits(CustomTemplate, _BaseComponent);

  function CustomTemplate() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, CustomTemplate);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = CustomTemplate.__proto__ || Object.getPrototypeOf(CustomTemplate)).call.apply(_ref2, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "loopArray0", "loopArray1", "title", "content", "contentImgs", "layouts", "actionBar", "value", "files", "dispatch"], _this.config = {
      navigationBarTitleText: '自定义'
    }, _this.componentDidMount = function () {}, _this.handleChange = function (value) {
      console.dir(value);
    }, _this.onChangeImagePicker = function (files) {
      var dispatch = _this.props.dispatch;

      dispatch({
        type: 'template/setContentImgs',
        payload: files
      });
    }, _this.onFailImagePicker = function () {}, _this.onImageClick = function () {}, _this.onClickUp = function (data) {
      var dispatch = _this.props.dispatch;

      dispatch({
        type: 'template/moveUp',
        payload: data
      });
    }, _this.onClickDown = function (data) {
      var dispatch = _this.props.dispatch;

      dispatch({
        type: 'template/moveDown',
        payload: data
      });
    }, _this.onClickClose = function (data) {
      var dispatch = _this.props.dispatch;

      dispatch({
        type: 'template/remove',
        payload: data
      });
    }, _this.onChangePayImagePicker = function (data) {
      var dispatch = _this.props.dispatch;

      dispatch({
        type: 'template/changeData',
        payload: data
      });
    }, _this.onChangeValue = function (data) {
      var dispatch = _this.props.dispatch;

      dispatch({
        type: 'template/changeData',
        payload: data
      });
    }, _this.addCompent = function (item) {
      var dispatch = _this.props.dispatch;

      dispatch({
        type: 'template/addLayout',
        payload: item
      });
    }, _this.anonymousFunc0Array = [], _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CustomTemplate, [{
    key: "_constructor",
    value: function _constructor() {
      _get(CustomTemplate.prototype.__proto__ || Object.getPrototypeOf(CustomTemplate.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        value: '',
        files: []
      };
    }
  }, {
    key: "onShareAppMessage",


    //分享
    value: function onShareAppMessage() {}

    // 小程序上拉加载

  }, {
    key: "onReachBottom",
    value: function onReachBottom() {}
  }, {
    key: "_createData",
    value: function _createData() {
      var _this2 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      ;

      var _props = this.__props,
          layouts = _props.layouts,
          actionBar = _props.actionBar,
          title = _props.title,
          content = _props.content,
          contentImgs = _props.contentImgs;

      console.dir(contentImgs);
      var anonymousState__temp = contentImgs.length < 8;
      var loopArray0 = layouts.map(function (item, index) {
        item = {
          $original: (0, _index.internal_get_original)(item)
        };
        var $loopState__temp3 = "layout_" + index;
        var $loopState__temp5 = Object.assign(item.$original, { current: index });
        return {
          $loopState__temp3: $loopState__temp3,
          $loopState__temp5: $loopState__temp5,
          $original: item.$original
        };
      });
      var loopArray1 = actionBar.map(function (item, index) {
        item = {
          $original: (0, _index.internal_get_original)(item)
        };

        _this2.anonymousFunc0Array[index] = function () {
          _this2.addCompent(item.$original);
        };

        var $loopState__temp7 = "bar_" + index;
        return {
          $loopState__temp7: $loopState__temp7,
          $original: item.$original
        };
      });
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        loopArray0: loopArray0,
        loopArray1: loopArray1,
        title: title,
        content: content,
        contentImgs: contentImgs,
        layouts: layouts,
        actionBar: actionBar
      });
      return this.__state;
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(index, e) {
      ;
      this.anonymousFunc0Array[index] && this.anonymousFunc0Array[index](e);
    }
  }]);

  return CustomTemplate;
}(_index.Component)) || _class);
CustomTemplate.properties = {
  "dispatch": {
    "type": null,
    "value": null
  },
  "layouts": {
    "type": null,
    "value": null
  },
  "actionBar": {
    "type": null,
    "value": null
  },
  "title": {
    "type": null,
    "value": null
  },
  "content": {
    "type": null,
    "value": null
  },
  "contentImgs": {
    "type": null,
    "value": null
  }
};
CustomTemplate.$$events = ["handleChange", "onChangeImagePicker", "onFailImagePicker", "onImageClick", "onClickUp", "onClickDown", "onClickClose", "onChangeValue", "onChangePayImagePicker", "anonymousFunc0"];
exports.default = CustomTemplate;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(CustomTemplate, true));