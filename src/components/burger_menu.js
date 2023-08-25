import React from 'react';
import { slide as Menu } from 'react-burger-menu'
import '../assets/styles/BurgerMenu.css';
import PixiCode from '../assets/images/pixicode.svg';


class BurgerMenu extends React.Component {
    render() {
        return (
            <Menu right>
                <img src={PixiCode} alt='pixicode'></img>

                <a id="home" className="menu-item" href='/'>Home</a>
                <a id="experiences" className="menu-item" href='/'>Experiences</a>
                <a id="skills" className="menu-item" href='/'>Skills</a>
                <a id="contact" className="menu-item" href='/'>Contact</a>
            </Menu>
        );
    }
}


export default BurgerMenu;