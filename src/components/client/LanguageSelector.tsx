import { getLangFromUrl } from "../../i18n/utils";

export function LanguageSelector() {
  const lang = getLangFromUrl(new URL(location.href));
  const flag = lang === "en" ? "/br.png" : "/us.png";

  const changeLanguage = () => {
    const url = location.href
    let urlToRedirect = url;

    if (url.includes("/en")) {
      urlToRedirect = url.replace("/en", "/pt-BR");
    } else if (url.includes("/pt-BR")) {
      urlToRedirect = url.replace("/pt-BR", "/en");
    }

    location.href = urlToRedirect;
  }

  return (
    <button
      onClick={() => changeLanguage()}
      style={{
        width: "30px",
        height: "25px",
        padding: "0 5px",
      }}
      className="btn btn-ghost"
    >
      <img
        src={flag}
        alt="Change Language"
        style={{
          width: "25px",
          height: "20px",
        }}
      />
    </button>
  );
}
