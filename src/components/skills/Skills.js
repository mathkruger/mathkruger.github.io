import ProgressBar from "../_common/progressbar/ProgressBar";
import Title from "../_common/title/Title";
import "./Skills.css";

function SkillItem({ list }) {

    return (
        <>
            {
                list.map((x, i) => (
                    <div key={i}>
                        <ProgressBar label={x.label} percentage={x.percentage} />
                    </div>
                ))
            }
        </>
    )
}

function Skills() {
    const techSkills = [
        {
            label: "Angular",
            percentage: 95
        },
        {
            label: "React",
            percentage: 80
        },
        {
            label: "NodeJS",
            percentage: 75
        },
        {
            label: ".NET Core",
            percentage: 60
        },
        {
            label: "PHP",
            percentage: 60
        },
        {
            label: "Python",
            percentage: 40
        }
    ];
    
    const langSkills = [
        {
            label: "Português",
            percentage: 100
        },
        {
            label: "Inglês",
            percentage: 98
        },
        {
            label: "Espanhol",
            percentage: 40
        },
        {
            label: "Alemão",
            percentage: 5
        },
    ];
    
    return (
        <div id="skills" className="skills">
            <Title content="Habilidades" />
            
            <div className="skills-container">
                <div className="item">
                    <h4>Tecnologias</h4>
                    <SkillItem list={techSkills} />
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