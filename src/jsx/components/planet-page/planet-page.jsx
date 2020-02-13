import React, { Component } from 'react';
import './planet-page.scss';
import ItemList from '../item-list/item-list.jsx';
import SwapiService from '../../../swapi-service';
import ItemDetails from '../item-details/item-details.jsx';

const Row = ({ left, right }) => {
    return (
        <div className="container-box">
            {left}
            {right}
        </div>
    )
};
export default class PlanetlePage extends Component {
    swapiService = new SwapiService();
    state = {
        selectedItem: null
    };
    onItemSelected = (id) => {
        this.setState({
            selectedItem: id
        });
    };

    render() {
        const { getAllPlanets, getPlanet, getPlanetImage } = this.swapiService;
        const planetList = (
            <ItemList
                onItemSelected={this.onItemSelected}
                getData={getAllPlanets}
                renderItem={(item) => item.name }
            />
        );
        const planetDetails = (
            <ItemDetails
                itemId={this.state.selectedItem}
                getData={getPlanet}
                getImageUrl={getPlanetImage}
            />
        );
        return (
            <Row left={planetList} right={planetDetails}/>
        );
    }
}