import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Download, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef(null);
  const ulRef = useRef(null);
  const modelRef = useRef(null);
  const nevUlRef = useRef(null);
  const timelineRef = useRef(null);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Set up desktop navbar entrance animation
  useGSAP(() => {
    if (window.innerWidth >= 1024) {
      const tl = gsap.timeline();
      tl.fromTo(
        navRef.current,
        { y: -60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          delay: 0.2,
          duration: 2,
          ease: "elastic.out(1, 0.4)",
        }
      );
      tl.fromTo(
        nevUlRef.current?.querySelectorAll("ul li") || [],
        { y: -50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 2,
          ease: "elastic.out(1, 0.4)",
        },
        "-=2"
      );
    }
  }, { scope: navRef });

  // Set up mobile menu animation timeline (play/reverse controlled)
  useGSAP(() => {
    if (window.innerWidth < 1024) {
      const menu = modelRef.current;
      const items = menu?.querySelectorAll("li") || [];

      const tl = gsap.timeline({ paused: true });

      tl.from(menu, {
        x: "100%",
        duration: 0.3,
        ease: "power3.out",
      });
      tl.from(items, {
        x: "120%",
        opacity: 0,
        duration: 0.2,
        stagger: 0.1,
      });

      timelineRef.current = tl;
    }
  }, { scope: modelRef });

  // Reverse on resize to desktop while menu is open
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isOpen) {
        handleReverse();
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);


  const handlePlay = () => {
    setIsOpen(true);
    timelineRef.current?.play();
  };

  const handleReverse = () => {
    timelineRef.current?.reverse();
    setIsOpen(false);
  };

  return (
    <div
      ref={navRef}
      className={`fixed top-0 left-0 py-2 md:flex lg:justify-evenly md:justify-between px-[9%] lg:px-0 items-center z-50 w-full ${
        isScrolled
          ? "bg-[#1f242d]/70 text-white backdrop-blur-md shadow-md"
          : ""
      }`}
    >
      {/* Logo and Hamburger */}
      <div className="flex justify-between w-full md:w-auto">
        <div className="size-11 overflow-hidden rounded-full border-2 border-white">
          <img
            src="mylogo2.png"
            alt="Logo"
            className="object-cover w-full h-full"
          />
        </div>
        <div
          className="md:hidden text-white text-3xl cursor-pointer"
          onClick={handlePlay}
        >
          ☰
        </div>
      </div>

      {/* Desktop Nav Links */}
      <div
        ref={nevUlRef}
        className="hidden w-fit md:bg-transparent h-fit relative top-0 left-0 md:flex transition-transform duration-100"
      >
        <ul className="absolute md:relative right-0 md:flex gap-10 bg-[#000000e9] p-8 md:p-0 md:bg-transparent md:max-w-fit max-w-[400px] min-w-[250px] w-[80vw] h-full md:h-auto">
          {["Home", "About", "Skills", "Projects", "Contact"].map((text, i) => (
            <li
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

      {/* Mobile Nav Overlay */}
      <div
        ref={ulRef}
        className={`md:hidden w-full h-screen absolute top-0 left-0 transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full delay-700"
        }`}
      >
        <ul
          ref={modelRef}
          className="absolute right-0 gap-10 bg-[#000000e9] p-8  pt-4 max-w-[400px] min-w-[250px] w-[80vw] h-full"
        >
          <li
            className="relative left-[85%] text-white text-3xl cursor-pointer"
            onClick={handleReverse}
          >
            <X />
          </li>
          {["Home", "About", "Skills", "Projects", "Contact"].map((text, i) => (
            <li
              onClick={handleReverse}
              key={i}
              className="m-3 pl-5 bg-gray-950 text-white text-2xl rounded-xl p-[10px]"
            >
              <a
                href={`#${text.toLowerCase()}`}
                className="text-white no-underline hover:bg-black/30 py-1 px-2 rounded-[10px] hover:scale-105 shadow-2xl hover:shadow-black/100"
              >
                {text}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Resume Button */}
      <div className="hidden lg:flex h-[20px] w-fit justify-center items-center transform transition-all duration-300">
        <a
          href="/devnitishx.pdf"
          target="_blank"
          className="gap-1 flex hover:bottom-20 bg-white border-2 border-white text-black py-1 px-4 rounded-[5px] hover:bg-black hover:text-white font-semibold"
        >
          Resume <Download size={17} className="relative top-[4px]" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
