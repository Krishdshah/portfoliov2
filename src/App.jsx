// src/App.jsx
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Toolkit from './components/Toolkit';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedSection from './components/AnimatedSection'; 

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AnimatedSection id="about">
        <About />
      </AnimatedSection>
      <AnimatedSection id="education">
        <Education />
      </AnimatedSection>
      <AnimatedSection id="projects">
        <Projects />
      </AnimatedSection>
      <AnimatedSection id="toolkit">
        <Toolkit />
      </AnimatedSection>
      <AnimatedSection id="contact">
        <Contact />
      </AnimatedSection>
      <Footer />
    </div>
  );
}

export default App;