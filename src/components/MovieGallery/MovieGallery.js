import React from 'react';
import { View, ImageBackground, ScrollView, TouchableHighlight } from 'react-native';
import Styles from './Styles'

export default function MovieGallery({ ...props }) {
    let dataArray = props.data || []
    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={Styles.scrollViewContainer}>
            {
                dataArray.map((row, index) => {
                    return (
                        <TouchableHighlight underlayColor="transparent" onPress={() => props.movieDetailAction(index, "category") }>
                            <View style={Styles.imageCoverView} >
                                <ImageBackground style={Styles.imageCover} imageStyle={{ borderRadius: 12 }} source={{ uri: row.src }} />
                            </View>
                        </TouchableHighlight>
                    )
                })
            }
        </ScrollView>
    );
}
