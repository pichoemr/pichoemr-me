import React from 'react';
import { slide as Menu } from 'react-burger-menu'
import '../assets/styles/BurgerMenu.css';
import PixiCode from '../assets/images/pixicode_yellow.svg';
import { Link } from "react-router-dom";



class BurgerMenu extends React.Component {
    render() {
        return (
            <Menu right>
                <img src={PixiCode} alt='pixicode'></img>

                <Link className="menu-item" to="/">Home</Link>
                <Link className="menu-item" to="/about-me">About Me</Link>
                <Link className="menu-item" to="/experiences">Experiences</Link>
                <Link className="menu-item" to="/skills">Skills</Link>
                <Link className="menu-item" to="/services">Services</Link>

                <button onClick={() => { window.location.href = "contact" }}>Contact</button>
            </Menu >
        );
    };


}



export default BurgerMenu;