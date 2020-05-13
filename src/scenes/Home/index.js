import React, { Component } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableHighlight, Dimensions } from 'react-native';
import Header from '../../components/Header'
import MovieGallery from '../../components/MovieGallery/MovieGallery'
import Styles from './Styles'
let data = [
    {
        src: "https://static.asianetnews.com/images/01dfe1bhrpndvb5tmjan2w9han/1562756963-lion-king-review-jpg_710x400xt.jpg",
        name: "Lion King"
    },
    {
        src: "https://blogdesuperheroes.es/wp-content/plugins/BdSGallery/BdSGaleria/86448.jpg",
        name: "Joker"
    },
    {
        src: "https://static.asianetnews.com/images/01dfe1bhrpndvb5tmjan2w9han/1562756963-lion-king-review-jpg_710x400xt.jpg",
        name: "Lion King"
    },
    {
        src: "https://static.asianetnews.com/images/01dfe1bhrpndvb5tmjan2w9han/1562756963-lion-king-review-jpg_710x400xt.jpg",
        name: "Lion King"
    },
    {
        src: "https://static.asianetnews.com/images/01dfe1bhrpndvb5tmjan2w9han/1562756963-lion-king-review-jpg_710x400xt.jpg",
        name: "Lion King"
    }
]
let categorys = ['Now Showing', 'Coming Soon', 'Action', 'Thriller', 'Scream']
import Home from './Home'

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categorySelect: 0,
            data: data,
            categorys: categorys
        };
    }



    render() {
        return (
            <Home {...this.state} />
        );
    }
}

export default index;
