import React from 'react';
import './App.css';
import Navber from './components/Navber';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project';
import Connect from './components/Connect';
import StretchableLine from './components/ui/StretchableLine';
import BackDrop from './components/ui/BackDrop';

function App() {
  return (
    <div className="relative w-screen overflow-x-hidden">
      <div className="fixed top-0 left-0 w-full h-full z-0">
        <BackDrop />
      </div>

      <div className="relative z-10">
        <Navber />
        
        <Hero />
         
        <About />
        <StretchableLine />

        <Skills />
        <StretchableLine />

        <Project />
        <StretchableLine />
        <Connect />
      </div>
    </div>
  );
}

export default App;
