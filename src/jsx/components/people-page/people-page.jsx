import React, { Component } from 'react';
import './people-page.scss';
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
export default class PeoplePage extends Component {
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
        const { getPerson, getPersonImage, getAllPeople } = this.swapiService;
        const peopleList = (
            <ItemList
                onItemSelected={this.onItemSelected}
                getData={getAllPeople}
                renderItem={(item) => `${item.name} (gender - ${item.gender})`} 
            />
        );
        const personDetails = (
            <ItemDetails
                itemId={this.state.selectedItem}
                getData={getPerson}
                getImageUrl={getPersonImage}
            />
        );
        return (
            <Row left={peopleList} right={personDetails} />
        );
    }
}