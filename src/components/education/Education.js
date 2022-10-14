import Card from "../_common/card/Card";
import Title from "../_common/title/Title";

import education from "../../data/education.json";

import "./Education.css";

import {useTranslation} from "react-i18next";

function Education() {

    const { formalEducation, courses } = education;
    const {t, i18n} = useTranslation("common");

    return (
        <div id="education" className="education">
            <Title content={t("education.title")} />

            <div className="education-container">
                <div className="item">
                    <h4>{t("education.formalTitle")}</h4>
                    {
                        formalEducation[i18n.language].map((x, i) => (
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
                            courses[i18n.language].map((x, i) => (
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