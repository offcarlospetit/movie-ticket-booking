import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from './HeaderTabView'

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Header />
    );
  }
}

export default index;
