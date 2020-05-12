import React from 'react';
import {
    View,
    Text
} from 'react-native';
import Styles from './Styles';

export default Button = (props) => {
    return (
        <View style={Styles.buttonContainer} >
            <Text style={ Styles.textButton }> {props.text}</Text>
        </View>
    );
};