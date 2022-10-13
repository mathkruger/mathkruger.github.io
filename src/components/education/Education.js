import Card from "../_common/card/Card";
import Title from "../_common/title/Title";

import education from "../../data/education.json";

import "./Education.css";

function Education() {

    const { formalEducation, courses } = education;

    return (
        <div id="education" className="education">
            <Title content="Formação" />
            
            <div className="education-container">
                <div className="item">
                    <h4>Educação formal</h4>
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
                    <h4>Cursos</h4>
                    <ul>
                        {
                            courses.map((x, i) => (
                                <li key={i}><strong>{x.title}</strong> - {x.duration}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Education;