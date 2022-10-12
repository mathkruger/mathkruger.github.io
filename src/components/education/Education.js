import Card from "../_common/card/Card";
import Title from "../_common/title/Title";

import "./Education.css";

function Education() {
    const education = [
        {
            institution: 'Fatec Itu "Dom Amaury Castanho"',
            startYear: 2015,
            endYear: 2017,
            course: "Tecnologia em Análise e Desenvolvimento de Sistemas"
        },
        {
            institution: 'E.E. Prof. Cícero Siqueira Campos',
            startYear: 2012,
            endYear: 2014,
            course: "Ensino Médio"
        }
    ];

    const courses = [
        {
            title: "Criando seu Primeiro App com Flutter | Balta.io",
            duration: "2 horas"
        },
        {
            title: "Criando APIs com ASP.NET Core e EF Core | Balta.io",
            duration: "3.6 horas"
        },
        {
            title: "Flutter Apps: Álcool ou Gasolina | Balta.io",
            duration: "3.6 horas"
        }
    ];

    return (
        <div id="education" className="education">
            <Title content="Formação" />
            
            <div className="education-container">
                <div className="item">
                    <h4>Educação formal</h4>
                    {
                        education.map((x, i) => (
                            <div style={{margin: 10 + "px"}}>
                                <Card key={i} title={x.institution}>
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