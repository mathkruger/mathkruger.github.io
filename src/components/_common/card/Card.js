function Card(props) {
    return (
        <div className="terminal-card">
            <header>{props.title}</header>
            {props.children}
        </div>
    )
}

export default Card;