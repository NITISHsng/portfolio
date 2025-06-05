import React, { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import gsap from "gsap";

const ScrollDown = () => {
  const arrowRef1 = useRef(null);
  const arrowRef2 = useRef(null);
  const scrollDown = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });
   gsap.fromTo(scrollDown.current,{
       y:60,
       opacity:0,
    },{
        y:0,
        delay:4,
        opacity:1,
    });
        tl.fromTo(
          [arrowRef1.current, arrowRef2.current],
          { y: -20, opacity: 1 },
          { y: -10, opacity: 0.5, duration: 0.3, ease: "power1.inOut", stagger: 0.2 }
        );
        tl.fromTo(
          [arrowRef1.current, arrowRef2.current],
          { y: -10, opacity: 1, opacity:1 },
          { y: 0, opacity: 0.5, duration: 0.3, ease: "power1.inOut", stagger: 0.2 }
        );
        tl.fromTo(
          [arrowRef1.current, arrowRef2.current],
          { y: 0, opacity: 1, opacity:1 },
          { y: 10, opacity: 0.5, duration: 0.3, ease: "power1.inOut", stagger: 0.2 }
        );
        tl.fromTo(
          [arrowRef1.current, arrowRef2.current],
          { y: 10, opacity: 1, opacity:1 },
          { y: 20, opacity: 0.5, duration: 0.3, ease: "power1.inOut", stagger: 0.2 }
        );
}, []);

  return (
    <div ref={scrollDown} className="md:px-20 px-5 text-2xl text-white md:h-25 h-16 w-screen flex justify-between items-center bg-black/10 absolute bottom-18">
      <div className="hidden md:block">Connect</div>

     
      <div ref={arrowRef1} className="font-bold">
        <ChevronDown size={40} />
      </div>

    
      <div className="flex justify-center items-center">
        <span className="h-[2px] w-6 md:w-35 bg-white"></span>
        <span className="mx-4 text-[15px] md:text-2xl">EXPLORE THE SCROLL</span>
        <span className="h-[2px] w-6 md:w-35 bg-white"></span>
      </div>

      <div ref={arrowRef2} className="font-bold">
        <ChevronDown size={40} />
      </div>

      <div className="hidden md:block">Discover</div>
    </div>
  );
};

export default ScrollDown;
