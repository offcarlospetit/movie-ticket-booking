import React from 'react';
import {
    View,
    Text
} from 'react-native';
import Styles from './Styles';

export default Button = (props) => {
    return (
        <View style={Styles.buttonContainerGoogle} >
            <Text style={ Styles.textButtonGoogle }> {props.text}</Text>
        </View>
    );
};