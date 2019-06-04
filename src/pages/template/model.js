export default {
  namespace: 'template',
  state: {
    title: '',
    content: '',
    contentImgs:[],
    layouts:[
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
    actionBar:[{
      image: '',
      value: '参与申请',
      formType: 'ApplyBtn',
      data:{
        title: '参与申请',
        formType: 'ApplyBtn',
        count: '',
        perUser: '',
        buttonText: ''
      }
    },{
      image: '',
      value: '付费相关',
      formType: 'Pay',
      data:{
        title: '付费信息',
        formType: 'Pay',
        description: '',
        payImg: ''
      }
    },{
      image: '',
      value: '输入框',
      formType: 'textBox',
      data:{
        title: '输入框',
        formType: 'textBox',
        name: '',
        description: ''
      }
    },{
      image: '',
      value: '单项选择',
      formType: 'radio',
      data:{
        title: '单项选择',
        formType: 'radio',
        name: '',
        options:[
          {
            value: ''
          },
          {
            value: ''
          }
        ]
      }
    },{
      image: '',
      value: '多项选择',
      formType: 'checkBox',
      data:{
        title: '多项选择',
        formType: 'checkBox',
        name: '',
        options:[
          {
            value: ''
          },
          {
            value: ''
          }
        ]
      }
    },{
      image: '',
      value: '定位相关',
      formType: '',
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
