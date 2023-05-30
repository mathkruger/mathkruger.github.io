import Card from "../_common/card/Card";
import Title from "../_common/title/Title";
import "./Education.css";

import {useTranslation} from "react-i18next";
import useData from "../../hooks/useData";

function Education() {
    const {t, i18n} = useTranslation("common");
    const { data: formalEducation } = useData("formalEducation", i18n.language);
    const { data: courses } = useData("courses", i18n.language);

    return (
        <div id="education" className="education">
            <Title content={t("education.title")} />

            <div className="education-container">
                <div className="item">
                    <h4>{t("education.formalTitle")}</h4>
                    {
                        formalEducation.map((x, i) => (
                            <div key={i} style={{margin: 10 + "px"}}>
                                <Card title={x.institution}>
                                    <div>
                                        <ul>
                                            <li>{x.course}</li>
                                            <li>{x.startYear} - {x.endYear}</li>
                                        </ul>
                                    </div>
                                </Card>
                            </div>
                        ))
                    }
                </div>

                <div className="item">
                    <h4>{t("education.coursesTitle")}</h4>
                    <ul>
                        {
                            courses.map((x, i) => (
                                <li key={i}><strong>{x.title}</strong> - {x.duration} {t("education.hour")}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Education;