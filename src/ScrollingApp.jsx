import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Toolkit from './components/ToolKitDesktop';
import Contact from './components/Contact';
import Footer1 from './components/Footer1';
import AnimatedSection from './components/AnimatedSection';

function ScrollingApp({ setView, currentView }) {
  return (
    <div className="scrolling-app">
      <Navbar setView={setView} currentView={currentView} />
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
      <Footer1 />
    </div>
  );
}

export default ScrollingApp;