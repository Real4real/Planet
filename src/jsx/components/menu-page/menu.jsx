import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './menu.scss'

const Menu = () => {
    let links = [
        {label: 'Home'},
        {label: 'About'},
        {label: 'Portfolio'},
        {label: 'Contact Us'}
    ];

    // const activeStyle = " is-active";
    function clickItem(e) {
        e.preventDefault();
        console.log(e)
    }
    const [active, setActive] = useState();
    let MenuRender = (
        

            links.map((link, index) => (
                <li key={index}
                    onClick={() => setActive(link.label)}
                    className="nav-item"
                >
                    <a  
                        // onClick={setActive('is-active')}
                        className={active === link.label ? "nav-link active" : "nav-link" }
                        >
                        {link.label}
                    </a>
                </li>
            ))

    );
    
    return (
        <div className="menu-cont">
            <ul className="nav nav-pills flex-column">
                {MenuRender}
            </ul>
        </div>
        
    )
};
export default Menu;
