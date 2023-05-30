import Theme from "./components/_common/Theme";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Experiences from "./components/experiences/Experiences";
import Skills from "./components/skills/Skills";
import Footer from "./components/footer/Footer";
import Education from "./components/education/Education";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <Theme>
      <Header></Header>
      
      <div className="container">  
        <About />
        <hr />
        <Skills />
        <hr />
        <Projects />
        <hr />
        <Education />
        <hr />
        <Experiences />

        <Footer></Footer>
      </div>
      
    </Theme>
  );
}

export default App;
