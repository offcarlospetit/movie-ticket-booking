import React from 'react'
import { View, Text, Image, TextInput, TouchableHighlight } from 'react-native'
import Button from 'components/Buttons/Button'
import ButtonFacebook from 'components/Buttons/ButtonFacebook'
import ButtonGoogle from 'components/Buttons/ButtonGoogle'
import assets from 'assets'
const logo = assets.images.logo3x
import Styles from './Styles'

const Login = (props) => {
    return (
        <View style={Styles.loginContainer}>
            <View style={Styles.loginContainerSectionOne}>
                <Image source={logo} width={125} height={135} style={Styles.loginContainerImage} />
            </View>
            <View style={Styles.loginContainerSectionTwo}>
                <TextInput placeholder="email" style={Styles.loginContainerTextInput} />
                <TextInput placeholder="password" style={Styles.loginContainerTextInput} />
                <TouchableHighlight onPress={() => props.loginAction()} underlayColor={'transparente'}>
                    <Button text={"Login"} />
                </TouchableHighlight>
            </View>
            <View style={Styles.loginContainerSectionThree}>
                <Text style={Styles.loginContainerText}>Or</Text>
                <ButtonFacebook text={"Conect with Facebook"} />
                <ButtonGoogle text={"Conect whit Google"} />
                <Text>Don't Have account? <Text>Sign Up </Text></Text>
            </View>
        </View>
    )
}

export default Login
