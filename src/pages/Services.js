import '../assets/styles/Services.css';
import Server from "../assets/images/Server.svg";
import Keyboard from "../assets/images/Logo.svg";



function Services() {
    return (
        <div className="Services">
            <div className='Line' style={{ height: 5, background: '#F4D160', borderRadius: 4 }} />
            <div className='Row'>
                <div className='Vertical' style={{ width: 5, background: '#F4D160', borderRadius: 4 }} />
                <div className='Column'>
                    <h1>How can i help you ?</h1>
                    <p>
                        I'm here to help you realize your digital aspirations. As a freelance full-stack developer, I offer a diverse range of services. Whether you're aiming to establish a captivating online presence, develop custom web applications, or overcome intricate technical challenges, I've got the expertise you need. From crafting engaging front-end designs to optimizing user experiences, and from robust back-end development to efficient database management, I provide a comprehensive suite of services tailored to your unique requirements. Let's collaborate and transform your ideas into a strong digital reality.                        </p>
                </div>
            </div>
            <div className='Line' style={{ height: 5, background: '#F4D160', borderRadius: 4 }} />
            <div className='Column buttons'>
                <button>
                    <img src={Keyboard} alt='server icone'></img>
                    Development
                </button>
                <button>
                    <img src={Server} alt='server icone'></img>
                    Deploy
                </button>
            </div>
        </div>
    );
}

export default Services;
