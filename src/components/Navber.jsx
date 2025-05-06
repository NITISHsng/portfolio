import { div } from "framer-motion/client";
import React, { useState, useEffect } from "react";

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
  return (
  
    <div
      className={`fixed left-0 top-0 w-full py-2 px-[9%] flex justify-between items-center z-50 ${
        isScrolled
        ? "bg-[#1f242d]/70 text-white backdrop-blur-md shadow-md"
        : ""
      }`}
    >

      <img
        src="logo.jpg"
        alt=""

        className="size-11 rounded-full border-2 border-white"
      />

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8">
        <li>
          <a
            href="#hero"
            className="text-white no-underline hover:text-[#7cf03d]"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="text-white no-underline hover:text-[#7cf03d]"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className="text-white no-underline hover:text-[#7cf03d]"
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#connect"
            className="text-white no-underline hover:text-[#7cf03d]"
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="text-white no-underline hover:text-[#7cf03d]"
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
