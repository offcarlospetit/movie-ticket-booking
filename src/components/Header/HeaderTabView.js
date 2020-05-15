import React from 'react';
import { View, Text, TouchableHighlight, TextInput, Animated, Dimensions } from 'react-native';
import Icons from 'react-native-vector-icons/Feather';
import Styles from './Styles';
import Assets from 'assets'

export default function Header(props) {
    return (
        <>
            <View style={Styles.headerContainer}>
                <View style={Styles.headerContainerLeft}>
                    <TouchableHighlight underlayColor={"transparent"} onPress={() => { null }}>
                        <Icons name="align-left" size={24} color={Assets.colors.PRIMARY_COLOR} />
                    </TouchableHighlight>
                </View>
                <View style={Styles.headerContainerCenter}>
                    <Animated.View style={[Styles.animatedHeaderContainer, { opacity: props.fadeAnim }]}>
                        <Text style={Styles.headerTitle}>Movies</Text>
                    </Animated.View>
                    <Animated.View style={[Styles.animatedHeaderSearchBar, { width: props.width }]}>
                        <View style={Styles.animatedHeaderSearchBarContent}>
                            <View style={Styles.animatedHeaderSearchBarContentTexInput}>
                                <TextInput placeholder="Search" style={Styles.textInputSearchBar} />
                            </View>
                            <View style={Styles.animatedHeaderSearchBarContentCloseButton}>
                                <TouchableHighlight underlayColor={"transparent"} onPress={() => { props.onToggle(0) }}>
                                    <Icons name="x" size={20} color={Assets.colors.PRIMARY_COLOR} />
                                </TouchableHighlight>
                            </View>
                        </View>
                    </Animated.View>
                    <Animated.View style={[Styles.animatedHeaderSearchBarSearchIcon, { opacity: props.fadeAnim }]}>
                        <TouchableHighlight underlayColor={"transparent"} onPress={() => { props.onToggle(1) }}>
                            <Icons name="search" size={24} color={Assets.colors.PRIMARY_COLOR} />
                        </TouchableHighlight>
                    </Animated.View>
                </View>
                <View style={Styles.headerContainerRight}>
                    <TouchableHighlight underlayColor={"transparent"} onPress={() => { null }}>
                        <Icons name="bell" size={24} color={Assets.colors.SECONDARY_COLOR} />
                    </TouchableHighlight>
                </View>
            </View>
            <Animated.View style={[Styles.animatedHeaderContainerSearchListContainer, { height: props.heigthView }]}>
                <View style={{ flex: 1 }}>

                </View>
            </Animated.View>
        </>
    );
}
