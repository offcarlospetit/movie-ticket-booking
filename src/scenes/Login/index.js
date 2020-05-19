import React, { Component } from 'react';
import { View, Text, Image, TextInput, Dimensions, TouchableHighlight } from 'react-native';
import LoginView from './Login'

class Index extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    loginAction(){
        // console.log(this.props.isLoggedIn);
        this.props.navigation.navigate("Home")
    }

    render() {
        return (
            <LoginView 
                {...this.props} 
                loginAction={this.loginAction.bind(this)}
            />
        );
    }
}

export default Index;
