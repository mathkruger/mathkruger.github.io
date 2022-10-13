import Card from "../_common/card/Card";
import Title from "../_common/title/Title";
import "./Experiences.css";

import experiences from "../../data/experiences.json";
import getMonthName from "../_common/getMonthName";

function Experiences() {
    return (
        <div id="experiences" className="experiences">
            <Title content="Experiências" />

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
                                        {getMonthName(new Date(x.startDate).getMonth())}/{new Date(x.startDate).getFullYear()} -
                                        {
                                            x.endDate ? " " + getMonthName(new Date(x.endDate).getMonth()) + "/" + new Date(x.endDate).getFullYear() :
                                                " Atualmente"
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