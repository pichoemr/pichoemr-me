import '../assets/styles/Menu.css';
import PixiCode from '../assets/images/pixicode.svg';


function Menu() {
    return (
        <div className="Menu">
            <img src={PixiCode} alt='pixicode'></img>
            <div>
                <a href='/'>Home</a>
                <a href='/'>Experiences</a>
                <a href='/'>Skills</a>
                <button>Contact</button>
            </div>
        </div>
    );
}

export default Menu;
