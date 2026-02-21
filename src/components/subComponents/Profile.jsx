import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Profile = () => {
  const imageRef = useRef(null);
  const wrapperRef = useRef(null);
  const containerRef = useRef(null); // Ref for the tilting content

  const [isHovered, setIsHovered] = useState(false);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 300px) and (max-width: 1023px)", () => {
      gsap.fromTo(
        wrapperRef.current,
        { y: -80, opacity: 0 },
        {
          y: 0,
          duration: 0.4,
          opacity: 1,
          ease: "power2.out",
        }
      );
    });

    mm.add("(min-width: 1024px)", () => {
      gsap.fromTo(
        wrapperRef.current,
        { x: 300, opacity: 0 },
        {
          x: 0,
          duration: 0.6,
          opacity: 1,
          ease: "power3.out",
        }
      );
    });
  });

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left; // Mouse X relative to container
    const y = e.clientY - rect.top; // Mouse Y relative to container
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation (-15 to 15 degrees)
    const rotateX = (y - centerY) / centerY * -15;
    const rotateY = (x - centerX) / centerX * 15;

    // Apply tilt to container
    gsap.to(containerRef.current, {
      rotateX: rotateX,
      rotateY: rotateY,
      duration: 0.5,
      ease: "power2.out",
      transformPerspective: 1000,
    });

    // Subtler tilt for image to create parallax
    gsap.to(imageRef.current, {
      x: (x - centerX) / centerX * 10,
      y: (y - centerY) / centerY * 10,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    
    // Reset rotations
    gsap.to(containerRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.8,
      ease: "elastic.out(1, 0.3)",
    });

    // Reset image parallax
    gsap.to(imageRef.current, {
      x: 0,
      y: 0,
      duration: 0.8,
      ease: "elastic.out(1, 0.3)",
    });
  };

  return (
    <div
      ref={wrapperRef}
      className="order-1 md:order-2 flex justify-center items-center text-center mt-[-90px]"
      style={{ perspective: "1000px" }}
    >
      <div 
        className="relative size-[35vw] max-h-[320px] max-w-[320px] min-h-[230px] min-w-[230px] rounded-full p-1 overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >

        {/* Animated Blue Border Layer 1 */}
        <div
          className="absolute inset-0 animate-spin-slow scale-150 rounded-full
            before:content-[''] before:absolute before:inset-0 
            before:bg-[conic-gradient(transparent,transparent,transparent,#0368F9)] 
            after:content-[''] after:absolute after:inset-0 
            after:bg-[conic-gradient(transparent,transparent,transparent,#0368F9)]"
        ></div>

        {/* Animated Blue Border Layer 2 */}
        <div
          className="absolute inset-0 animate-spin-slow scale-150 rotate-180 rounded-full
            before:content-[''] before:absolute before:inset-0 
            before:bg-[conic-gradient(transparent,transparent,transparent,#0368F9)] 
            after:content-[''] after:absolute after:inset-0 
            after:bg-[conic-gradient(transparent,transparent,transparent,#0368F9)_180deg]"
        ></div>

        {/* Content Container */}
        <div 
          ref={containerRef}
          className="relative bg-[#1f242d] z-[10] w-full h-full rounded-full flex justify-center items-center overflow-hidden shadow-[0_0_30px_rgba(3,104,249,0.35)]"
          style={{ transformStyle: "preserve-3d" }}
        >
          
          <div className="group relative w-full h-full rounded-full">
            <img
              ref={imageRef}
              onMouseEnter={() => setIsHovered(true)}
              src="myimage.jpg"
              alt="Profile"
              className="w-full h-full object-contain mix-blend-lighten absolute top-0 right-0 
              transition-transform duration-500 ease-in-out 
              group-hover:scale-105 
              drop-shadow-[0_0_25px_rgba(3,104,249,0.45)]"
              style={{ transform: "translateZ(50px)" }}
            />

            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/85 pointer-events-none rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;