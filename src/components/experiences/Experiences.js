import Card from "../_common/card/Card";
import Title from "../_common/title/Title";
import getMonthName from "../_common/getMonthName";
import { useTranslation } from "react-i18next";
import useData from "../../hooks/useData";
import "./Experiences.css";

function Experiences() {
    const { t, i18n } = useTranslation("common");
    const { data: experiences } = useData("experiences", i18n.language);

    const getDate = (date) => {
        const dateParts = date.split('-');
        const year = dateParts[0];
        const month = dateParts[1];
        const day = dateParts[2];

        console.log(dateParts);

        return new Date(year, month, day);
    }

    return (
        <div id="experiences" className="experiences">
            <Title content={t("experiences.title")} />

            <div className="terminal-timeline">
                {
                    experiences.map((x, i) => (
                        <Card key={i} title={x.name}>
                            <div>
                                <ul>
                                    <li>
                                        <strong>{x.company}</strong>
                                    </li>
                                    <li>
                                        { getMonthName(getDate(x.startDate).getMonth(), i18n.language) }/{ getDate(x.startDate).getFullYear() } -
                                        {
                                            x.endDate ? " " + getMonthName(getDate(x.endDate).getMonth(), i18n.language) + "/" + getDate(x.endDate).getFullYear() :
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