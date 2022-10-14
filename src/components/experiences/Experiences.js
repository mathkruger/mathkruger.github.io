import Card from "../_common/card/Card";
import Title from "../_common/title/Title";
import "./Experiences.css";

import experiences from "../../data/experiences.json";
import getMonthName from "../_common/getMonthName";
import { useTranslation } from "react-i18next";

function Experiences() {
    
    const { t, i18n } = useTranslation("common");

    return (
        <div id="experiences" className="experiences">
            <Title content={t("experiences.title")} />

            <div className="terminal-timeline">
                {
                    experiences[i18n.language].map((x, i) => (
                        <Card key={i} title={x.name}>
                            <div>
                                <ul>
                                    <li>
                                        <strong>{x.company}</strong>
                                    </li>
                                    <li>
                                        {getMonthName(new Date(x.startDate).getMonth(), i18n.language)}/{new Date(x.startDate).getFullYear()} -
                                        {
                                            x.endDate ? " " + getMonthName(new Date(x.endDate).getMonth(), i18n.language) + "/" + new Date(x.endDate).getFullYear() :
                                                " " + t("experiences.current")
                                        }
                                    </li>
                                </ul>
                                <p>
                                    {x.description}
                                </p>
                            </div>
                        </Card>
                    ))
                }
            </div>
        </div>
    )
}

export default Experiences;