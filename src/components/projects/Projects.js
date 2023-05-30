import { useTranslation } from "react-i18next";
import Title from "../_common/title/Title";
import Card from "../_common/card/Card";

import "./Projects.css";
import useUser from "../../hooks/useUser";
import useData from "../../hooks/useData";

function Projects() {
    const { t, i18n } = useTranslation("common");
    const { user } = useUser();
    const { data: projects } = useData("projects", i18n.language);

    return (
        <div id="projects" className="projects">
            <Title content={t("projects.title")} /> 
            
            <div className="projects-container">
                {
                    projects.map((x, i) => (
                        <div key={i} className="item">
                            <Card title={x.name}>
                                <ul className="project-content">
                                    <li className="description">{x.description}</li>
                                    <li>
                                        <a target="_blank" rel="noreferrer" href={x.repoUrl}>Repo</a>
                                    </li>
                                    {
                                        x.url && (
                                            <li>
                                                <a target="_blank" rel="noreferrer" href={x.url}>Website</a>
                                            </li>
                                        )
                                    }
                                </ul>
                            </Card>
                        </div>
                    ))
                }
            </div>

            <div className="btn-container">
                <a rel="noreferrer" target="_blank" href={user?.html_url + "?tab=repositories"} className="btn btn-primary btn-ghost">
                    {t("projects.moreProjectsButton")}
                </a>
            </div>
        </div>
    )
}

export default Projects;