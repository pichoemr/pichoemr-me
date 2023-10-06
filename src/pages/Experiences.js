import '../assets/styles/Experiences.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Lenra from '../assets/images/lenra.jpeg';
import FP from '../assets/images/FP.png';
import ATL from '../assets/images/ATL.png';
import React, { useState, useEffect } from 'react';


function Experiences() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const experiences = [
        { id: "1", logo: Lenra, title: 'Lenra', poste: "Developer FullStack", description: 'Working as a developer FullStack i work on front in flutter and back in Elixir, I also lead the backoffice side', date: '09/2022-09/2023' },
        { id: "2", logo: ATL, title: 'Atout On Line', poste: "Developer FullStack", description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate pharetra dolor, eu semper magna. Pellentesque interdum nunc neque, ut gravida augue aliquam in. Mauris nec mi at odio consequat varius ullamcorper eu sem. Cras molestie lorem quis nunc interdum.', date: '2020-2021', entrpise: "" },
        { id: "3", logo: FP, title: 'Fitness Park', poste: "Developer FullStack", description: "I made the website for Fitness Park Heroes 2023", date: '2020-2021' },
        { id: "4", logo: Lenra, title: 'Lenra', poste: "Developper FullStack - Apprenticeship", description: 'I made an Apprenticeship of tw<o years at Lenra company, i worked on authentifficating system, data manegemtn system and many other features.', date: '09/2020-08/2022' },
    ]

    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: windowWidth > 820 ? 3 : 1,
        slidesToScroll: 1,
        // centerPadding: "70px",
        autoplay: false,
        cssEase: "linear",
    };

    return (
        <div className="Experiences">
            <h2>Experiences</h2>
            <Slider {...settings}>
                {experiences.map((item) => (
                    <div key={item.id} className='Experience'>
                        <img src={item.logo} alt="logo" />
                        <h2 id="title">{item.title}</h2>
                        <h3 id="poste"> {item.poste}</h3>
                        <p id="date">{item.date}</p>
                        <p id="description">{item.description}</p>
                    </div>))}
            </Slider>
        </div>
    );
}

export default Experiences;
