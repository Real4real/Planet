import React from 'react';
import ItemDetails from '../item-details/item-details.jsx';
import SwapiService from '../../../swapi-service';

const swapi = new SwapiService();

const { getPlanet, getPlanetImage, getPerson, getPersonImage} = swapi;

const PlanetDetails = ({ itemId }) => {
    
    return (
        <ItemDetails
            itemId={itemId}
            getData={getPlanet}
            getImageUrl={getPlanetImage}
        
        />
    )
};
const PersonDetails = ({ itemId }) => {
    
    return (
        <ItemDetails
            itemId={itemId}
            getData={getPerson}
            getImageUrl={getPersonImage}
        
        />
    )
};

export {
    PersonDetails, PlanetDetails
}
