'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _ref;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = {
  namespace: 'template',
  state: {
    title: '',
    content: '',
    contentImgs: [],
    layouts: [{
      title: '付费信息',
      formType: 'Pay',
      formIndex: 1,
      description: '',
      payImg: ''
    }, {
      title: '参与申请',
      formType: 'ApplyBtn',
      formIndex: 2,
      count: '',
      perUser: '',
      buttonText: ''
    }, (_ref = {
      title: '单项选择',
      formType: 'radio',
      formIndex: 3
    }, _defineProperty(_ref, 'title', ''), _defineProperty(_ref, 'option', []), _ref)],
    actionBar: [{
      title: '组件一',
      src: '',
      formType: 'Pay',
      description: '',
      payImg: ''
    }, {
      title: '组件二',
      src: ''
    }, {
      title: '组件三',
      src: ''
    }, {
      title: '组件四',
      src: ''
    }, {
      title: '组件五',
      src: ''
    }]
  },
  effects: {},
  reducers: {
    moveUp: function moveUp(state, _ref2) {
      var payload = _ref2.payload;
      var current = payload.current;

      var temp = _extends({}, state.layouts[current - 1], { formIndex: current });
      var temp2 = _extends({}, state.layouts[current], { formIndex: current - 1 });
      state.layouts[current - 1] = temp2;
      state.layouts[current] = temp;
      return JSON.parse(JSON.stringify(state));
    },
    moveDown: function moveDown(state, _ref3) {
      var payload = _ref3.payload;
      var current = payload.current;

      var temp = _extends({}, state.layouts[current + 1], { formIndex: current });
      var temp2 = _extends({}, state.layouts[current], { formIndex: current + 1 });
      state.layouts[current + 1] = temp2;
      state.layouts[current] = temp;
      return JSON.parse(JSON.stringify(state));
    },
    remove: function remove(state, _ref4) {
      var payload = _ref4.payload;
      var current = payload.current;

      state.layouts.splice(current, 1);
      state.layouts.map(function (item, index) {
        return item.formIndex = index;
      });
      return JSON.parse(JSON.stringify(state));
    },
    changeData: function changeData(state, _ref5) {
      var payload = _ref5.payload;

      state.layouts[payload.formIndex] = payload;
      return JSON.parse(JSON.stringify(state));
    },
    addLayout: function addLayout(state, _ref6) {
      var payload = _ref6.payload;

      state.layouts.push(_extends({}, payload, { formIndex: state.layouts.length }));
      return JSON.parse(JSON.stringify(state));
    },
    setContentImgs: function setContentImgs(state, _ref7) {
      var payload = _ref7.payload;

      state.contentImgs = payload;
      return JSON.parse(JSON.stringify(state));
    }
  }
};