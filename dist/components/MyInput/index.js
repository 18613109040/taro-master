"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

var MyInput = function (_BaseComponent) {
  _inherits(MyInput, _BaseComponent);

  function MyInput() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MyInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MyInput.__proto__ || Object.getPrototypeOf(MyInput)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["value", "data"], _this.handleChange = function (event) {
      if (_this.props.onChange) {
        var data = _this.props.data;

        _this.__triggerPropsFn("onChange", [null].concat([_extends({}, data, event.detail)]));
      }
    }, _this.handleUp = function () {
      if (_this.props.onClickUp) {
        var data = _this.props.data;

        _this.__triggerPropsFn("onClickUp", [null].concat([data]));
      }
    }, _this.handleDown = function () {
      if (_this.props.onClickDown) {
        var data = _this.props.data;

        _this.__triggerPropsFn("onClickDown", [null].concat([data]));
      }
    }, _this.handleClose = function () {
      if (_this.props.onClickClose) {
        var data = _this.props.data;

        _this.__triggerPropsFn("onClickClose", [null].concat([data]));
      }
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MyInput, [{
    key: "_constructor",
    value: function _constructor() {
      _get(MyInput.prototype.__proto__ || Object.getPrototypeOf(MyInput.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        value: ''
      };
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      ;

      var value = this.__state.value;

      Object.assign(this.__state, {});
      return this.__state;
    }
  }]);

  return MyInput;
}(_index.Component);

MyInput.properties = {
  "onChange": {
    "type": null,
    "value": null
  },
  "data": {
    "type": null,
    "value": null
  },
  "__fn_onChange": {
    "type": null,
    "value": null
  },
  "onClickUp": {
    "type": null,
    "value": null
  },
  "__fn_onClickUp": {
    "type": null,
    "value": null
  },
  "onClickDown": {
    "type": null,
    "value": null
  },
  "__fn_onClickDown": {
    "type": null,
    "value": null
  },
  "onClickClose": {
    "type": null,
    "value": null
  },
  "__fn_onClickClose": {
    "type": null,
    "value": null
  }
};
MyInput.$$events = ["handleChange"];
MyInput.propTypes = {
  onChange: _index4.default.func,
  onClickUp: _index4.default.func,
  onClickDown: _index4.default.func,
  onClickClose: _index4.default.func,
  data: _index4.default.object
};
MyInput.defaultProps = {
  data: {}
};
exports.default = MyInput;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(MyInput));