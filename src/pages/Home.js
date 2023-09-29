import Emric from '../assets/images/emric2.JPG';
import Linkedin from '../assets/images/Linkedin.svg';
import Github from '../assets/images/Github.svg';
import Twitter from '../assets/images/Twitter.svg';

import '../assets/styles/Home.css';



function Home() {
    return (
        <div className="Home">
            <h3 id='freelance'>FullStack Freelance Developer</h3>
            <div id="Emric" style={{ background: 'white', overflow: 'hidden' }}>
                <img style={{ top: 0, position: 'absolute' }} src={Emric} alt="Emric" />
            </div>
            <div className='socialLink'>
                <a href="https://www.github.com/pichoemr/" target="_blank" rel="noopener noreferrer"><img src={Github} alt='github link'></img></a>
                <a href="https://www.linkedin.com/in/emric-pichonnier/" target="_blank" rel="noopener noreferrer"><img src={Linkedin} alt='linkedin link'></img></a>
                <a href="https://twitter.com/pichoemr" target="_blank" rel="noopener noreferrer"><img src={Twitter} alt='twitter link'></img></a>

            </div>
            <div className='Column'>
                <div className="title AdaptiveFlex">
                    <h2 id="firstName">Emric</h2>
                    <h2 id="LastName">Pichonnier</h2>
                </div>
                <div className='yellowLine' />
                <div id='welcomeBlock'>
                    <div className='yellowColumn' />
                    <h3 id='welcome'>Welcome</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate pharetra dolor, eu semper magna. Pellentesque interdum nunc neque, ut gravida augue aliquam in. Mauris nec mi at odio consequat varius ullamcorper eu sem. Cras molestie lorem quis nunc interdum.
                    </p>
                </div>
                <div className='contactRow'>
                    <button>
                        About me
                    </button>
                    <button>
                        Contact
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Home;
