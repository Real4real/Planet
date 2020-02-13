import React, { Component } from 'react'
import SwapiService from '../../../swapi-service';
import PostList from './post-list/post-list.jsx';
import PostPagination from './post-pagination';
const Row = ({ left, right }) => {
    return (
        <div className="container-box">
            {left}
            {right}
        </div>
    )
};

export default class PostPage extends Component {
    state = {

    };
    swapiService = new SwapiService();
    render() {    
        const { getResource2 } = this.swapiService;
        const postList = (
            <PostList
                getData={getResource2}
                
            />
            
        );
        const postDetails = (
            <h1>Lorem ipsum dolor sit amet</h1>
        );

        return (
            <Row left={postList} right={postDetails} />
        )
    }
}
