import { useContext } from "react";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../_common/languageSelector/LanguageSelector";
import { ThemeContext } from "../_common/Theme";
import "./Header.css";

function Header() {

    const { dark, toggle } = useContext(ThemeContext);
    const { t } = useTranslation("common");

    return (
        <div id="main-header" className="terminal-nav">
            <div className="terminal-logo">
                <div className="logo terminal-prompt">
                    <a href="/#" className="no-style">Matheus Kruger Dev</a>
                </div>
            </div>
            <nav className="terminal-menu">
                <ul>
                    <li><a className="menu-item" href="/#about">{t("header.menu.about")}</a></li>
                    <li><a className="menu-item" href="/#skills">{t("header.menu.skills")}</a></li>
                    <li><a className="menu-item" href="/#education">{t("header.menu.education")}</a></li>
                    <li><a className="menu-item" href="/#experiences">{t("header.menu.experiences")}</a></li>
                </ul>
            </nav>
            
            <div className="btn-group">
                <button onClick={toggle} className="toggle-button btn btn-default btn-ghost">
                    { dark ? "☀️" : "🌙" }
                </button>
                <LanguageSelector />
            </div>
        </div>
    )
}

export default Header;