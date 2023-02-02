import React from "react";
import './header.css';

const Header = (props) => {
    return (
        <>
            
            <div className="top-bar">
                <div className="top-bar-left">
                <ul className="menu">
                    <li className="menu-text">DESENIO</li>
                    <li><a href="#">Prints</a></li>
                    <li><a href="#">Picture Frames</a></li>
                </ul>
                </div>
                <div className="top-bar-right">
                <ul className="menu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">New In</a></li>
                    <li><a href="#">Bestsellers</a></li>
                    <li><a href="#">Gallery</a></li>
                </ul>
                </div>
            </div>
        </>
        
    )
}

export default Header