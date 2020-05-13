import React from 'react';
import { View, ImageBackground, ScrollView, TouchableHighlight, Text } from 'react-native';
import Styles from './Styles'

export default function MovieGalleryCategory({ ...props }) {
    let dataArray = props.data || []
    return (
        <View style={Styles.movieGalleryContainer}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={Styles.scrollViewContainerContainer}>
                {
                    dataArray.map((row) => {
                        return (
                            <TouchableHighlight underlayColor="transparent" onPress={() => null}>
                                <View style={Styles.scrollViewList}>
                                    <View style={Styles.imageCoverContainer}>
                                        <View style={Styles.imageCoverView} >
                                            <ImageBackground style={Styles.imageCoverCategory} imageStyle={{ borderRadius: 12 }} source={{ uri: row.src }} />
                                        </View>
                                    </View>
                                    <View style={Styles.movieDetail}>
                                        <Text style={Styles.textDetailTitle}>Title</Text>
                                        <Text style={Styles.textDetailTitlePercent}>♥️ 65%</Text>
                                    </View>
                                </View>
                            </TouchableHighlight>
                        )
                    })
                }
            </ScrollView>
        </View>
    );
}
