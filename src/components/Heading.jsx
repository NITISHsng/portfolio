import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Heading = ({icon,text}) => {
  const projectsRef = useRef(null);
  const underlineRef = useRef(null);

  useEffect(() => {
    if (projectsRef.current && underlineRef.current) {
      gsap.fromTo(
        underlineRef.current,
        { scaleX: 0, transformOrigin: 'left' },
        {
          scaleX: 1,
          duration: 2,
          delay: 1,
          scrollTrigger: {
            trigger: projectsRef.current,
            start: 'top 90%',
            end: 'top 50%',
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <div>
      <div ref={projectsRef}>
        <div className="flex items-center gap-3 mb-6">
          <img
            src={icon}
            alt="Logo"
            className="w-12 h-12 filter invert"
          />
          <h2 className="text-4xl font-semibold text-white relative group">
            {text}
            <span
              ref={underlineRef}
              className="block h-[5px] w-full bg-white transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500"
            ></span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Heading;
