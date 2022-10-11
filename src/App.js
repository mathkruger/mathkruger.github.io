import Header from "./components/header/Header";
import About from "./components/about/About";
import Experiences from "./components/experiences/Experiences";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="container">
      <Header></Header>
      <About></About>
      <Experiences></Experiences>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
}

export default App;
