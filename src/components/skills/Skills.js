import ProgressBar from "../_common/progressbar/ProgressBar";
import Title from "../_common/title/Title";
import "./Skills.css";

import skills from "../../data/skills.json";

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
    const { techSkills, langSkills } = skills;
    
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