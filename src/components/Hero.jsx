import React, { useRef } from "react";
import { BsGithub, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";
import { motion } from "framer-motion";
import Split from "./Split";
import HangingPhoto from "./HangingPhoto";
import { useGSAP } from "@gsap/react";
import { image } from "framer-motion/client";
import gsap from "gsap";


const Hero = () => {
   const imageRef = useRef(null);
   const nameRef = useRef(null);
   const iamRef = useRef(null);
   const textRef = useRef(null);
   const buttonRef = useRef(null);
 useGSAP(() => {
    const screenWidth = gsap.matchMedia();
    
    screenWidth.add("(min-width: 300px) and (max-width: 1023px)", () => {
      const tl = gsap.timeline();
      
      tl.from(imageRef.current, {
        y:-70,
        duration: 0.3,
        opacity: 0,
        delay: .7,
        scale:.1
      })
      tl.from(nameRef.current, {
        x: 50,
        duration: 0.4,
        opacity: 0,
        delay: 0.1, 
      });
      tl.from(iamRef.current, {
        y: 50,
        duration: 0.4,
        opacity: 0, 
      });
      tl.from(textRef.current, {
        y: 50,
        duration: 0.2,
        opacity: 0, 
      });
      tl.from(buttonRef.current.querySelectorAll('a'), {
        y:30,
        duration: .7,
        opacity: 0, 
        delay:1.4,
       stagger:.2,
      });

    });

    screenWidth.add("(min-width: 1024px)", () => {
      const tl = gsap.timeline();
      
      tl.from(imageRef.current, {
        x: 90,
        duration: .9,
        opacity: 0,
        delay: 1,
      })
      tl.from(nameRef.current, {
        x: 80,
        duration: 0.4,
        opacity: 0,
        delay: 0.2, 
      },"-=1");
      tl.from(iamRef.current, {
        y: 50,
        duration: 0.2,
        opacity: 0, 
      });
      tl.from(textRef.current, {
        y: 50,
        duration: 0.2,
        opacity: 0, 
      });
      tl.from(buttonRef.current.querySelectorAll('a'), {
        y:50,
        duration: 0.6,
        opacity: 0, 
        delay:1.4,
        stagger:.3
      });

    });



    // Clean up the matchMedia listeners on unmount
    return () => screenWidth.revert();
  }, []);



  return (
    <section id="hero">
      <div className="min-h-screen flex flex-col md:flex-row justify-center items-center text-white gap-3 md:p-10">

        <div ref={imageRef} className="order-1 md:order-2 flex justify-center items-center text-center mt-[-50px]">
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
              <div className="relative w-full h-full">
                <img
                  src="mypic2.png"
                  alt="Logo"
                  className=" w-full h-full scale-130 object-contain mix-blend-lighten absolute top-0 right-5 brightness-120 hover:scale-150 transform transition-transform duration-300 ease-in-out"

                />

                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/100 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Text and Links Section */}
        <div className="relative order-2 md:order-1 max-w-2xl text-center md:text-left md-[60px]">
         <div ref={nameRef}>
    
           <Split
            text="Nitish Chandra Singha"
            className="lg:text-5xl text-3xl text-center font-bold relative "
            delay={100}
            animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
          />
         </div>
          <div ref={iamRef} className="flex justify-center left-[-100px]  relative md:justify-start md:left-0 ">

            <h2 className="text-3xl mb-6 relative inline-block ">
              I'm a &nbsp;
              <span className="relative w-[50px]">
                <span
                  data-text="B.Tech&nbsp;Student"
                  className="role"
                  style={{ "--i": 0 }}
                >
                  B.Tech&nbsp;Student
                </span>
                <span
                  data-text="Tech&nbsp;Enthusiast"
                  className="role"
                  style={{ "--i": 1 }}
                >
                  Tech&nbsp;Enthusiast
                </span>
                <span
                  data-text="Problem&nbsp;Solver"
                  className="role"
                  style={{ "--i": 2 }}
                >
                  Problem&nbsp;Solver{" "}
                </span>
                <span
                  data-text="Web&nbsp;Developer"
                  className="role"
                  style={{ "--i": 3 }}
                >
                  Web&nbsp;Developer
                </span>
              </span>
            </h2>

          </div>

          <div ref={textRef} className="mb-8 lg:text-lg text-[14px] leading-relaxed font-xl">
        
              <Split
            text="I create beautiful and functional websites using React, Tailwind CSS, and modern frontend technologies."
            className=" text-center relative "
            delay={40}
            animationFrom={{ opacity: 0, transform: "translate3d(-10,50px,0)" }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
          />
          </div>
<div ref={buttonRef} className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-6 ">
  <div>  
        <a
      href="/Nitish_Chandra_Singha_CV.pdf"
      download
      className="inline-block bg-green-700 text-black py-2 px-6 rounded-2xl hover:bg-slate-700 "
    >
      Download CV
    </a>
  </div>

  <motion.div
    initial={{ opacity: 0, y: -20, scale: 1.5 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 1.5 }}
    className="flex gap-6"
  >
    {[
      { href: "https://github.com/NITISHsng", icon: <BsGithub size={22} /> },
      { href: "https://www.linkedin.com/in/nitish-singha", icon: <BsLinkedin size={22} /> },
      { href: "https://x.com/NitishSing63297", icon: <BsTwitter size={22} /> },
      { href: "https://youtube.com/@quickhelp260?si=orGWpPqKQyQt-IEm", icon: <BsYoutube size={22} /> },
    ].map(({ href, icon }, index) => (
      <a
        key={index}
        href={href}
        className="relative border-2 border-green-600 p-2 rounded-full hover:text-slate-600 "
      >
        <span className="text-green-700">{icon}</span>
      </a>
    ))}
  </motion.div>
</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
