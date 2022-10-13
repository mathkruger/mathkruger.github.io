import ProgressBar from "../_common/progressbar/ProgressBar";
import Title from "../_common/title/Title";
import "./Skills.css";

function SkillItem({ list }) {

    return (
        <>
            {
                list.map((x, i) => (
                    <div key={i}>
                        <ProgressBar {...x} />
                    </div>
                ))
            }
        </>
    )
}

function Skills({ reposUrl }) {
    const techSkills = [
        {
            label: "Angular",
            percentage: 95,
            icon: "angularjs-plain"
        },
        {
            label: "React",
            percentage: 80,
            icon: "react-original"
        },
        {
            label: "NodeJS",
            percentage: 75,
            icon: "nodejs-plain"
        },
        {
            label: ".NET Core",
            percentage: 60,
            icon: "dotnetcore-plain"
        },
        {
            label: "PHP",
            percentage: 60,
            icon: "php-plain"
        },
        {
            label: "Python",
            percentage: 40,
            icon: "python-plain"
        }
    ];
    
    const langSkills = [
        {
            label: "Português",
            percentage: 100,
            icon: ""
        },
        {
            label: "Inglês",
            percentage: 98,
            icon: ""
        },
        {
            label: "Espanhol",
            percentage: 40,
            icon: ""
        },
        {
            label: "Alemão",
            percentage: 5,
            icon: ""
        },
    ];
    
    return (
        <div id="skills" className="skills">
            <Title content="Habilidades" />
            
            <div className="skills-container">
                <div className="item">
                    <h4>Tecnologias</h4>
                    <SkillItem list={techSkills} />

                    <div className="btn-container">
                        <a rel="noreferrer" target="_blank" href={reposUrl} className="btn btn-primary btn-ghost">Projetos</a>
                    </div>
                </div>

                <div className="item">
                    <h4>Idiomas</h4>
                    <SkillItem list={langSkills} />
                </div>
            </div>
        </div>
    )
}

export default Skills;