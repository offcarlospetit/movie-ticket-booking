import React from 'react';
import {
    View,
    Text
} from 'react-native';
import Styles from './Styles';

export default Button = (props) => {
    return (
        <View style={Styles.buttonContainerFacebook} >
            <Text style={ Styles.textButtonFacebook }> {props.text}</Text>
        </View>
    );
};