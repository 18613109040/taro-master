import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { AtTextarea, AtList, AtListItem, AtIcon } from 'taro-ui';
import PropTypes from 'prop-types';

import './index.scss';



class MyInput extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    onClickUp: PropTypes.func,
    onClickDown: PropTypes.func,
    onClickClose: PropTypes.func,
    data: PropTypes.object
  };

  static defaultProps = {
    data: {}
  };
  constructor () {
    super(...arguments)
    this.state = {
      value: ''
    }
  }
  handleChange = (event) => {
    if(this.props.onChange) {
      const { data } = this.props;
      this.props.onChange({...data, ...event.detail})
    }
  }
  handleUp = () => {
    if(this.props.onClickUp) {
      const { data } = this.props;
      this.props.onClickUp(data);
    }
  }
  handleDown = () => {
    if(this.props.onClickDown) {
      const { data } = this.props
      this.props.onClickDown(data)
    }
  }
  handleClose = () => {
    if(this.props.onClickClose) {
      const { data } = this.props
      this.props.onClickClose(data)
    }
  }
  render(){
    const { value } = this.state;
    return (
      <View className="my-input">
        <AtTextarea
          value={value}
          onChange={this.handleChange}
          placeholder='请输入文字类容'
        />
      </View>
    )
  }
}

export default MyInput;

