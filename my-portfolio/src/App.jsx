import React, { useEffect } from "react";   // ✅ ✅ Combine both into one line
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import "./App.css";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true,     // animations happen only once
      offset: 120,    // how far from the top before triggering
    });
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
