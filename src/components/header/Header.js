import { useContext } from "react";
import { ThemeContext } from "../_common/Theme";
import "./Header.css";

function Header() {

    const { dark, toggle } = useContext(ThemeContext);

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
                    <li><a className="menu-item" href="/#skills">Habilidades</a></li>
                    <li><a className="menu-item" href="/#education">Formação</a></li>
                    <li><a className="menu-item" href="/#experiences">Experiências</a></li>
                </ul>
            </nav>
            <button onClick={toggle} className="toggle-button btn btn-default btn-ghost">
                { dark ? "☀️" : "🌙" }
            </button>
        </div>
    )
}

export default Header;