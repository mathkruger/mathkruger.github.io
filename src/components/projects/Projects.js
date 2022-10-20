import { useTranslation } from "react-i18next";
import Title from "../_common/title/Title";
import Card from "../_common/card/Card";

import "./Projects.css";

function Projects({ reposUrl }) {
    const { t } = useTranslation("common");

    return (
        <div id="projects" className="projects">
            <Title content={t("projects.title")} /> 
            
            <div className="projects-container">
                <div className="item">
                    <Card title="Projeto 1">
                        <p>Que projetaço hein!</p>
                    </Card>
                </div>

                <div className="item">
                    <Card title="Projeto 1">
                        <p>Que projetaço hein!</p>
                    </Card>
                </div>

                <div className="item">
                    <Card title="Projeto 1">
                        <p>Que projetaço hein!</p>
                    </Card>
                </div>

                <div className="item">
                    <Card title="Projeto 1">
                        <p>Que projetaço hein!</p>
                    </Card>
                </div>

                <div className="item">
                    <Card title="Projeto 1">
                        <p>Que projetaço hein!</p>
                    </Card>
                </div>

                <div className="item">
                    <Card title="Projeto 1">
                        <p>Que projetaço hein!</p>
                    </Card>
                </div>
            </div>

            <div className="btn-container">
                <a rel="noreferrer" target="_blank" href={reposUrl} className="btn btn-primary btn-ghost">
                    {t("projects.moreProjectsButton")}
                </a>
            </div>
        </div>
    )
}

export default Projects;