import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import '../scss/main.scss';
import Header from './components/header/header.jsx';
import RandomPlanet from './components/random-planet/random-planet.jsx';
import ItemList from './components/item-list/item-list.jsx';
import PersonDetails from './components/person-details/person-details.jsx';
import { HashRouter, Route } from 'react-router-dom';
import PeoplePage from './components/people-page/people-page.jsx';
import PlanetlePage from './components/planet-page/planet-page.jsx';
import PostPage from './components/posts-page/posts-page.jsx';

export default class App extends Component {
    
    render() { 
        return (
            <div>
                <HashRouter>
                    <Header /> 
                        <Route path="/" exact component={RandomPlanet} />
                        <Route path="/people" component={PeoplePage} />
                        <Route path="/planet" component={PlanetlePage} />    
                        <Route path="/random-posts" component={PostPage} />    

                </HashRouter>
                
                
            </div>
        );
    }

};
ReactDOM.render(<App/>, document.getElementById('root'));