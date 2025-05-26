import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Cross } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef(null);
  const ulRef = useRef(null);
  const modelRef = useRef(null);
  const timelineRef = useRef(null);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // Lock/unlock scroll on mobile menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);
  
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Desktop animation
  if (width >= 1024) {
    useGSAP(() => {
      const tl = gsap.timeline();
      tl.from(navRef.current, {
        y: -60,
        opacity: 0,
        duration: 0.4,
        delay: 0.2,
        duration:2.5,
ease: "elastic.out(1,0.4)",
      });
      tl.from(ulRef.current?.querySelectorAll("li") || [], {
        y: -50,
        opacity: 0,
        stagger: 0.1,
        duration: 0.4,
      });
    }, { scope: navRef });
  } else {
    // Mobile menu animation (stored in timelineRef)
    useGSAP(() => {
        gsap.from(navRef.current, {
        y: -60,
        opacity: 0,
        duration: 0.4,
        delay: 0.2,
      });
      const tl = gsap.timeline({ paused: true });
      tl.from(modelRef.current,{
        x:"100%",
        duration:.1,
      })
      tl.from(modelRef.current?.querySelectorAll("li") || [], {
        x: "120%",
        duration: 0.1,
        stagger: 0.1,
      });
      timelineRef.current = tl;
    }, { scope: modelRef });
  }

  // Auto-close on route change (if using a router)
  useEffect(() => {
    if (isOpen) {
      timelineRef.current?.reverse();
      setIsOpen(false);
    }
  }, [location]);

  const handlePlay = () => {
    timelineRef.current?.play();
  };

  const handleReverse = () => {
    timelineRef.current?.reverse();
    setIsOpen(false);
  };

  return (
    <div
      ref={navRef}
      className={`fixed top-0 left-0 py-2 px-[9%] md:flex md:justify-between items-center z-50 w-full ${
        isScrolled ? "bg-[#1f242d]/70 text-white backdrop-blur-md shadow-md" : ""
      }`}
    >
      <div className="flex justify-between w-full md:w-auto">
        <div className="size-11 overflow-hidden rounded-full border-2 border-white">
      <img src="logo2.png" alt="Logo" className="object-cover w-full h-full" />
         </div>
        <div
          className="md:hidden text-white text-3xl cursor-pointer"
          onClick={() => {
            setIsOpen(true);
            handlePlay();
          }}
        >
          ☰
        </div>
      </div>

      <div
        ref={ulRef}
        className={`md:w-fit md:bg-transparent w-full bg-black/50 h-screen md:h-fit absolute md:relative top-0 left-0 md:flex transition-transform duration-100 ${
          isOpen ? "translate-x-0 " : "translate-x-full delay-700 md:translate-x-0"
  }`
      }
      >
        <ul
          ref={modelRef}
          className="absolute md:relative right-0 md:flex gap-10 bg-[#000000e9] p-8 md:p-0 md:bg-transparent md:max-w-fit max-w-[400px] min-w-[250px] w-[80vw] h-full md:h-auto"
        >
          <li
            className="relative left-[85%] md:hidden text-white text-3xl cursor-pointer"
            onClick={handleReverse}
          >
            <Cross />
          </li>
          {["Home", "About", "Skills", "Projects", "Contact"].map((text, i) => (
            <li
              onClick={handleReverse}
              key={i}
              className="m-3 pl-5 bg-gray-950 text-white text-2xl rounded-xl p-[10px] md:m-0 md:pl-0 md:bg-transparent md:p-0"
            >
              <a
                href={`#${text.toLowerCase()}`}
                className="text-white no-underline md:hover:bg-black/30 py-1 px-2 rounded-[10px] hover:scale-105 shadow-2xl hover:shadow-black/100"

              >
                {text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
