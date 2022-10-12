import { useState } from "react";
import "./Header.css";

function Header() {

    const [ isDark, setIsDark ] = useState(true);

    const toggleDarkMode = () => {
        document.body.classList.toggle("dark");

        if (isDark) {
            setIsDark(false);
        }
        else {
            setIsDark(true);
        }
    };

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
            <button onClick={toggleDarkMode} className="toggle-button btn btn-default btn-ghost">
                { isDark ? "☀️" : "🌙" }
            </button>
        </div>
    )
}

export default Header;