import React, { Component } from 'react';
import './item-list.scss';
import SwapiService from "../../../swapi-service.js";
import Spiner from '../spiner/spiner.jsx';

export default class ItemList extends Component {
    swapiService = new SwapiService();
    state = {
        itemList: null,
        loading: true,
    };
    
    componentDidMount() {
        const { getData } = this.props;

        getData()
            .then((itemList) => {
                this.setState({
                    itemList,
                    loading: false
                })
            });
    }
    
    renderItems(arr) {
        return arr.map((item) => {
            const { id } = item;
            const label = this.props.renderItem(item);
            return (
                <li 
                    className="list-group-item list-group-item-action"
                    key={id}
                    onClick={()=> this.props.onItemSelected(id)}
                    >
                    {label}
                </li>
            );
        });
    }

    render() {
        const { itemList, } = this.state;
        if (!itemList) {
            return <Spiner />
        }

        const items = this.renderItems(itemList);

        // console.log(itemList)
        return (
            <div className="list-group">
                {items}
            </div>
        );
    };
};
