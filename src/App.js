import { useEffect, useState } from "react";

import Header from "./components/header/Header";
import About from "./components/about/About";
import Experiences from "./components/experiences/Experiences";
import Skills from "./components/skills/Skills";
import Footer from "./components/footer/Footer";
import Education from "./components/education/Education";

function App() {
  const [ user, setUser ] = useState(undefined);

  const fetchUser = async () => {
    const user = await fetch("https://api.github.com/users/mathkruger");
    const userJson = await user.json();
    setUser(userJson);
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="container">
      <Header></Header>
      
      {
        !user ? <p>Carregando ...</p> :
        <>
          <About user={user} />

          <hr />
          <Skills />
          <hr />
          <Education />
          <hr />
          <Experiences />
        </>
      }
      
      <Footer></Footer>
    </div>
  );
}

export default App;
