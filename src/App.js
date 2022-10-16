import { useEffect, useState } from "react";
import Theme from "./components/_common/Theme";

import * as fallbackUserData from "./data/fallbackUserData.json";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Experiences from "./components/experiences/Experiences";
import Skills from "./components/skills/Skills";
import Footer from "./components/footer/Footer";
import Education from "./components/education/Education";
import { useTranslation } from "react-i18next";

function App() {
  const [ user, setUser ] = useState(undefined);
  const { t } = useTranslation("common");

  const fetchUser = async () => {
    try {
      const user = await fetch("https://api.github.com/users/mathkruger");
      const userJson = await user.json();
      setUser(userJson);
    } catch (err) {
      setUser(fallbackUserData);
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <Theme>
      <Header></Header>
      
      <div className="container">  
        {
          !user ? <p>{t("loadingText")}</p> :
          <>
            <About user={user} />

            <hr />
            <Skills reposUrl={user.html_url + "?tab=repositories"} />
            <hr />
            <Education />
            <hr />
            <Experiences /> 
          </>
        }
        
        <Footer></Footer>
      </div>
      
    </Theme>
  );
}

export default App;
