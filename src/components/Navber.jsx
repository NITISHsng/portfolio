import { div } from "framer-motion/client";
import React, { useState, useEffect,useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Timeline } from "gsap/gsap-core";
const Navber = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
    const navRef = useRef(null);
      const ulRef = useRef(null);
 useGSAP(()=>{
  const tl=gsap.timeline()
    tl.from(navRef.current, {
      y:-60,
      opacity: 0,
      duration: 0.3,
      delay:.1,
      ease: "power3.out",
    });

     tl.from(ulRef.current.querySelectorAll("li"), {
      y: -50,
      opacity: 0,
      stagger: 0.1,
      duration: 0.4,
    });
 })


  return (
  
    <div
    ref={navRef}
      className={`fixed left-0 top-0  w-full py-2 px-[9%] flex justify-between items-center z-50  ${
        isScrolled
        ? "bg-[#1f242d]/70 text-white backdrop-blur-md shadow-md"
        : ""
      }`}
    >

      <div className="size-11 overflow-hidden rounded-full border-2 border-white">
      <img
        src="logo2.png"
        alt=""

      />
      </div>

      {/* Desktop Menu */}
      <ul 
      ref={ulRef}
      className="hidden lg:flex gap-8">
        <li >
          <a
            href="#hero"
            className="text-white relative top-0 no-underline hover:text-[#7cf03d]"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="text-white relative top-0  no-underline hover:text-[#7cf03d]"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className="text-white relative top-0  no-underline hover:text-[#7cf03d]"
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#connect"
            className="text-white relative top-0  no-underline hover:text-[#7cf03d]"
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="text-white relative top-0  no-underline hover:text-[#7cf03d]"
          >
            About
          </a>
        </li>
      </ul>

      {/* Hamburger Icon */}
      <div
        className="md:hidden text-white text-3xl cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </div>

      {/* Mobile Menu */}
      {isOpen && (
       <div onClick={() => setIsOpen(!isOpen)} className="absolute top-0 left-0 h-screen w-screen bg-black/40 backdrop-blur-md z-50">

          
<div className="fixed top-0 right-0 h-full pt-20 w-2/3 bg-black/40 px-6 py-4 flex flex-col gap-4 md:hidden z-50">
 
          <div
            className="fixed top-5 right-10 md:hidden text-white text-3xl cursor-pointer "
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </div>
            <a
              href="#hero"
              className="text-white no-underline hover:text-[#7cf03d]"
            >
              Home
            </a>
            <a
              href="#projects"
              className="text-white no-underline hover:text-[#7cf03d]"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-white no-underline hover:text-[#7cf03d]"
            >
              Skills
            </a>
            <a
              href="#connect"
              className="text-white no-underline hover:text-[#7cf03d]"
            >
              Contact
            </a>
            <a
              href="#about"
              className="text-white no-underline hover:text-[#7cf03d]"
            >
              About
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navber;
