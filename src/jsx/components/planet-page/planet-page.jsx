import React, { useState  } from 'react';
import { withRouter } from 'react-router-dom';
import './planet-page.scss';
import ItemList from '../item-list/item-list.jsx';
import SwapiService from '../../../swapi-service';
import ItemDetails from '../item-details/item-details.jsx';


const Row = ({ left, right }) => {
    return (
        <div className="container-box">
            {left}   
        </div>
    )
};

// function clickItem() {
//     console.log("clicked")
// }

let List = () => {
    return (
        <div>
            <h1>asf</h1>
        </div >
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

    const Butt = () => {
        let [clikable, setClickable] = useState(false);
        let clasname = "btn";

        if (clikable) {
            clasname += " btn-warning"
        }
        return (
                <button className={clasname}
                    onClick={() => setClickable(clikable => !clikable)}>
                    Button 1
                </button>
            
        )
    };
        

        // const planetDetails = (
        //     <ItemDetails
        //         itemId={this.state.selectedItem}
        //         getData={getPlanet}
        //         getImageUrl={getPlanetImage}
        //     />
        // );
    return (
        <div>

            <Row left={planetList}
                
            />
            <Butt/>
            <Butt />
            <List/>
        </div>
        );

}
export default withRouter(PlanetlePage);