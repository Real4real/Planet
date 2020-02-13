import React, { Component } from 'react';
import SwapiService from '../../../../swapi-service.js';
import Spiner from '../../spiner/spiner.jsx';
import Pagination from '../post-pagination.js';

export default class PostList extends Component {
    swapiServece = new SwapiService();
    state = {
        itemList: null,
        currentPage: 1,
        postsPerPage: 10,
    }
    componentDidMount() {
        const { getData } = this.props;

        getData()
            .then((itemList) => {
                this.setState({
                itemList
            })
        })
    }
    renderItems(arr) {
        return arr.map((item) => {
            const {id} = item
            return (
                <li className="list-group-item list-group-item-action"
                    key={id}
                >
                    {item.title}
                </li>
            )
        })
    }
    onPaginate = (number) => {
        this.setState({
            currentPage: number
        })
    }
    
    render() {
        const { itemList, currentPage, postsPerPage } = this.state;
        if (!itemList) {
            return <Spiner />
        }

        const indexOfLastPost = currentPage * postsPerPage;
        const indexOfFirstPost = indexOfLastPost - postsPerPage;

        const items = this.renderItems(itemList);
        const currentPosts = items.slice(indexOfFirstPost, indexOfLastPost);
        return (
            <div className="list-group">
                {currentPosts}
                <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={itemList.length}
                    paginate={this.onPaginate}
                    />
            </div>
            
        )
    }
}


