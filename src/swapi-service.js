export default class SwapiService {

    _apiBase = 'https://swapi.co/api';


    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`)
        }
        return await res.json();
    };
    getResource2 = async (url) => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`)
        }
        return await res.json();
    };

    getAllPeople = async () => {
        const res = await this.getResource(`/people/`);
        return res.results
            .map(this._transformPerson)

    };
    getAllPeople2 = async () => {
        const res = await this.getResource(`/people/`);
        return res.results
            .map(this._transformPerson)

    };

    getPerson = async (id) => {
        const person = await this.getResource(`/people/${id}/`);
        return this._transformPerson(person);
    };

    getAllPlanets = async () => {
        const res = await this.getResource(`/planets/`);
        return res.results
            .map(this._transformPlanet)
            .slice(0, 5);
    };

    getPlanet = async (id) => {
        const planet = await this.getResource(`/planets/${id}/`);
        return this._transformPlanet(planet);
    };

    getAllStarships = async () => {
        const res = await this.getResource(`/starships/`);
        return res.results
            .map(this._transformStarship)
            .slice(0, 5);
    };

    getStarship = async (id) => {
        const starship = await this.getResource(`/starships/${id}/`);
        return this._transformStarship(starship);
    };

    getPersonImage = ({id}) => { 
        return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
    };
    getStarShipImage = ({ id }) => {
        return `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`
    };
    getPlanetImage = ({ id }) => {
        return `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`
    };

    _extractId = (item) => {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    };

    _transformPlanet = (planet) => {
        return {
            id: this._extractId(planet),
            name: planet.name,
            diameter: planet.diameter,
            gravity: planet.gravity,
            orbitalPeriod: planet.orbital_period,
            population: planet.population,
            terrain: planet.terrain,
            climate: planet.climate,
            rotationPeriod: planet.rotation_period,
        };
    };

    _transformStarship = (starship) => {
        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.cost_in_credits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargo_capacity
        }
    };

    _transformPerson = (person) => {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
        }
    }
}

// const service = new SwapiService();

// service.getResource2()
//     .then((body) => {
//         console.log(body);
//     });

// service.getStarship(3)
//     .then((body) => {
//         console.log(body)
//     });

// service.getPlanet(4)
//     .then((body) => {
//         console.log(body)
//     });
