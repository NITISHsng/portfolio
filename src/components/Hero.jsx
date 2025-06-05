import React, { useRef, useEffect } from "react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { Mail } from "lucide-react";
import { Download } from "lucide-react";
import Split from "./Split";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  const imageRef = useRef(null);
  const nameRef = useRef(null);
  const iamRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  useGSAP(() => {
    const screenWidth = gsap.matchMedia();

    screenWidth.add("(min-width: 300px) and (max-width: 1023px)", () => {
      const tl = gsap.timeline();

      tl.from(imageRef.current, {
        y: -70,
        duration: 0.3,
        opacity: 0,
        delay: 0.7,
        scale: 0.1,
        immediateRender: true,
      });
      tl.from(nameRef.current, {
        x: 50,
        duration: 0.4,
        opacity: 0,
        delay: 0.1,
        immediateRender: true,
      });
      tl.from(iamRef.current, {
        y: 50,
        duration: 0.4,
        opacity: 0,
        immediateRender: true,
      });
      tl.from(textRef.current, {
        y: 50,
        duration: 0.2,
        opacity: 0,
      });
      tl.from(buttonRef.current.querySelectorAll("span,a"), {
        y: 40,
        // duration: 0.7,
        opacity: 0,
        // delay: 1.4,
        // stagger: 0.2,
        stagger: 0.1,
        duration: 2.5,
        ease: "elastic.out(1,0.6)",
      });
    });

    screenWidth.add("(min-width: 1024px)", () => {
      const tl = gsap.timeline();

      tl.from(imageRef.current, {
        x: 90,
        duration: 0.9,
        opacity: 0,
        delay: 1,
      });
      tl.from(
        nameRef.current,
        {
          x: 80,
          duration: 0.4,
          opacity: 0,
          delay: 0.2,
        },
        "-=1"
      );
      tl.from(iamRef.current, {
        y: 50,
        duration: 0.2,
        opacity: 0,
      });
      tl.from(textRef.current, {
        y: 50,
        duration: 0.2,
        opacity: 0,
      });
      tl.from(buttonRef.current.querySelectorAll("span,a"), {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 1.5,
        ease: "elastic.out(1,0.6)",
      });
    });

    // Clean up the matchMedia listeners on unmount
    return () => screenWidth.revert();
  }, []);

  const cursorRef = useRef(null);
  const contenarRef = useRef(null);

  const handleCursor = (e) => {
    gsap.to(cursorRef.current, {
      x: e.clientX,
      y: e.clientY,
      // duration: 0.1,
      // ease: 'power2.out',
    });
  };

  useEffect(() => {
    const contenar = contenarRef.current;
    const text = nameRef.current;

    // Attach mousemove to box2 only
    if (contenar) {
      contenar.addEventListener("mousemove", handleCursor);
    }

    // Enlarge cursor when hovering text
    const enlarge = () => {
      gsap.to(cursorRef.current, {
        width: 80,
        height: 80,
        duration: 0.2,
        ease: "elastic.out(1,0.3)",
      });
    };

    const shrink = () => {
      gsap.to(cursorRef.current, {
        width: 20,
        height: 20,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    if (text) {
      text.addEventListener("mouseenter", enlarge);
      text.addEventListener("mouseleave", shrink);
    }

    // Cleanup
    return () => {
      if (contenar) {
        contenar.removeEventListener("mousemove", handleCursor);
      }
      if (text) {
        text.removeEventListener("mouseenter", enlarge);
        text.removeEventListener("mouseleave", shrink);
      }
    };
  }, []);

  return (
    <section id="home" ref={contenarRef}>
      <div
        ref={cursorRef}
        className="bg-white rounded-full fixed pointer-events-none z-50 mix-blend-difference transform duration-10"
        style={{
          width: "20px",
          height: "20px",
          transform: "translate(-50%, -50%)",
        }}
      ></div>
      <div className="min-h-screen flex flex-col md:flex-row justify-center items-center text-white gap-3 md:p-10">
        <div
          ref={imageRef}
          className="order-1 md:order-2 flex justify-center items-center text-center mt-[-50px]"
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
              <div className="relative w-full h-full scale-x-[-1]">
                <img
                  src="myimg.webp"
                  alt="Logo"
                  className="w-full h-full  scale-110 object-contain mix-blend-lighten absolute top-0 right-0 brightness-120 hover:scale-135  transform transition-transform duration-300 ease-in-out transform-origin-center"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/85 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Text and Links Section */}
        <div className="relative order-2 md:order-1 max-w-2xl text-center md:text-left md-[60px]">
          <div ref={nameRef}>
            <h1
              style={{
                fontSize: "100px",
                fontWeight: "bold",
                color: "transparent",
                fontFamily: "cursive",
                WebkitTextStroke: "1px white",
                textStroke: "2px white",
              }}
            >
              <Split
                text="Nitish Chandra Singha"
                className="lg:text-5xl text-3xl text-center font-bold relative "
                delay={100}
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
          <div
            ref={iamRef}
            className="flex justify-center left-[-100px]  relative md:justify-start md:left-0 "
            style={{ fontFamily: "monospace" }}
          >
            <h2 className="text-3xl mb-6 relative inline-block ">
              I'm a&nbsp;
              <span className="relative w-[50px]">
                <span
                  data-text="B.Tech&nbsp;Student"
                  className="role"
                  style={{ "--i": 0 }}
                >
                  B.Tech&nbsp;Student
                </span>
                <span
                  data-text="Tech&nbsp;Enthusiast"
                  className="role"
                  style={{ "--i": 1 }}
                >
                  Tech&nbsp;Enthusiast
                </span>
                <span
                  data-text="Problem&nbsp;Solver"
                  className="role"
                  style={{ "--i": 2 }}
                >
                  Problem&nbsp;Solver{" "}
                </span>
                <span
                  data-text="Web&nbsp;Developer"
                  className="role"
                  style={{ "--i": 3 }}
                >
                  Web&nbsp;Developer
                </span>
              </span>
            </h2>
          </div>

          <div
            ref={textRef}
            className="mb-8 lg:text-lg text-[14px] leading-relaxed font-xl p-2"
          >
            <Split
              text="I create beautiful and functional websites using React, Tailwind CSS, and modern frontend technologies."
              className=" text-center relative "
              delay={40}
              animationFrom={{
                opacity: 0,
                transform: "translate3d(-10,50px,0)",
              }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
            />
          </div>
          <div
            ref={buttonRef}
            className="flex flex-col sm:flex-row justify-center md:justify-start items-center h-[80px] gap-6 "
          >
            <div className=" flex items-center h-full gap-0">
              {[
                {
                  href: "https://github.com/NITISHsng",
                  icon: <BsGithub size={22} />,
                  label: "GitHub Profile",
                },
                {
                  href: "https://www.linkedin.com/in/nitish-singha",
                  icon: <BsLinkedin size={22} />,
                  label: "Linkedin Profile",
                },
                {
                  href: "https://x.com/NitishSing63297",
                  icon: <BsTwitter size={22} />,
                  label: "Twitter Profile",
                },
                {
                  href: "mailto:singhanitish20022@gmail.com?subject=Let's Connect&body=Hi Nitish,%0D%0A%0D%0AI found your portfolio and would like to get in touch with you",
                  icon: <Mail size={22} />,
                  label: "Mail",
                },
              ].map(({ href, icon, label }, index) => (
                <div
                  key={index}
                  className="h-full flex justify-center items-center w-20 hover:items-start transform duration-300"
                >
                  <span className="border-2 border-white rounded-full p-[10px]">
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:bg-black/70 w-full"
                      aria-label={label} 
                    >
                      <span>{icon}</span>
                    </a>
                  </span>
                </div>
              ))}
            </div>

            <div className="h-full w-fit flex justify-center items-center hover:items-start transform transition-all duration-300">
              <a
                href="/devnitishx.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="gap-2 flex hover:bottom-20 bg-wgite border-2 border-white text-white py-1 px-5 rounded-[5px] hover:bg-black/70 font-semibold"
              >
                Resume <Download size={16} className="relative top-[4px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
