import "./Experiences.css";

function Experiences() {
    const workExperiences = [
        {
            name: "Engenheiro de Software",
            company: "CI&T",
            startDate: new Date(2021, 1),
            endDate: null,
            description: `Trabalhando atualmente em um projeto internacional utilizando .NET e Angular como stack principal.`
        },
        {
            name: "Analista Desenvolvedor Pleno",
            company: "Datapar",
            startDate: new Date(2019, 5),
            endDate: new Date(2021, 1),
            description: `Atuava no desenvolvimento de sistemas web utilizando .NET Core 3.1 e Angular 9.`
        },
        {
            name: "Desenvolvedor Fullstack",
            company: "Agência MKT Now",
            startDate: new Date(2017, 10),
            endDate: new Date(2019, 5),
            description: `Desenvolvimento de layouts para e-commerce utilizando HTML5, CSS3 e JS. Desenvolvimento de aplicações WEB utilizando a framework PHP Laravel.`
        },
        {
            name: "Programador Front-End Júnior",
            company: "TopDeals - Negócios e Idéias",
            startDate: new Date(2017, 4),
            endDate: new Date(2017, 7),
            description: `Desenvolvia layouts de e-commerce Vtex e landing pages, utilizando html + css + js`
        },
        {
            name: "Estagiário de TI",
            company: "Softgreen",
            startDate: new Date(2016, 8),
            endDate: new Date(2017, 0),
            description: `Desenvolvia layouts de sites e sistemas. Dava suporte interno e ao cliente também.`
        },
        {
            name: "Estagiário de laboratório",
            company: "LSJ Sistemas",
            startDate: new Date(2016, 0),
            endDate: new Date(2017, 8),
            description: `Atuava como estagiário no laboratório de informática de uma escola de ensino fundamental 1 (crianças de 6 a 10 anos). Auxiliava os professores na preparação de ambiente e no desenvolvimento de aulas interativas (utilizando HTML, CSS e PHP).`
        }
    ];

    const getMonthName = (month) => {
        const monthNames = [
            "Jan",
            "Fev",
            "Mar",
            "Abr",
            "Mai",
            "Jun",
            "Jul",
            "Ago",
            "Set",
            "Out",
            "Nov",
            "Dez"
        ];

        return monthNames[month];
    }

    return (
        <div id="experiences" className="experiences">
            <h3>Experiências</h3>

            <div className="terminal-timeline">
                {
                    workExperiences.map((x, i) => (
                        <div key={i} className="terminal-card">
                            <header>{x.name}</header>
                            <div>
                                <ul>
                                    <li>
                                        <strong>{x.company}</strong>
                                    </li>
                                    <li>
                                        {getMonthName(x.startDate.getMonth())}/{x.startDate.getFullYear()} -
                                        {
                                            x.endDate ? " " + getMonthName(x.endDate.getMonth()) + "/" + x.endDate.getFullYear() :
                                                " Atualmente"
                                        }
                                    </li>
                                </ul>
                                <p>
                                    {x.description}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Experiences;