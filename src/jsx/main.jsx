import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import '../scss/main.scss';
import Header from './components/header/header.jsx';
import RandomPlanet from './components/random-planet/random-planet.jsx';
import { HashRouter, Route } from 'react-router-dom';
import PeoplePage from './components/people-page/people-page.jsx';
import PlanetlePage from './components/planet-page/planet-page.jsx';
import PostPage from './components/posts-page/posts-page.jsx';
import ItemDetails from './components/item-details/item-details.jsx';
import SwapiService from '../swapi-service';
import Menu from './components/menu-page/menu.jsx';

export default class App extends Component {
    swapiService = new SwapiService();
    
    render() { 
        const { getPlanet, getPlanetImage } = this.swapiService;
        const PlanetDetails = ({ itemId }) => {

            return (
                <ItemDetails
                    itemId={itemId}
                    getData={getPlanet}
                    getImageUrl={getPlanetImage}

                />
            )
        };
        return (
            <div>
                <HashRouter>
                    <Header /> 
                        <Route path="/" exact component={RandomPlanet} />
                        <Route path="/people" component={PeoplePage} />
                        <Route path="/planet" exact component={PlanetlePage} />    
                        <Route path="/planet/:id"
                        render={({match}) => {
                            const { id } = match.params;
                            return <PlanetDetails itemId={id}/>
                        }}
                        />    
                        <Route path="/random-posts" component={PostPage} />    
                        <Route path="/menu" component={Menu} />    

                </HashRouter>
                
                
            </div>
        );
    }

};
ReactDOM.render(<App/>, document.getElementById('root'));