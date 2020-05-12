import React from 'react';
import { View, Text, Image, TouchableHighlight, SafeAreaView } from 'react-native';
import Button from '../../components/Button'
import assets from '../../assets/assets'
import { useLinkProps } from '@react-navigation/native';
const logo = assets.images.logo3x

export default function GetStarted(props) {
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
            <Image source={logo} width={137} height={154} style={{ resizeMode: 'contain', flex: 1, width: 137, height: 154 }} />
            <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                <TouchableHighlight onPress={() => props._initAction()} >
                    <Button text={"Iniciar"} />
                </TouchableHighlight>
            </View>
        </SafeAreaView>
    );
}
