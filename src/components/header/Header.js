function Header() {
    return (
    <div className="terminal-nav">
        <div className="terminal-logo">
            <div className="logo terminal-prompt">
                <a href="/" className="no-style">Matheus Kruger Dev</a>
            </div>
        </div>
        <nav className="terminal-menu">
            <ul>
                <li><a className="menu-item" href="/#about">Sobre</a></li>
                <li><a className="menu-item" href="/#experiences">Experiências</a></li>
                <li><a className="menu-item" href="/#projects">Projetos</a></li>
            </ul>
        </nav>
    </div>
    )
}

export default Header;