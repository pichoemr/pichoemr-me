import '../assets/styles/Skills.css';



function Skills() {
    const skills = []
    return (
        <div className="Skills">
            <h2>Skills</h2>
            {skills.map((item) => { <p>{item.name}</p> })}
        </div>
    );
}

export default Skills;
