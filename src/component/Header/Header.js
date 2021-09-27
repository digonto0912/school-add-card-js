import React from 'react';
import "./Header.css";

const Header = () => {
    return (
        // header box style
        <div className="topHeader">
            <h1>Top School</h1>
            <p>1,000 TK er moddhe, world er best top 10 school !!!</p>
            <h1>Total Budget: <span className="span-color-white">1,000</span>TK</h1>
        </div>
    );
};

export default Header;