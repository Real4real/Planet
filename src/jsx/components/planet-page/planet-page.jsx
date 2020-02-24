import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './planet-page.scss';
import ItemList from '../item-list/item-list.jsx';
import SwapiService from '../../../swapi-service';
import ItemDetails from '../item-details/item-details.jsx';

const Row = ({ left, right }) => {
    return (
        <div className="container-box">
            {left}
            {/* {right} */}
        </div>
    )
};

const PlanetlePage = ({history}) => {
    const swapiService = new SwapiService();

        const { getAllPlanets, getPlanet, getPlanetImage } = swapiService;
        const planetList = (
            <ItemList
                onItemSelected={(itemId) => {
                    history.push(`/planet/${itemId}`)
                }}
                getData={getAllPlanets}
                renderItem={(item) => item.name }
            />
        );
        // const planetDetails = (
        //     <ItemDetails
        //         itemId={this.state.selectedItem}
        //         getData={getPlanet}
        //         getImageUrl={getPlanetImage}
        //     />
        // );
        return (
            <Row left={planetList}/>
        );

}
export default withRouter(PlanetlePage);