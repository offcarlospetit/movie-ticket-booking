import React from 'react';
import { View, Text, ScrollView, TouchableHighlight, Dimensions } from 'react-native';
import Styles from './Styles'
import Assets from 'assets'

function getStyle(index, selected) {
    let value = index == selected ? 4 : 0
    return { borderBottomWidth: value }
}

function getColor(index, selected) {
    let color = index == selected ? Assets.colors.PRIMARY_COLOR : Assets.colors.PRIMARY_COLOR_OPACYTY
    return { color: color }
}

export default function CategoryList(props) {
    return (
        <View style={Styles.categoryContainer}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={Styles.categoryContainerScrollView}>
                {
                    props.categorys.map((category, index) => {
                        return (
                            <View style={[Styles.CategoryListContent, getStyle(index, props.categorySelect)]}>
                                <TouchableHighlight onPress={() => { props.selectCaegory(index, props.type) }} underlayColor={'transparente'}>
                                    <Text style={[Styles.categoryContainerCategoryText, getColor(index, props.categorySelect)]}>{category}</Text>
                                </TouchableHighlight>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </View>
    );
}
