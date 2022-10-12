import "./Header.css";

function Header() {
    return (
        <div id="main-header" className="terminal-nav">
            <div className="terminal-logo">
                <div className="logo terminal-prompt">
                    <a href="/#" className="no-style">Matheus Kruger Dev</a>
                </div>
            </div>
            <nav className="terminal-menu">
                <ul>
                    <li><a className="menu-item" href="/#about">Sobre</a></li>
                    <li><a className="menu-item" href="/#skills">Skills</a></li>
                    <li><a className="menu-item" href="/#experiences">Experiências</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;