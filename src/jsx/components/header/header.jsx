import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

class Header extends Component {
    current = () => {
        this.classNameCurrent =+ " active"
    };
    render() {
        let classNameCurrent = "nav-link";
    return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary header-nav">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03"
                        aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor03">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/" className={classNameCurrent}>Home</Link>   
                        </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://github.com/Real4real/Planet">
                            GitHub
                        </a>
                    </li>
                        <li className="nav-item">
                        <Link to="/planet" className={classNameCurrent}>Planets</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/people"
                            onClick={this.current()}
                            className={classNameCurrent}>People</Link>
                        </li>
                        <li className="nav-item">
                        <Link
                            to="/random-posts"
                            onClick={this.current()}
                            className={classNameCurrent}>
                        Posts
                        </Link>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
                        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
            );
        }
};
export default Header;