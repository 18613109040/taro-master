export default {
  namespace: 'template',
  state: {
    title: '',
    content: '',
    contentImgs:[],
    layouts:[{
      title: '付费信息',
      formType: 'Pay',
      formIndex: 1,
      description: '',
      payImg: ''
    },{
      title: '参与申请',
      formType: 'ApplyBtn',
      formIndex: 2,
      count: '',
      perUser: '',
      buttonText: ''
    },{
      title: '单项选择',
      formType: 'radio',
      formIndex: 3,
      title: '',
      option:[]
    }],
    actionBar:[{
      title: '组件一',
      src: '',
      formType: 'Pay',
      description: '',
      payImg: ''
    },{
      title: '组件二',
      src: ''
    },{
      title: '组件三',
      src: ''
    },{
      title: '组件四',
      src: ''
    },{
      title: '组件五',
      src: ''
    }]
  },
  effects: {

  },
  reducers: {
    moveUp(state, { payload }){
      const { current } = payload;
      const temp = {...state.layouts[current-1],formIndex:current};
      const temp2 = {...state.layouts[current],formIndex:current-1};
      state.layouts[current-1] = temp2;
      state.layouts[current] = temp
      return JSON.parse(JSON.stringify(state))
    },
    moveDown(state, { payload }){
      const { current } = payload;
      const temp = {...state.layouts[current+1],formIndex:current};
      const temp2 = {...state.layouts[current],formIndex:current+1};
      state.layouts[current+1] = temp2;
      state.layouts[current] = temp;
      return JSON.parse(JSON.stringify(state))
    },
    remove(state, { payload }){
      const { current } = payload;
      state.layouts.splice(current,1);
      state.layouts.map((item,index)=>item.formIndex = index)
      return JSON.parse(JSON.stringify(state))
    },
    changeData(state, { payload }){
      state.layouts[payload.formIndex] = payload
      return JSON.parse(JSON.stringify(state))
    },
    addLayout(state, { payload }){
      state.layouts.push({...payload,formIndex: state.layouts.length})
      return JSON.parse(JSON.stringify(state))
    },
    setContentImgs(state, { payload }){
      state.contentImgs = payload
      return JSON.parse(JSON.stringify(state))
    }
  },
};
