import React, { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import gsap from "gsap";

const ScrollDown = () => {
  const arrowRef1 = useRef(null);
  const arrowRef2 = useRef(null);
  const scrollDown = useRef(null);

  useEffect(() => {
    // gsap.to("#contenar",{
    //  transformOrigin:'top center',
    //   rotateX:150,
    //   opacity:0,
    //   scrollTrigger:{
    //     trigger:"#contenar",
    //     // markers:true,
    //     start:"top 85%",
    //     end:"top 70%",
    //     scrub:true
    //   }
    // })
    const tl = gsap.timeline({ repeat: -1 });
   gsap.fromTo(scrollDown.current,{
      transformOrigin:'top center',
      rotateX:150,
      opacity:0,
    },{
      
      rotateX:0,
      duration:7,
        delay:2.5,
        ease:"elastic.out(1,0.3)",
        opacity:1,
    });
        tl.fromTo(
          [arrowRef1.current, arrowRef2.current],
          { y: -20, opacity: 1 },
          { y: -10, opacity: 0.5, duration: 0.3, ease: "power1.inOut", stagger: 0.2 }
        );
        tl.fromTo(
          [arrowRef1.current, arrowRef2.current],
          { y: -10, opacity: 1, },
          { y: 0, opacity: 0.5, duration: 0.3, ease: "power1.inOut", stagger: 0.2 }
        );
        tl.fromTo(
          [arrowRef1.current, arrowRef2.current],
          { y: 0, opacity: 1},
          { y: 10, opacity: 0.5, duration: 0.3, ease: "power1.inOut", stagger: 0.2 }
        );
        tl.fromTo(
          [arrowRef1.current, arrowRef2.current],
          { y: 10, opacity: 1 },
          { y: 20, opacity: 0.5, duration: 0.3, ease: "power1.inOut", stagger: 0.2 }
        );
}, []);

  return (
<div id="contenar" className="flex justify-center">
      <div ref={scrollDown} className=" md:shadow-2xl shadow-xl shadow-white/15 text-2xl text-white md:h-25 h-16 md:w-11/12 w-screen flex justify-evenly items-center bg-black/20 absolute  md:rounded-2xl bottom-18">
      
      <div className="hidden md:block">Connect</div>

     
      <div ref={arrowRef1} className="font-bold">
        <ChevronDown size={40} />
      </div>

    
      <div className="flex justify-center items-center">
        <span className="h-[2px] w-[10vw] bg-white"></span>
        <span className="mx-4 text-[15px] md:text-2xl">EXPLORE THE SCROLL</span>
        <span className="h-[2px] w-[10vw] bg-white"></span>
      </div>

      <div ref={arrowRef2} className="font-bold">
        <ChevronDown size={40} />
      </div>

      <div className="hidden md:block">Discover</div>
    </div>
</div>
  );
};

export default ScrollDown;
