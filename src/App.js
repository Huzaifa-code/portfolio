import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
