import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import Header from 'components/Header'
import MovieGallery from 'components/MovieGallery/MovieGallery'
import MovieGallery2 from 'components/MovieGallery/MovieGalleryCategory'
import CategoryList from 'components/CategoryList/CategoryList'
import Styles from './Styles'



export default function Home(props) {
    return (
        <SafeAreaView style={Styles.container}>
            <Header />
            <View style={Styles.containerBody}>
                <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={Styles.containerBodyScrollView}>
                    <View style={Styles.containerBodyScrollViewGallery}>
                        <MovieGallery data={props.category} movieDetailAction={props.movieDetailAction} />
                    </View>
                    <View style={{ flex: 6 }}>
                        <CategoryList categories={props.categories} categorieselect={props.categorieselect} selectCaegory={props.selectCaegory} type={"categorieselect"} />
                        <MovieGallery2 data={props.category} movieDetailAction={props.movieDetailAction} type={"categorieselect"} />
                    </View>
                    <View style={{ flex: 6 }}>
                        <CategoryList categories={props.categories} categorieselect={props.categorieselect_popular} selectCaegory={props.selectCaegory} type={"categorieselect_popular"} />
                        <MovieGallery2 data={props.category_popular} movieDetailAction={props.movieDetailAction} type={"categorieselect"} />
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}
