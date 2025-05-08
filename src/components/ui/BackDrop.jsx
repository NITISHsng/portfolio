import React from 'react'
import Particles from './Particles'
const BackDrop = () => {
  return (
    <div className='h-[100vh] z-1 absolute w-[100vw]'>
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
  )
}

export default BackDrop