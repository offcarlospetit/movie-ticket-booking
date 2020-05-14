import React from 'react';
import { View, Text, TouchableHighlight, TextInput, Animated, Dimensions } from 'react-native';
import Styles from './Styles';
import Icons from 'react-native-vector-icons/Feather';

export default function Header(props) {
    return (
        <>
            <View style={Styles.headerContainer}>
                <View style={Styles.headerContainerLeft}>
                    <TouchableHighlight underlayColor={"transparent"} onPress={() => { null }}>
                        <Icons name="align-left" size={24} color={"#0A0657"} />
                    </TouchableHighlight>
                </View>
                <View style={Styles.headerContainerCenter}>
                    <Animated.View style={{ flex: 5, alignItems: 'center', opacity: props.fadeAnim }}>
                        <Text style={Styles.headerTitle}>Movies</Text>
                    </Animated.View>
                    <Animated.View style={{ width: props.width, height: 25, zIndex: 200, position: 'absolute' }}>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <View style={{ flex: 6, justifyContent: 'center' }}>
                                <TextInput placeholder="Search" style={{ borderBottomColor: "#9594B4", borderBottomWidth: 1 }} />
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
                                <TouchableHighlight underlayColor={"transparent"} onPress={() => { props.onToggle(0) }}>
                                    <Icons name="x" size={20} color={"#0A0657"} />
                                </TouchableHighlight>
                            </View>
                        </View>
                    </Animated.View>
                    <Animated.View style={{ flex: 1, alignItems: 'center', opacity: props.fadeAnim }}>
                        <TouchableHighlight underlayColor={"transparent"} onPress={() => { props.onToggle(1) }}>
                            <Icons name="search" size={24} color={"#0A0657"} />
                        </TouchableHighlight>
                    </Animated.View>
                </View>
                <View style={Styles.headerContainerRight}>
                    <TouchableHighlight underlayColor={"transparent"} onPress={() => { null }}>
                        <Icons name="bell" size={24} color={"#8A40F0"} />
                    </TouchableHighlight>
                </View>
            </View>
            <Animated.View style={{ zIndex: 200, top: 100, position: 'absolute', width: Dimensions.get('screen').width, height: props.heigthView, backgroundColor: 'rgba(255,255,255, 0.89)' }}>
                <View style={{ flex: 1 }}>
                    
                </View>
            </Animated.View>
        </>
    );
}
