import React,{Component, Fragment} from 'react';
import './random-planet.scss';
import SwapiService from '../../../swapi-service.js';
import Spiner from '../spiner/spiner.jsx';

export default class RandomPlanet extends Component{
    swapiService = new SwapiService();

    state = {
        planet: {
            id: null,
            name: null,
            population: null,
            rotation: null,
            diameter: null,
            climate: null,
        },
        loading: true
    };
    componentDidMount() {
        this.updatePlanet();
        setInterval(this.updatePlanet, 10000);
    }
    updatePlanet =()=> {
        const id = Math.floor(Math.random()*15)+2;
        this.swapiService.getPlanet(id)
            .then((planet) => {
                this.setState({
                    planet: {
                        id: id,
                        name: planet.name,
                        population: planet.population,
                        rotation: planet.rotation_period,
                        diameter: planet.diameter,
                        climate: planet.climate,
                    },
                    loading: false,
                });
            });
    };

    render() {
        const { loading, planet } = this.state;
        const spinner = loading ? <Spiner/> : null;
        const content = !loading ? <PlanetView planet={planet} /> : null;
    return (
        <div className="card mb-3 planet-rand-card">
            {spinner}
            {content}
            </div>
    );
    }
}
const PlanetView = ({planet}) => {
    const { id, name, population, rotation, diameter, climate } = planet;
    return (
        <React.Fragment>
            <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                alt="" />
            <div className="text-cont">
                <h3 className="card-header planet-rand-header">{name}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Population: {population}</li>
                    <li className="list-group-item">Rotation period: {rotation}</li>
                    <li className="list-group-item">Diameter: {diameter}</li>
                    <li className="list-group-item">Climate: {climate}</li>
                </ul>
                <p className="lead buttMore">
                    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                </p>
            </div>
        </React.Fragment>
    );  
};