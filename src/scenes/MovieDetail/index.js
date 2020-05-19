import React, { Component } from 'react';
import { View, Text } from 'react-native';

class index extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.props.getParam("movie","").title
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> {""} </Text>
      </View>
    );
  }
}

export default index;
