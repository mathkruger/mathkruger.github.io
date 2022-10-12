import Card from "../_common/card/Card";
import Title from "../_common/title/Title";
import "./Experiences.css";

function Experiences() {
    const workExperiences = [
        {
            name: "Engenheiro de Software",
            company: "CI&T",
            startDate: new Date(2021, 1),
            endDate: null,
            description: `
            Atuando com desenvolvimento WEB em um alguns clientes de áreas de atuação diversas.
            Utiliza as tecnologias: Java Spring Boot e .NET para o backend e Angular 12 para o front`
        },
        {
            name: "Analista Desenvolvedor Pleno",
            company: "Datapar",
            startDate: new Date(2019, 5),
            endDate: new Date(2021, 1),
            description: `
            Atuando com desenvolvimento WEB de sistemas corporativos no ramo de logística.
            Utiliza as tecnologias: .Net Core para o backend e Angular para o front. `
        },
        {
            name: "Desenvolvedor Fullstack",
            company: "Agência MKT Now",
            startDate: new Date(2017, 10),
            endDate: new Date(2019, 5),
            description: `
            Desenvolvimento de interfaces de e-commerce com alto desempenho,
            usando técnicas front-end de desenvolvimento,dando preferência a linguagens puras, sem o uso de frameworks.
            Manutenção de sites já existentes, como também inclusão de textos de SEO e metatags.`
        },
        {
            name: "Programador Front-End Júnior",
            company: "TopDeals - Negócios e Idéias",
            startDate: new Date(2017, 4),
            endDate: new Date(2017, 7),
            description: `Desenvolvimento de interfaces de e-commerce com alta performance,
            usando técnicas front-end de desenvolvimento, dando preferência a linguagens puras, sem o uso de frameworks.
            Manutenção de sites já existentes, como também inclusão de textos de SEO e metatags.`
        },
        {
            name: "Estagiário de TI",
            company: "Softgreen",
            startDate: new Date(2016, 8),
            endDate: new Date(2017, 0),
            description: `
            Desenvolvimento de interfaces para sistemas na Web utilizando recursos como: HTML5, CSS3, Javascript, JQuery, Bootstrap, PHP, Java, etc.
            Algumas vezes também prestando suporte técnico para clientes.`
        },
        {
            name: "Estagiário de laboratório",
            company: "LSJ Sistemas",
            startDate: new Date(2016, 0),
            endDate: new Date(2017, 8),
            description: `
            LJS é uma empresa terceirizada que presta serviços nas salas de informática das escolas municipais da cidade de Itu.
            Trabalhava auxiliando na montagem de aulas de informática para crianças de 6 até 10 anos.
            Também prestava serviços de manutenção de computadores.
            `
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
            <Title content="Experiências" />

            <div className="terminal-timeline">
                {
                    workExperiences.map((x, i) => (
                        <Card key={i} title={x.name}>
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
                        </Card>
                    ))
                }
            </div>
        </div>
    )
}

export default Experiences;