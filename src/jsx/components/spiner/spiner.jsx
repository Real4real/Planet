import React from 'react';
import './spiner.scss';

const Spiner = () => {
    return (
        <div className="spiner-container">
            {/* <img src={require("../../../img/Infinity-3s-200px.gif")} className="gif-spinner" alt="" /> */}
            <img src={require("../../../img/Infinity-1s-200px.svg")} className="gif-spinner" alt="" />
        </div>
    );
};
export default Spiner;