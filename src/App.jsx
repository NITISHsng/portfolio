import React,{ useState } from 'react'
import Particles from './components/Particles';
import './App.css'
import Navber from './components/Navber'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Project from './components/Project'
import  Connect  from './components/Connect';
function App() {
  return (
    <>
    <div style={{ width: '100%', height: '100vh', position: 'fixed' }}>
   <Particles
    particleColors={['#ffffff', '#ffffff']}
    particleCount={600}
    particleSpread={10}
    speed={0.1}
    particleBaseSize={100}
    moveParticlesOnHover={true}
    alphaParticles={false}
    disableRotation={false}
  />
</div>
   <div className='z-11'>
   <Navber/>
     <Hero/>
     
     <About/>
     <Skills/>  
     <Project/>
     <Connect/>
   </div>
  </>
  )
}

export default App
