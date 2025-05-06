import React from "react";

import { Computer, Cat, ExternalLink, Dog } from "lucide-react";
import { BsGithub, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";
import { GrGithub } from "react-icons/gr";
import { motion } from "framer-motion";
// import MyComponents from "./MyComponents"
import { FaLinkedin } from "react-icons/fa";
import Split from "./Split"
import HangingPhoto from "./HangingPhoto";
const Hero = () => {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };
  return (
<section id="hero">



<div className="min-h-screen flex flex-col md:flex-row justify-center items-center text-white gap-10">
  {/* Profile Image Section */}
  {/* <HangingPhoto/> */}

  <div className="order-1 md:order-2 flex justify-center items-center text-center">
    <div className="relative size-[30vw] max-h-[380px] max-w-[380px] min-h-[230px] min-w-[230px]  md:size-[30vw] rounded-full p-1 overflow-hidden">
            <div
          className="absolute inset-0 animate-spin-slow rounded-full 
  before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-full before:bg-[conic-gradient(transparent,transparent,transparent,#7cf03d)] 
  after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:rounded-full after:bg-[conic-gradient(transparent,transparent,transparent,#7cf03d)]"
        ></div>
        <div
          className="absolute inset-0 animate-spin-slow rounded-full 
before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-full before:rounded-full before:bg-[conic-gradient(transparent,transparent,transparent,#7cf03d)] 
after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:rounded-full after:bg-[conic-gradient(transparent,transparent,transparent,#7cf03d), conic-gradient(transparent,transparent,transparent,#7cf03d 180deg)] 
rotate-180"
        ></div>

<div className="relative bg-[#1f242d] z-[10] size-full rounded-full flex justify-center items-center overflow-hidden">
  {/* Image container */}
  <div className="relative w-full h-full">
    {/* Image */}
    <img
      src="mypic2.png"
      alt="Logo"
      className="w-full h-full scale-140 object-contain mix-blend-lighten absolute top-0 right-5 brightness-120"
    />
    
    {/* Overlay layer */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/100 pointer-events-none" />
  </div>
</div>

    </div>
  </div>

  {/* Text and Links Section */}
  <div className="order-2 md:order-1 max-w-2xl text-center md:text-left p-5">
    <Split
text="Nitish Ch Singha"
className="lg:text-5xl text-4xl sm:xl text-center font-bold relative bottom-4 "
delay={150}
animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
easing="easeOutCubic"
threshold={0.2}
rootMargin="-50px"
onLetterAnimationComplete={handleAnimationComplete}
/> 
<div className="flex text-center">

<h2 className="text-3xl mb-6 relative inline-block">

I'm a &nbsp;
<span className="relative">
<span data-text="B.Tech&nbsp;Student" className="role" style={{ '--i': 0 }}>B.Tech&nbsp;Student</span>
<span data-text="Tech&nbsp;Enthusiast" className="role" style={{ '--i': 1 }}>Tech&nbsp;Enthusiast</span>
<span data-text="Problem&nbsp;Solver" className="role" style={{ '--i': 2 }}>Problem&nbsp;Solver </span>
<span data-text="Web&nbsp;Developer" className="role" style={{ '--i': 3 }}>Web&nbsp;Developer</span>
</span>
</h2>
</div>

    {/* <MyComponents/> */}
    <p className="mb-8 text-lg sm:text-xl leading-relaxed font-normal">
      I create beautiful and functional websites using React, Tailwind
      CSS, and modern frontend technologies.
    </p>
    <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
    <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>

      <a
      href="/Nitish_Chandra_Singha_CV.pdf"
      download
     className="inline-block bg-green-700 text-black py-2 px-6 rounded-2xl hover:bg-slate-700 transition relative border-2 border-green-600 p-2  hover:-translate-y-2 hover:shadow-lg "
    >
      Download CV 
    </a>
</motion.div>
      <motion.div 
      initial={{ opacity: 0, y: -20 ,scale:1.5}}
      animate={{ opacity: 1, y: 0,scale:1 }}
      transition={{ duration: 1.5 }}
      className="flex gap-6">
        <a
            
          href="https://github.com/NITISHsng"
          className="relative border-2 border-green-600 p-2 rounded-full  hover:text-slate-600 transition hover:scale-135 hover:-translate-y-2 hover:shadow-lg "
        >
          <BsGithub className="text-green-700" size={22} />
        </a>
        <a
          href="https://www.linkedin.com/in/nitish-singha?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          className="relative border-2 border-green-600 p-2 rounded-full  hover:text-slate-600 transition hover:scale-135 hover:-translate-y-2 hover:shadow-lg "
        >
          <BsLinkedin className="text-green-700" size={22} />
        </a>
        <a
          href="https://x.com/NitishSing63297"
          className="relative border-2 border-green-600 p-2 rounded-full  hover:text-slate-600 transition hover:scale-135 hover:-translate-y-2 hover:shadow-lg "
        >
          <BsTwitter className="text-green-700" size={22} />
        </a>
        <a
          href="https://youtube.com/@quickhelp260?si=orGWpPqKQyQt-IEm"
          className="relative border-2 border-green-600 p-2 rounded-full  hover:text-slate-600 transition hover:scale-135 hover:-translate-y-2 hover:shadow-lg "
        >
          <BsYoutube className="text-green-700" size={22} />
        </a>
      </motion.div>
    </div>
  </div>
</div>
</section>
  );
};

export default Hero;

