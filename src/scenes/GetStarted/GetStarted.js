import React from 'react';
import { View, Text, Image, TouchableHighlight, SafeAreaView } from 'react-native';
import Button from 'components/Buttons/Button'
import assets from 'assets'
const logo = assets.images.logo3x
import Styles from './Styles'

export default function GetStarted(props) {
    return (
        <SafeAreaView style={Styles.getStartedContainer}>
            <Image source={logo} width={137} height={154} style={Styles.getStartedContainerImageLogo} />
            <View style={Styles.getStartedContainerContent}>
                <TouchableHighlight onPress={() => props._initAction()} underlayColor={"transparent"} >
                    <Button text={"Iniciar"} />
                </TouchableHighlight>
            </View>
        </SafeAreaView>
    );
}
