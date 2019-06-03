"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../npm/prop-types/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pay = function (_BaseComponent) {
  _inherits(Pay, _BaseComponent);

  function Pay() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Pay);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Pay.__proto__ || Object.getPrototypeOf(Pay)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "preview", "description", "files", "title", "data"], _this.handleChange = function (value) {
      if (_this.props.onChangeValue) {
        var data = _this.props.data;

        _this.__triggerPropsFn("onChangeValue", [null].concat([Object.assign(data, { description: value })]));
      }
    }, _this.changePayImagePicker = function (files) {
      if (_this.props.onChangePayImagePicker) {
        var data = _this.props.data;

        _this.__triggerPropsFn("onChangePayImagePicker", [null].concat([Object.assign(data, { payImg: files.length > 0 ? files[0].url : '' })]));
      }
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Pay, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Pay.prototype.__proto__ || Object.getPrototypeOf(Pay.prototype), "_constructor", this).apply(this, arguments);
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      ;

      var preview = this.__props.preview;
      var _props$data = this.__props.data,
          description = _props$data.description,
          payImg = _props$data.payImg,
          title = _props$data.title;

      var files = payImg ? [{ url: payImg }] : [];
      var anonymousState__temp = files.length < 1;
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        preview: preview,
        description: description,
        files: files,
        title: title
      });
      return this.__state;
    }
  }]);

  return Pay;
}(_index.Component);

Pay.properties = {
  "onChangeValue": {
    "type": null,
    "value": null
  },
  "data": {
    "type": null,
    "value": null
  },
  "__fn_onChangeValue": {
    "type": null,
    "value": null
  },
  "onChangePayImagePicker": {
    "type": null,
    "value": null
  },
  "__fn_onChangePayImagePicker": {
    "type": null,
    "value": null
  },
  "preview": {
    "type": null,
    "value": null
  }
};
Pay.$$events = ["handleChange", "changePayImagePicker"];
Pay.propTypes = {
  onChangeValue: _index4.default.func,
  onChangePayImagePicker: _index4.default.func,
  data: _index4.default.object,
  preview: _index4.default.bool
};
Pay.defaultProps = {
  data: {
    description: '',
    payImg: '',
    formType: 'pay',
    formIndex: 1
  },
  preview: false
};
exports.default = Pay;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Pay));