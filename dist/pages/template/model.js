'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = {
  namespace: 'template',
  state: {
    title: '',
    content: '',
    contentImgs: [],
    layouts: [
      // {
      //   title: '付费信息',
      //   formType: 'Pay',
      //   formIndex: 0,
      //   description: '',
      //   payImg: ''
      // },{
      //   title: '参与申请',
      //   formType: 'ApplyBtn',
      //   formIndex: 1,
      //   count: '',
      //   perUser: '',
      //   buttonText: ''
      // },{
      //   title: '单项选择',
      //   formType: 'radio',
      //   formIndex: 2,
      //   name: '',
      //   options:[
      //     {
      //       value: ''
      //     },
      //     {
      //       value: ''
      //     }
      //   ]
      // },{
      //   title: '多项选择',
      //   formType: 'checkBox',
      //   formIndex: 3,
      //   name: '',
      //   options:[
      //     {
      //       value: ''
      //     },
      //     {
      //       value: ''
      //     }
      //   ]
      // },
      // {
      //   title: '输入框',
      //   formType: 'textBox',
      //   formIndex: 4,
      //   name: '',
      //   description: ''
      // }
    ],
    actionBar: [{
      image: '',
      value: '参与申请',
      formType: 'ApplyBtn',
      data: {
        title: '参与申请',
        formType: 'ApplyBtn',
        count: '',
        perUser: '',
        buttonText: ''
      }
    }, {
      image: '',
      value: '付费相关',
      formType: 'Pay',
      data: {
        title: '付费信息',
        formType: 'Pay',
        description: '',
        payImg: ''
      }
    }, {
      image: '',
      value: '输入框',
      formType: 'textBox',
      data: {
        title: '输入框',
        formType: 'textBox',
        name: '',
        description: ''
      }
    }, {
      image: '',
      value: '单项选择',
      formType: 'radio',
      data: {
        title: '单项选择',
        formType: 'radio',
        name: '',
        options: [{
          value: ''
        }, {
          value: ''
        }]
      }
    }, {
      image: '',
      value: '多项选择',
      formType: 'checkBox',
      data: {
        title: '多项选择',
        formType: 'checkBox',
        name: '',
        options: [{
          value: ''
        }, {
          value: ''
        }]
      }
    }, {
      image: '',
      value: '定位相关',
      formType: ''
    }]
  },
  effects: {},
  reducers: {
    moveUp: function moveUp(state, _ref) {
      var payload = _ref.payload;
      var current = payload.current;

      var temp = _extends({}, state.layouts[current - 1], { formIndex: current });
      var temp2 = _extends({}, state.layouts[current], { formIndex: current - 1 });
      state.layouts[current - 1] = temp2;
      state.layouts[current] = temp;
      return JSON.parse(JSON.stringify(state));
    },
    moveDown: function moveDown(state, _ref2) {
      var payload = _ref2.payload;
      var current = payload.current;

      var temp = _extends({}, state.layouts[current + 1], { formIndex: current });
      var temp2 = _extends({}, state.layouts[current], { formIndex: current + 1 });
      state.layouts[current + 1] = temp2;
      state.layouts[current] = temp;
      return JSON.parse(JSON.stringify(state));
    },
    remove: function remove(state, _ref3) {
      var payload = _ref3.payload;
      var current = payload.current;

      state.layouts.splice(current, 1);
      state.layouts.map(function (item, index) {
        return item.formIndex = index;
      });
      return JSON.parse(JSON.stringify(state));
    },
    changeData: function changeData(state, _ref4) {
      var payload = _ref4.payload;

      state.layouts[payload.formIndex] = payload;
      return JSON.parse(JSON.stringify(state));
    },
    addLayout: function addLayout(state, _ref5) {
      var payload = _ref5.payload;

      state.layouts.push(_extends({}, payload, { formIndex: state.layouts.length }));
      return JSON.parse(JSON.stringify(state));
    },
    setContentImgs: function setContentImgs(state, _ref6) {
      var payload = _ref6.payload;

      state.contentImgs = payload;
      return JSON.parse(JSON.stringify(state));
    }
  }
};