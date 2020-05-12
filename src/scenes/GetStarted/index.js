import React, { Component } from 'react'
import { Text, View } from 'react-native'
import GetStarted from './GetStarted'

class Index extends Component {
  constructor(props) {
    super(props)
    state = {}
  }

  _initAction = () => {
    this.props.navigation.push("Login")
  }

  render() {
    console.log(this.props);
    return (
      <GetStarted _initAction={this._initAction.bind(this)} />
    )
  }
}

export default Index