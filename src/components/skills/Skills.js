function Skills(props) {
    const techSkills = [
        {
            name: "Angular",
            percentage: 95
        },
        {
            name: "React",
            percentage: 80
        },
        {
            name: "NodeJS",
            percentage: 75
        },
        {
            name: ".NET Core",
            percentage: 60
        },
        {
            name: "PHP",
            percentage: 60
        },
        {
            name: "Python",
            percentage: 40
        }
    ];

    return (
        <div id="skills" className="skills">
            <h3>Skills</h3>
            {
                techSkills.map((x, i) => (
                    <div key={i}>
                        <p>{x.name}</p>
                        <div className="progress-bar progress-bar-no-arrow">
                            <div className="progress-bar-filled" style={{width: x.percentage + "%"}} data-filled="Loading 60%"></div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Skills;