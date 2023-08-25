import Arrow from '../assets/images/ArrowBarDown.svg';
import Emric from '../assets/images/emric2.JPG';
import '../assets/styles/Home.css';



function Home() {
    return (
        <div className="Home">
            <div className="puce">
                <div style={{ width: 20, height: 20, background: '#F4D160', borderRadius: 25 }}></div>
                <div style={{ width: 20, height: 20, background: '#F4D160', borderRadius: 25 }}></div>
                <div style={{ width: 20, height: 20, background: '#F4D160', borderRadius: 25 }}></div>
                <div style={{ width: 20, height: 20, background: '#F4D160', borderRadius: 25 }}></div>
            </div>
            <div className="Column">
                <div className="title">
                    <h2 id="firstName">Emric</h2>
                    <h2 id="LastName">Pichonnier</h2>
                    <h3>Developper FullStack Freelance</h3>
                </div>
                <div id="ArrowContainer">
                    <div id="Arrow" style={{ width: 86, height: 200, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 5, display: 'inline-flex' }}>
                        <div style={{ width: 2, height: 100, background: '#F4D160' }} />
                        <div style={{ width: 20, height: 20, position: 'relative' }}>
                            <img src={Arrow} alt='arrow' />
                        </div>
                    </div>
                    <p>Scroll to discover more about me</p>
                </div>
            </div>
            <div id="Emric" style={{ background: 'white', overflow: 'hidden' }}>
                <img style={{ top: 0, position: 'absolute' }} src={Emric} alt="Emric" />
            </div>
        </div>
    );
}

export default Home;
