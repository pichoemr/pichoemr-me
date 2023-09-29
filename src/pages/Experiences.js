import '../assets/styles/Experiences.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Experiences() {
    const experiences = [
        { id: "1", title: 'Test 1', poste: "dev", description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate pharetra dolor, eu semper magna. Pellentesque interdum nunc neque, ut gravida augue aliquam in. Mauris nec mi at odio consequat varius ullamcorper eu sem. Cras molestie lorem quis nunc interdum.', date: '2020-2021', entrpise: "" },
        { id: "2", title: 'Test 1', poste: "dev", description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate pharetra dolor, eu semper magna. Pellentesque interdum nunc neque, ut gravida augue aliquam in. Mauris nec mi at odio consequat varius ullamcorper eu sem. Cras molestie lorem quis nunc interdum.', date: '2020-2021', entrpise: "" },
        { id: "3", title: 'Test 1', poste: "dev", description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate pharetra dolor, eu semper magna. Pellentesque interdum nunc neque, ut gravida augue aliquam in. Mauris nec mi at odio consequat varius ullamcorper eu sem. Cras molestie lorem quis nunc interdum.', date: '2020-2021', entrpise: "" },
        { id: "4", title: 'Test 1', poste: "dev", description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate pharetra dolor, eu semper magna. Pellentesque interdum nunc neque, ut gravida augue aliquam in. Mauris nec mi at odio consequat varius ullamcorper eu sem. Cras molestie lorem quis nunc interdum.', date: '2020-2021', entrpise: "" },
    ]

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "60px",
        speed: 2000,
        autoplay: true,
        cssEase: "linear",
    };

    return (
        <div className="Experiences">
            <h2>Experiences</h2>
            <Slider {...settings}>
                {experiences.map((item) => (
                    <div key={item.id} className='Experience'>
                        <h2 id="title">{item.title}</h2>
                        <h3 id="poste"> {item.poste}</h3>
                        <p id="entreprise">{item.entreprise}</p>
                        <p id="date">{item.date}</p>
                        <p id="description">{item.description}</p>
                    </div>))}
            </Slider>
        </div>
    );
}

export default Experiences;
