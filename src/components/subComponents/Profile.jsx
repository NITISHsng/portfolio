import React, { useEffect, useState, useRef } from 'react'
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
      scale: 0.95,
      opacity: 0.6,
    }, {
      scale: 1,
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
          <div className="relative w-full h-full ">
            <img
              ref={imageRef}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              src={isHovered ? "myimage.png" : "myimage.jpg"}
              alt="Logo"
              className="w-full h-full scale-100 object-contain mix-blend-lighten absolute top-0 right-0 transform transition-transform duration-300 ease-in-out transform-origin-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/85 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
