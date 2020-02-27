import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './header.scss';

class Header extends Component {
    // current = () => {
    //     this.classNameCurrent =+ " active"
    // };
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
                        {/* <Link to="/" className="nav-link">Home</Link>    */}
                        <NavLink   
                            to="/" exact
                            className={classNameCurrent}
                            activeClassName=" active"
                            >
                            Home
                        </NavLink>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://github.com/Real4real/Planet">
                                GitHub
                            </a>
                        </li>
                        <li className="nav-item">
                        {/* <Link to="/planet" className={classNameCurrent}>Planets</Link> */}
                        <NavLink
                            to="/planet"
                            className={classNameCurrent}
                            activeClassName=" active"
                        >
                            Planets
                        </NavLink>
                        </li>
                        <li className="nav-item">
                        {/* <Link to="/people"
                            onClick={this.current()}
                            className={classNameCurrent}>People
                        </Link> */}
                        <NavLink
                            to="/people"
                            className={classNameCurrent}
                            activeClassName=" active"
                        >
                            People
                        </NavLink>
                        </li>
                        <li className="nav-item">
                            {/* <Link
                                to="/random-posts"
                                onClick={this.current()}
                                className={classNameCurrent}>
                                Posts
                            </Link> */}
                        
                        <NavLink
                            to="/random-posts"
                            className={classNameCurrent}
                            activeClassName=" active"
                        >
                            Posts
                        </NavLink>
                        </li>
                    <li className="nav-item">
                        {/* <Link
                            to="/menu"
                            className={classNameCurrent}>
                            Menu
                        </Link> */}

                        <NavLink
                            to="/menu"
                            className={classNameCurrent}
                            activeClassName=" active"
                        >
                            Menu
                        </NavLink>
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