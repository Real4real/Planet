import React,{Component} from 'react';
import './person-details.scss';
import SwapiService from '../../../swapi-service';

export default class PersonDetails extends Component {

    swapiService = new SwapiService();

    state = {
        person: null,
        image: null,
    };

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps) {
        if (this.props.personId !== prevProps.personId) {
            this.updatePerson();
        }
    }

    updatePerson() {
        const { personId, getData, getImageUrl } = this.props;
        if (!personId) {
            return;
        }

        getData(personId)
            .then((person) => {
                this.setState({ person, image: getImageUrl(person)});
            });
    }

    render() {

        const { person, image } = this.state;
        if (!person) {
            return <span>Select a person from a list</span>;
        }

        const { id, name, gender,
            birthYear, eyeColor } = person;

        return (
            <div className="person-details card">
                <img className="person-image"
                    src={image}
                    alt="character" />

                <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Gender</span>
                            <span>{gender}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Birth Year</span>
                            <span>{birthYear}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Eye Color</span>
                            <span>{eyeColor}</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
};
// export default class PersonDetails extends Component{

//     swapiService = new SwapiService();
//     state = {
//         item: null,
//         image: null
//     };
//     componentDidMount() {
//         this.updateItem();
//     }
//     componentDidUpdate(prevProps) {
//         if (this.props.itemId !== prevProps.itemId) {
//             this.updateItem();
//         }
//     }
//     updateItem() {
//         const { itemId, getData, getImageUrl } = this.props;
//         if (!itemId) {
//             return;
//         }
//         getData(itemId)
//             .then((item)=> {
//                 this.setState({
//                     item,
//                     image: getImageUrl(item)
//                 })
//             })
//     }
//     render() {
//         const { item,image } = this.state;
//         if (!item) {
//             return (
//                 <div className="alert alert-dismissible alert-warning">
//                     <button type="button" className="close" data-dismiss="alert">&times;</button>
//                     <h4 className="alert-heading">Warning!</h4>
//                     <p className="mb-0">Best check yo self, you're not looking too good. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, <a href="#" className="alert-link">vel scelerisque nisl consectetur et</a>.</p>
//                 </div>
//             )
//         }
//         const { id, name, gender, birthYear, eyeColor } = item;
        
        
//         return (
//             <div className="details">
//                 <div className="card mb-3">
//                     <h3 className="card-header">{name}</h3>
//                     <div className="card-body">
//                         <h5 className="card-title">Special title treatment</h5>
//                         <h6 className="card-subtitle text-muted">Support card subtitle</h6>
//                     </div>
//                     <img src={image}
//                         alt="character" />
//                         <div className="card-body">
//                             <p className="card-text">Some quick example text to build on the card title and make up the bulk
//                                 of the card's content.</p>
//                         </div>
//                         <ul className="list-group list-group-flush">
//                         <li className="list-group-item">Gender: {gender}</li>
//                             <li className="list-group-item">Birth Year:{birthYear}</li>
//                             <li className="list-group-item">Eye Color:{eyeColor}</li>
//                         </ul>
//                         <div className="card-body">
//                             <a href="#" className="card-link">More about character</a>
//                         </div>
//                         <div className="card-footer text-muted">
//                             SWTOR
//                         </div>
//                 </div>

//             </div>
//         );
//     }
// };