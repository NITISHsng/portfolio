import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { IoCodeSlash } from "react-icons/io5";
import { LuSquareCode } from "react-icons/lu";
import { FaLaptopCode } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import {
  TbWorldWww,
  TbBrandReact,
  TbBrandNextjs,
  TbBrandTailwind,
} from "react-icons/tb";
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiGit,
  SiNodedotjs,
} from "react-icons/si";

const icons = [
  { component: IoCodeSlash, color: "text-white/20" },
  { component: TbBrandReact, color: "text-blue-400/20" },
  { component: TbWorldWww, color: "text-white/20" },
  { component: VscVscode, color: "text-blue-500/20" },
  { component: FaLaptopCode, color: "text-white/20" },
  { component: LuSquareCode, color: "text-white/20" },
  { component: SiJavascript, color: "text-yellow-400/20" },
  { component: TbBrandNextjs, color: "text-white/20" },
  { component: SiHtml5, color: "text-orange-500/20" },
  { component: SiCss3, color: "text-blue-600/20" },
  { component: TbBrandTailwind, color: "text-cyan-400/20" },
  { component: SiNodedotjs, color: "text-green-500/20" },
  { component: SiGit, color: "text-red-500/20" },
];

const FloatingIcons = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = containerRef.current.querySelectorAll(".floating-icon");
      
      elements.forEach((el) => {
        // Random initial position
        gsap.set(el, {
          x: gsap.utils.random(0, window.innerWidth),
          y: gsap.utils.random(0, window.innerHeight),
          opacity: 0,
          scale: gsap.utils.random(0.5, 1.2),
        });

        // Random floating animation
        gsap.to(el, {
          opacity: 1,
          duration: 2,
          delay: gsap.utils.random(0, 2),
          ease: "power2.out",
        });

        const float = () => {
          gsap.to(el, {
            x: gsap.utils.random(0, window.innerWidth),
            y: gsap.utils.random(0, window.innerHeight),
            duration: gsap.utils.random(10, 25),
            ease: "sine.inOut",
            onComplete: float,
          });
        };

        const rotate = () => {
           gsap.to(el, {
            rotation: gsap.utils.random(-360, 360),
            duration: gsap.utils.random(5, 15),
            ease: "none",
            onComplete: rotate,
           });
        };

        float();
        rotate();
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden z-[1]"
    >
      {icons.map((IconData, index) => {
        const Icon = IconData.component;
        return (
          <div
            key={index}
            className={`floating-icon absolute ${IconData.color}`}
            style={{ fontSize: "2rem" }}
          >
            <Icon size={gsap.utils.random(24, 48)} />
          </div>
        );
      })}
    </div>
  );
};

export default FloatingIcons;
