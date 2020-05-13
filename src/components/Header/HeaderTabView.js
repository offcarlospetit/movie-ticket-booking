import React from 'react';
import { View, Text } from 'react-native';
import Styles from './Styles';

export default function Header(props) {
    return (
        <View style={Styles.headerContainer}>
            <View style={Styles.headerContainerLeft}>
                <Text>Movies</Text>
            </View>
            <View style={Styles.headerContainerCenter}>
                <Text style={Styles.headerTitle}>Movies</Text>
            </View>
            <View style={Styles.headerContainerRight}>
                <Text>Movies</Text>
            </View>
        </View>
    );
}
