import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Split from "./subComponents/Split";
import NameStyle from "./subComponents/NameStyle";
import Profile from "./subComponents/Profile";
import Iam from "./Iam";
import SocialLink from "./subComponents/SocialLink";
import ScrollDown from "./subComponents/ScrollDown";

const Hero = () => {
  const textRef = useRef(null);
  const cursorRef = useRef(null);
  const containerRef = useRef(null);
  const namebox= useRef(null);

  // Animate text on mount
  useGSAP(() => {
    const tl=gsap.timeline({delay:2.8});
    tl.from(textRef.current, {
      y: 50,
      duration: 0.2,
      opacity: 0,
    });
  }, []);

  // Custom cursor movement and scaling
  useEffect(() => {
    const container = containerRef.current;
    const nameHover = namebox.current;

    const handleCursor = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
      });
    };

    const enlarge = () => {
      gsap.to(cursorRef.current, {
        width: 100,
        height: 100,
        duration: 0.2,
        ease: "elastic.out(1, 0.3)",
      });
    };

    const shrink = () => {
      gsap.to(cursorRef.current, {
        width: 20,
        height: 20,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    if (container) {
      window.addEventListener("mousemove", handleCursor);
      nameHover.addEventListener("mouseenter", enlarge);
    nameHover.addEventListener("mouseleave", shrink);
    }

    return () => {
      if (container) {
        window.removeEventListener("mousemove", handleCursor);
        nameHover.removeEventListener("mouseenter", enlarge);
        nameHover.removeEventListener("mouseleave", shrink);
      }
    };
  }, []);

  return (
    <section id="home" ref={containerRef}  className="h-screen relative">
      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="bg-white rounded-full fixed pointer-events-none z-50 mix-blend-difference transform duration-10"
        style={{
          width: "20px",
          height: "20px",
          transform: "translate(-50%, -50%)",
        }}
      ></div>

      {/* Layout */}
      <div className="min-h-full flex flex-col md:flex-row justify-center items-center text-white gap-3 md:p-10">
        <Profile />

        {/* Text & Links */}
        <div className="relative order-2 md:order-1 max-w-2xl text-center md:text-left">
          <span ref={namebox}>
            <NameStyle />
          </span>

          <span className="bg-cyan-700">
            <Iam />
          </span>

          <span
            ref={textRef}
            className=" lg:text-lg text-[14px] leading-relaxed font-xl p-2 m-3"
          >
            <Split
              text="I create beautiful and functional websites using React, Tailwind CSS, and modern frontend technologies."
              className="text-center relative"
              delay={40}
              animationFrom={{
                opacity: 0,
                transform: "translate3d(-10px, 50px, 0)",
              }}
              animationTo={{
                opacity: 1,
                transform: "translate3d(0, 0, 0)",
              }}
              easing="easeOutCubic"
            />
          </span>

          <SocialLink />
        </div>
      </div>
      <ScrollDown/>
    </section>
  );
};

export default Hero;
