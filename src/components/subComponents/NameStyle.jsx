import React,{useEffect,useRef} from 'react'
import gsap from "gsap";
import Split from"./Split";
const NameStyle = () => {
      const nameRef = useRef(null);
      useEffect(() => {
        const tl=gsap.timeline();

      tl.fromTo(nameRef.current,
         {
        x:100,
        opacity: 1,
        delay: 0.4,
        // immediateRender: true,
      },
    {
        x: 0,
        duration: 0.4,
        opacity: 1,
        delay: 0.1,
        // immediateRender: true,  
    });

      }, [])
      
  return (
  <>
        <div ref={nameRef}>
            <h1
              style={{
                fontWeight: "bold",
                // fontSize:"60px",
                color: "transparent",
                fontFamily: "'Dancing Script', cursive",
                WebkitTextStroke: "1px white",
                textStroke: "2px white",
              }}
            > 
              <Split
                text="Nitish Chandra Singha"
                className="lg:text-5xl text-4xl text-center font-bold relative "
                delay={80}
                animationFrom={{
                  opacity: 0,
                  transform: "translate3d(0,50px,0)",
                }}
                animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                easing="easeOutCubic"
                threshold={0.2}
                rootMargin="-50px"
              />
            </h1>
          </div>
          
          </>

  )
}

export default NameStyle