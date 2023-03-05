import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";

import "./App.css";
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div style={{ backgroundColor: "#C0A392" }}>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}
export default App;
