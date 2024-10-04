import React from 'react';
import './header.css';

function Header() {
    return (
        <div id="header">
            <p id='logo'>LOGO</p>
            <ul id='header-list'>
                <li className="header-list-items"><a href="#">Examples</a></li>
                <li className="header-list-items"><a href="#">About</a></li>
                <li className="header-list-items"><a href="#">Contact</a></li>
            </ul>
        </div>
    )
}

export default Header;