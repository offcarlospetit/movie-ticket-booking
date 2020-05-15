import React, { Component } from 'react';
import { Animated, Easing, Dimensions } from 'react-native';
import Header from './HeaderTabView'
const HEIGHT_MODAL = Dimensions.get('screen').height * 0.80

class index extends Component {
  constructor(props) {
    super(props);

    let aimated = [{ width: new Animated.Value(0) }, { fadeAnim: new Animated.Value(1) }, { heigthView: new Animated.Value(0) }]
    this.state = {
      width: new Animated.Value(0),
      fadeAnim: new Animated.Value(1),
      heigthView: new Animated.Value(0),
      isFullWidth: false,
      aimated
    };
  }

  onToggle() {
    const fade = this.state.isFullWidth ? 1 : 0;
    const animatedfade = Animated.timing(this.state.fadeAnim, {
      toValue: fade,
      duration: 100,
      velocity: 10,
      tension: 2,
      useNativeDriver: false
    })
    const endWidth = this.state.isFullWidth ? 0 : 95;
    const animatedwidth = Animated.timing(this.state.width, {
      toValue: endWidth,
      duration: 100,
      velocity: 10,
      tension: 2,
      easing: Easing.linear,
      useNativeDriver: false
    })
    const heigthView = this.state.isFullWidth ? 0 : HEIGHT_MODAL;
    const animatedheigth = Animated.spring(this.state.heigthView, {
      toValue: heigthView,
      timing: 100,
      velocity: 10,
      tension: 2,
      friction: 8,
      useNativeDriver: false
    })

    let animateArray = []
    if (this.state.isFullWidth) {
      animateArray.push(animatedheigth, animatedwidth, animatedfade)
    } else {
      animateArray.push(animatedfade, animatedwidth, animatedheigth)
    }

    Animated.sequence(animateArray).start(() => { this.setState({ isFullWidth: !this.state.isFullWidth }) })

  }

  _onToggle() {
    const fade = this.state.isFullWidth ? 1 : 0;
    Animated.timing(this.state.fadeAnim, {
      toValue: fade,
      duration: 200,
      useNativeDriver: false
    }).start(() => {
      if (this.state.isFullWidth) {
        this.setState({ isFullWidth: !this.state.isFullWidth })
      } else {
        this.animatedWidthTexfield()
      }
    });
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
