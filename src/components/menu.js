import '../assets/styles/Menu.css';
import PixiCode from '../assets/images/pixicode_yellow.svg';
import { Link } from "react-router-dom";


function Menu() {
    return (
        <div className="Menu">
            <img src={PixiCode} alt='pixicode'></img>
            <div>
                <Link to="/">Home</Link>
                <Link to="/about-me">About Me</Link>
                <Link to="/experiences">Experiences</Link>
                <Link to="/skills">Skills</Link>
                <Link to="/services">Services</Link>
                <button onClick={redirectContact}>Contact</button>

            </div>
        </div>
    );

    function redirectContact() {
        window.location.replace(window.location.href + "contact");
    }
}

export default Menu;
