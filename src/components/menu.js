import '../assets/styles/Menu.css';
import Emric from '../assets/images/emric2.JPG'; // Tell webpack this JS file uses this image

function Menu() {
    return (
        <div className="Menu">
            <div class="rounded-image-container">
                <img src={Emric} alt="Emric Pichonnier"></img>
            </div>
            <h2>Emric Pichonnier</h2>
            <h3>Developper FullStack FreeLance</h3>
            <div className="ulContainer">
                <ul>
                    <li>Home</li>
                    <li>Scolar</li>
                    <li>Experiences</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    );
}

export default Menu;
