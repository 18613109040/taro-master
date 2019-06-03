import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { AtTextarea, AtList, AtListItem, AtIcon } from 'taro-ui';
import PropTypes from 'prop-types';
import './index.scss';

class CusTom extends Component {
  static propTypes = {
    onClickUp: PropTypes.func,
    onClickDown: PropTypes.func,
    onClickClose: PropTypes.func,
    data: PropTypes.object,
  };

  static defaultProps = {
    data: {},
  };
  constructor () {
    super(...arguments)
    this.state = {

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
    const { data } = this.props;
    return (
      <View className="cus-tom">
        <View className='header'>
          <Text className='title'>{data.title}</Text>
          {
            data.index== 0 ? '': (
            <View className='arrow-up' onClick={this.handleUp}>
              <AtIcon value='arrow-up' size='15'  />
            </View>)
          }
          <View className='arrow-down'  onClick={this.handleDown}>
            <AtIcon value='arrow-down' size='15' />
          </View>
          <View className='close-circle'  onClick={this.handleClose} >
            <AtIcon value='close-circle' size='15' />
          </View>
        </View>
        {this.props.children}
      </View>
    )
  }
}

export default CusTom;

