import React, { Component } from 'react';
import Home from './Home';


let data = [
    {
        src: "https://www.playerone.vg/wp-content/uploads/2019/12/wonder-woman-1984-gal-gadot-armadura-aguila-dorada.jpg",
        cover: "https://www.playerone.vg/wp-content/uploads/2019/12/wonder-woman-1984-gal-gadot-armadura-aguila-dorada.jpg",
        name: "Wonder Woman",
        releaseDate: "04/09/2020",
        rate: "95,6"
    },
    {
        src: "https://www.playerone.vg/wp-content/uploads/2019/08/2019-08-26_10-47-51.jpg",
        cover: "https://www.playerone.vg/wp-content/uploads/2019/08/2019-08-26_10-47-51.jpg",
        name: "Back Widow",
        releaseDate: "04/09/2020",
        rate: "95,6"
    },
    {
        src: "https://static.asianetnews.com/images/01dfe1bhrpndvb5tmjan2w9han/1562756963-lion-king-review-jpg_710x400xt.jpg",
        cover: "https://static.asianetnews.com/images/01dfe1bhrpndvb5tmjan2w9han/1562756963-lion-king-review-jpg_710x400xt.jpg",
        name: "Lion King",
        releaseDate: "04/09/2020",
        rate: "95,6"
    },
    {
        src: "https://blogdesuperheroes.es/wp-content/plugins/BdSGallery/BdSGaleria/86448.jpg",
        cover: "https://blogdesuperheroes.es/wp-content/plugins/BdSGallery/BdSGaleria/86448.jpg",
        name: "Joker",
        releaseDate: "04/09/2020",
        rate: "95,6"
    },
    {
        src: "http://www.diariodevenusville.com/wp-content/uploads/2020/03/BLOODSHOT-caratula.jpg",
        cover: "http://www.diariodevenusville.com/wp-content/uploads/2020/03/BLOODSHOT-caratula.jpg",
        name: "BloodShoot",
        releaseDate: "04/09/2020",
        rate: "95,6"
    },

]

let categories = ['Now Showing', 'Coming Soon', 'Action', 'Thriller', 'Scream']


class index extends Component {

    constructor(props) {
        super(props);
        // this.props.navigation.
            this.state = {
            categorieselect_popular: 0,
            categorieselect: 0,
            category_popular: data,
            category: data,
            categories: categories
        };
    }

    selectCaegory(category, type) {
        this.setState({ [type]: category })
    }

    movieDetailAction(index, section) {
        this.props.navigation.push("Detail", { movie: this.state[section][index] })
    }

    render() {

        return (
            <Home {...this.state} selectCaegory={this.selectCaegory.bind(this)} movieDetailAction={this.movieDetailAction.bind(this)} />
        );
    }
}

export default index;
