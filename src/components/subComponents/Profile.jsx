import React, { useEffect, useState, useRef } from 'react'
import { IoCodeSlash } from "react-icons/io5";
import { LuSquareCode } from "react-icons/lu";
import { FaLaptopCode } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { TbWorldWww } from "react-icons/tb";
import { TbBrandReact } from "react-icons/tb";
import gsap from "gsap";

const Profile = () => {
  const [isHovered, setIsHovered] = useState(false);
  const imageRef = useRef(null);
  const wrapperRef = useRef(null);
  const screenWidth = gsap.matchMedia();

  // Initial mount animation
  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });

    screenWidth.add("(min-width: 300px) and (max-width: 1023px)", () => {
      tl.fromTo(wrapperRef.current, {
        y: -80,
        opacity: 0,
      }, {
        y: 0,
        delay: .3,
        duration: 0.4,
        opacity: 1,
      });
    });

    screenWidth.add("(min-width: 1024px)", () => {
      tl.fromTo(wrapperRef.current, {
        x: 300,
        opacity: 0,
      }, {
        x: 0,
        duration: 0.6,
        opacity: 1,
      });
    });
  }, []);

  // Animate image on hover change
  useEffect(() => {
    if (!imageRef.current) return;
    gsap.fromTo(imageRef.current, {
      opacity: 0.6,
    }, {
      opacity: 1,
      duration: 0.4,
      ease: "power2.out"
    });
  }, [isHovered]);

  return (
    <div
      ref={wrapperRef}
      className="order-1 md:order-2 flex justify-center items-center text-center mt-[-90px]"
    >
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

        <div className="relative bg-[#1f242d] z-[10] aspect-square rounded-full flex justify-center items-center overflow-hidden">
          <div className="group relative w-full h-full ">
            <img
              ref={imageRef}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              // src={isHovered ? "myimage.png" : "myimage.jpg"}
              // src="xyz.png"
              src="myimage.jpg"
              alt="Logo"
              className="w-full h-full group-hover:scale-105 object-contain mix-blend-lighten absolute top-0 right-0 transform transition-transform duration-300 ease-in-out origin-[70%_10%]"
            />
          <div>
              <span className="absolute top-[15%] left-[20%] z-50 opacity-0 hover:scale-130 transition-all duration-950 group-hover:opacity-10 group-hover:scale-125">
              <IoCodeSlash className='size-5 md:size-8'/>
            </span>
              <span className="absolute top-[45%] left-[12%] z-50 opacity-0 hover:scale-130 transition-all duration-950 group-hover:opacity-10 group-hover:scale-125">
              <TbBrandReact className='size-5 md:size-8'/>
            </span>
              <span className="absolute top-[80%] left-[20%] z-50 opacity-0 hover:scale-130 transition-all duration-950 group-hover:opacity-10 group-hover:scale-125">
              <TbWorldWww className='size-5 md:size-8'/>
            </span>
              <span className="absolute top-[15%] left-[72%] z-50 opacity-0 hover:scale-130 transition-all duration-950 group-hover:opacity-10 group-hover:scale-125">
              <VscVscode className='size-5 md:size-8'/>
            </span>
              <span className="absolute top-[45%] left-[84%] z-50 opacity-0 hover:scale-130 transition-all duration-950 group-hover:opacity-10 group-hover:scale-125">
              <FaLaptopCode className='size-5 md:size-8'/>
            </span>
              <span className="absolute top-[80%] left-[72%] z-50 opacity-0 hover:scale-130 transition-all duration-950 group-hover:opacity-10 group-hover:scale-125">
              <LuSquareCode className='size-5 md:size-8'/>
            </span>
           
          </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/85 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
