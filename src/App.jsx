import React from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {

  return (
    <div>
     <Navbar /> 
     <Home />
     <About /> 
     <Services />
     <Projects />
     <Contact />
    </div>
  );
}

export default App
