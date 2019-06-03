import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { AtInput, AtTextarea, AtImagePicker } from 'taro-ui'
import { connect } from '@tarojs/redux';
import Pay from  '../../components/pay';
import CusTom from '../../components/CusTom';
import ApplyBtn from '../../components/applyBtn'
import Radio from '../../components/radio'
import './index.scss';

@connect(({loading, template }) => ({
  loading,
  title: template.title,
  content: template.content,
  contentImgs: template.contentImgs,
  layouts: template.layouts,
  actionBar: template.actionBar
}))
class CustomTemplate extends Component {
  config = {
    navigationBarTitleText: '自定义',
  };
  constructor () {
    super(...arguments)
    this.state = {
      value: '',
      files:[]
    }
  }
  componentDidMount = () => {

  };

  //分享
  onShareAppMessage() {

  }

  // 小程序上拉加载
  onReachBottom() {

  }
  handleChange=(value)=>{
    console.dir(value)
  }
  onChangeImagePicker = (files) =>{
    const { dispatch } = this.props;
    dispatch({
      type: 'template/setContentImgs',
      payload:files
    })
  }
  onFailImagePicker = () => {

  }
  onImageClick =() => {

  }
  onClickUp = (data) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'template/moveUp',
      payload:data
    })
  }
  onClickDown = (data) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'template/moveDown',
      payload:data
    })
  }
  onClickClose = (data) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'template/remove',
      payload: data
    })
  }
  onChangePayImagePicker = (data) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'template/changeData',
      payload: data
    })
  }
  onChangeValue = (data) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'template/changeData',
      payload: data
    })
  }
  addCompent = (item) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'template/addLayout',
      payload: item
    })
  }
  render() {
    const { layouts, actionBar, title, content, contentImgs } = this.props;
    console.dir(contentImgs)
    return (
      <View className="template">
        <View className="sub-title">
          <Text className="man-title">创建主题</Text>
        </View>
        <AtInput
          title='主题'
          type='text'
          placeholder='请输入您的标题信息(必填)'
          value={title}
          onChange={this.handleChange.bind(this)}
        />
        <View className="container">
          <Text className="title">内容</Text>
          <AtTextarea
            className="textarea"
            value={content}
            onChange={this.handleChange.bind(this)}
            title='内容'
            placeholder='为主题添加详细的描述'
          />
        </View>
        <AtImagePicker
          multiple
          length={4}
          count={8}
          showAddBtn={contentImgs.length<8}
          files={contentImgs}
          onChange={this.onChangeImagePicker}
          onFail={this.onFailImagePicker}
          onImageClick={this.onImageClick}
        />
        <View className="create-page">
          <View className="panel">
            {
              layouts.map((item, index)=>{
                return(
                  <CusTom
                    key={`layout_${index}`}
                    onClickUp={this.onClickUp}
                    onClickDown={this.onClickDown}
                    onClickClose={this.onClickClose}
                    data={Object.assign(item,{current: index})}
                  >
                    {
                      item.formType==='Pay'?
                      <Pay
                        data={item}
                        onChangeValue={this.onChangeValue}
                        onChangePayImagePicker={this.onChangePayImagePicker}
                      /> : item.formType==='ApplyBtn'?
                      <ApplyBtn
                        data={item}
                        onChangeValue={this.onChangeValue}
                      />: item.formType==='radio'? <Radio />:''
                    }
                  </CusTom>
                  )
              })
            }
          </View>
        </View>
        <View className='at-row at-row--wrap'>
          {
            actionBar.map((item,index)=>(
              <View className='at-col' onClick={()=>{this.addCompent(item)}} key={`bar_${index}`}>
                <Text>{item.title}</Text>
              </View>
            ))
          }
        </View>
        {/* <View className="footer">
          <Text className="btn">预览</Text>
          <View></View>
          <Text className="btn">发布</Text>
        </View> */}
      </View>
    );
  }
}

export default CustomTemplate;
