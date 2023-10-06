import "./App.css";
import AppContextProvider from "./context/AppContext";
import AboutMe from "./sections/aboutMe/AboutMe";
import GetInTouch from "./sections/getInTouch/GetInTouch";
import Hero from "./sections/hero/Hero";
import Navbar from "./sections/navbar/Navbar";
import Projects from "./sections/projects/Projects";
import Skills from "./sections/skills/Skills";

function App() {
  return (
    <AppContextProvider>
      <Navbar />
      <Hero />
      <Skills />
      <AboutMe />
      <Projects />
      <GetInTouch />
    </AppContextProvider>
  );
}

export default App;
