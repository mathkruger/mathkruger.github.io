import { useTranslation } from "react-i18next";
import us from "../../../images/us.png";
import br from "../../../images/br.png";

function LanguageSelector() {

    const { i18n } = useTranslation("common");

    const flagsToShow = {
        "pt-BR": us,
        "en": br
    };

    const changeLanguage = () => {
        switch (i18n.language) {
            case "en":
                i18n.changeLanguage("pt-BR");
            break;

            default:
            case "pt-BR":
                i18n.changeLanguage("en");
            break;
        }

        window.localStorage.setItem("selectedLanguage", i18n.language);
    }

    return (
        <button style={{
            width: "30px",
            height: "25px",
            padding: "0 5px"
        }} className="btn btn-ghost" onClick={changeLanguage}>
            <img src={flagsToShow[i18n.language]} alt="Change Language" style={{
                width: "25px"
            }} />
        </button>
    )
}

export default LanguageSelector;