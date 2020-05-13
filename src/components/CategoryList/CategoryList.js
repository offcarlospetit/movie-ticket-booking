import React from 'react';
import { View, Text, ScrollView, TouchableHighlight, Dimensions } from 'react-native';
import Styles from './Styles'

function getStyle(index, selected) {
    let value = index == selected ? 4 : 0
    return {
        width: Dimensions.get('screen').width * 0.30,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        borderBottomWidth: value,
        borderBottomColor: '#8A40F0',
        marginRight: 10,
        marginLeft: 10
    }

}

export default function CategoryList(props) {
    return (
        <View style={Styles.categoryContainer}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={Styles.categoryContainerScrollView}>
                {
                    props.categorys.map((category, index) => {
                        return (
                            <View style={getStyle(index, props.categorySelect)}>
                                <TouchableHighlight onPress={() => { null }} underlayColor={'transparente'}>
                                    <Text style={Styles.categoryContainerCategoryText}>{category}</Text>
                                </TouchableHighlight>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </View>
    );
}
