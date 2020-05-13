import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableHighlight, Dimensions } from 'react-native';
import Header from '../../components/Header'
import MovieGallery from '../../components/MovieGallery/MovieGallery'
import MovieGallery2 from '../../components/MovieGallery/MovieGalleryCategory'
import CategoryList from '../../components/CategoryList/CategoryList'
import Styles from './Styles'



export default function Home(props) {
    return (
        <SafeAreaView style={Styles.container}>
            <Header />
            <View style={Styles.containerBody}>
                <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={Styles.containerBodyScrollView}>
                    <View style={Styles.containerBodyScrollViewGallery}>
                        <MovieGallery data={props.data} />
                    </View>
                    <View style={{ flex: 6 }}>
                        <CategoryList categorys={props.categorys} categorySelect={props.categorySelect} />
                        <MovieGallery2 data={props.data} />
                    </View>
                    <View style={{ flex: 6 }}>
                        <CategoryList categorys={props.categorys} categorySelect={props.categorySelect} />
                        <MovieGallery2 data={props.data} />
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}
