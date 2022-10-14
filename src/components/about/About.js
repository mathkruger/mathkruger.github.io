import { useTranslation } from "react-i18next";
import "./About.css";

function About(props) {

    const { t } = useTranslation("common");

    return (
        <div id="about" className="about">
            <div className="info-container">
                <figure className="user-photo">
                    <img alt={props.user.login} src={props.user.avatar_url} />
                    <figcaption>{props.user.login}</figcaption>
                </figure>
                <div className="user-info">
                    <h2>{t("about.title")}</h2>
                    <p>
                        {t("about.description")}
                    </p>

                    <ul>
                        <li><a rel="noreferrer" target="_blank" href={props.user.html_url}>Github</a></li>
                        <li><a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/mathkruger/">Linkedin</a></li>
                        <li><a rel="noreferrer" target="_blank" href="mailto:ms-kruger@hotmail.com">E-mail</a></li>
                        <li><a rel="noreferrer" target="_blank" href="https://wa.me/5511959472884">Whatsapp</a></li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default About;