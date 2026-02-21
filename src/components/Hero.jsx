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
  const namebox = useRef(null);

  // Animate text on mount
  useGSAP(() => {
    gsap.timeline({ delay: 2.8 }).from(textRef.current, {
      y: 50,
      duration: 0.2,
      opacity: 0,
    });

    // Center cursor from the middle
    gsap.set(cursorRef.current, {
      xPercent: -50,
      yPercent: -50,
    });
  }, []);

  // Custom cursor movement and hover effect
  useEffect(() => {
    const cursor = cursorRef.current;
    const nameHover = namebox.current;

    if (!cursor || !nameHover) return;

    const xTo = gsap.quickTo(cursor, "x", { duration: 0.2, ease: "power3" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.2, ease: "power3" });

    const handleCursor = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    const enlarge = () => {
      gsap.to(cursor, {
        width: 130,
        height: 130,
        duration: 0.2,
        ease: "elastic.out(1, 0.3)",
      });
    };

    const shrink = () => {
      gsap.to(cursor, {
        width: 20,
        height: 20,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleCursor);
    nameHover.addEventListener("mouseenter", enlarge);
    nameHover.addEventListener("mouseleave", shrink);

    return () => {
      window.removeEventListener("mousemove", handleCursor);
      nameHover.removeEventListener("mouseenter", enlarge);
      nameHover.removeEventListener("mouseleave", shrink);
    };
  }, []);

  return (
    <section id="home" ref={containerRef} className="h-screen relative w-screen overflow-x-hidden">
      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="bg-white rounded-full fixed pointer-events-none z-50 mix-blend-difference"
        style={{
          width: "20px",
          height: "20px",
        }}
      ></div>

      {/* Layout */}
      <div className="min-h-full flex flex-col md:flex-row justify-center items-center text-white gap-3 md:p-10">
        <Profile />

        {/* Text & Links */}
        <div className="relative top-[-30px] order-2 md:order-1 max-w-2xl text-center md:text-left">
          <span ref={namebox}>
            <NameStyle />
          </span>
          <span className="bg-cyan-700">
            <Iam />
          </span>

          <span
            ref={textRef}
            className="lg:text-lg text-[14px] leading-relaxed font-xl p-2 m-3"
          >
            <Split
              text="Transforming ideas into exceptional web experiences.
I create fast, scalable, and beautifully designed websites that combine clean aesthetics with seamless functionality."
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
      <ScrollDown />
    </section>
  );
};

export default Hero;
