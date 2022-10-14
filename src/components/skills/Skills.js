import ProgressBar from "../_common/progressbar/ProgressBar";
import Title from "../_common/title/Title";
import "./Skills.css";

import skills from "../../data/skills.json";
import { useTranslation } from "react-i18next";

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
    const { t, i18n } = useTranslation("common");
    
    return (
        <div id="skills" className="skills">
            <Title content={t("skills.title")} /> 
            
            <div className="skills-container">
                <div className="item">
                    <h4>{t("skills.techSkillsTitle")}</h4>
                    <SkillItem list={techSkills} />

                    <div className="btn-container">
                        <a rel="noreferrer" target="_blank" href={reposUrl} className="btn btn-primary btn-ghost">
                            {t("skills.projetcsButton")}
                        </a>
                    </div>
                </div>

                <div className="item">
                    <h4>{t("skills.LangSkillsTitle")}</h4>
                    <SkillItem list={langSkills[i18n.language]} />
                </div>
            </div>
        </div>
    )
}

export default Skills;