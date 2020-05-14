import React, { Component } from 'react';
import { Animated, Easing, Dimensions } from 'react-native';
import Header from './HeaderTabView'
const HEIGHT_MODAL = Dimensions.get('screen').height * 0.80

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: new Animated.Value(0),
      fadeAnim: new Animated.Value(1),
      heigthView: new Animated.Value(0),
      isFullWidth: false
    };
  }

  onToggle() {
    console.log(this.state.isFullWidth);
    if (this.state.isFullWidth) {
      this.animatedHeigthView()
    } else {
      this._onToggle()
    }
  }

  _onToggle() {
    const fade = this.state.isFullWidth ? 1 : 0;
    Animated.timing(this.state.fadeAnim, {
      toValue: fade,
      duration: 500,
      useNativeDriver: false
    }).start(() => {
      console.log(this.state.isFullWidth);
      if (this.state.isFullWidth) {
        this.setState({ isFullWidth: !this.state.isFullWidth })
      } else {
        this.animatedWidthTexfield()
      }
    });
  }

  animatedWidthTexfield() {
    const endWidth = this.state.isFullWidth ? 0 : 95;
    Animated.timing(this.state.width, {
      toValue: endWidth,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: false
    }).start(() => {
      console.log(this.state.isFullWidth);
      if (this.state.isFullWidth) {
        this._onToggle()
      } else {
        this.animatedHeigthView()
      }

    })
  }

  animatedHeigthView() {
    const heigthView = this.state.isFullWidth ? 0 : HEIGHT_MODAL;
    Animated.spring(this.state.heigthView, {
      toValue: heigthView,
      timing: 1000,
      velocity: 10,
      tension: 2,
      friction: 8,
      useNativeDriver: false
    }).start(() => {
      console.log(this.state.isFullWidth);
      if (this.state.isFullWidth) {
        this.animatedWidthTexfield()
      } else {
        this.setState({ isFullWidth: !this.state.isFullWidth })
      }
    })
  }

  render() {
    const width = this.state.width.interpolate({
      inputRange: [0, 75],
      outputRange: ['0%', '75%'],
    });
    const fadeAnim = this.state.fadeAnim
    const heigthView = this.state.heigthView
    return (
      <Header onToggle={this.onToggle.bind(this)} width={width} fadeAnim={fadeAnim} heigthView={heigthView} />
    );
  }
}

export default index;
