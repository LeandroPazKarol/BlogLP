import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Componets/NavBar";
import Hero from "./Componets/Hero";
import About from "./Componets/About";
import Contact from "./Componets/Contact";
import Projects from "./Componets/Projects";
import Footer from "./Componets/Footer";

function App() {
  return (
    <div className="container">
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
