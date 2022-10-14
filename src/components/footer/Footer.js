import { useTranslation } from "react-i18next";
import "./Footer.css";

import pack from "../../../package.json";

function Footer() {
    
    const { t } = useTranslation("common");

    return (
        <>
            <hr />
            <footer>
                <p>{new Date().getFullYear()} - {t("footer.version")}: {pack.version}</p>
                <a href="/#">{t("footer.top")}</a>
            </footer>
            <hr />
        </>
    )
}

export default Footer;