import React from "react";
import { UserCircle2 } from "lucide-react";
import StretchableLine from "./ui/StretchableLine";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const About = () => {
  
  useGSAP(()=>{
  // Fade in heading
  gsap.to("#aboutMe", {
    opacity: 1,
    duration: 0.5,
    scrollTrigger: {
      trigger: "#about",
      start: "top 80%",
      end: "top 20%",
      scrub: 2,
    }
  });

  // Animate underline from scaleX 0 to 1 (grow from left)
  gsap.fromTo(
    "#aboutUnderline",
    { scaleX: 0, transformOrigin: "left" },
    {
      scaleX: 1,
      duration: 2,
      delay:.5,
      scrollTrigger: {
        trigger: "#about",
        start: "top 80%",
        end: "top 20%",
        scrub: true,
      },
    }
  );
    gsap.to("#para1",{
     duration:.5,
     y:40,
     opacity:1,
     stagger:.9,
     scrollTrigger:{
       trigger: "#para1",
       scroller: "body",
      //  markers: true,
       start: "top 80%",
       end: "top 20%",
       scrub: 2,
     }
   
    })
    gsap.to("#para2",{
     duration:.5,
     y:40,
     opacity:1,
     stagger:.9,
     scrollTrigger:{
       trigger: "#para2",
       scroller: "body",
      //  markers: true,
       start: "top 80%",
       end: "top 20%",
       scrub: 2,
       // pin: true,
     }
   
    })
    gsap.to("#para3",{
     duration:.5,
     y:40,
     opacity:1,
     stagger:.9,
     scrollTrigger:{
       trigger: "#para3",
       scroller: "body",
      //  markers: true,
       start: "top 80%",
       end: "top 20%",
       scrub: 2,
       // pin: true,
     }
   
    })
    gsap.to("#para4",{
     duration:.5,
     y:40,
     opacity:1,
     stagger:.9,
     scrollTrigger:{
       trigger: "#para4",
       scroller: "body",
      //  markers: true,
       start: "top 80%",
       end: "top 20%",
       scrub: 2,
       // pin: true,
     }
   
    })
    
    
  })
  return (
    <section
      id="about"
      className=" flex items-center justify-center z-10"
    >
      <div className="w-11/12 border-white/20 rounded-2xl py-6">
        <div id="aboutMe" className="flex items-center mb-[-30px] gap-3 opacity-0">
          <img
            src="/about.svg"
            alt="Logo"
            className="w-12 h-12 filter invert"
          />

 <h2 className="text-4xl font-semibold text-white relative group">
  About Me
  <span
    id="aboutUnderline"
    className="block h-[5px] w-full bg-white transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500"
  ></span>
</h2>


        </div>
        <p id="para1" className="text-lg sm:text-xl leading-relaxed font-normal text-white p-5 opacity-0">
          <span className="font-semibold text-gray-400 text-3xl hover:text-gray-100 hover:scale-1.2"> Hello!</span>{" "}
          I'm Nitish Chandra Singha, a Computer Science student at{" "}
          <span className="font-semibold text-gray-400 text-xl"> GCELT</span>(
          Government college of Engineering and Leather Technology ) with a
          strong passion for frontend development. I specialize in building
          responsive and modern web applications using technologies like React ,
          Gsap , Tailwind CSS etc... I enjoy turning creative ideas into
          interactive and functional interfaces that offer great user
          experiences.
        </p>
        <br />
        <p id="para2" className="text-lg sm:text-xl leading-relaxed font-normal text-white p-5 opacity-0">
          I'm currently exploring UI/UX design to better understand visual
          hierarchy, color theory, typography, and user behavior. This knowledge
          helps me create more intuitive and visually appealing designs. I
          believe that good design is not just how it looks, but how it works.
        </p>
        <br />
        <p id="para3" className="text-lg sm:text-xl leading-relaxed font-normal text-white p-5 opacity-0">
          <span className="font-semibold text-gray-400 text-3xl hover:text-gray-100 hover:scale-1.2">
            {" "}
            Over time,{" "}
          </span>{" "}
          I’ve worked on various personal and collaborative projects, including
          task management apps, games, and real-world websites like{" "}
          <span className="font-semibold text-white text-2xl ">
            {" "}
            Singha
            <span className="font-semibold text-green-600 text-2xl">
              Infra
            </span>{" "}
          </span>{" "}
          These projects have taught me a lot about clean code, performance, and
          problem-solving in real scenarios.
        </p>
        <br />
        <p  id="para4"className=" text-lg sm:text-xl leading-relaxed font-normal text-white p-5 opacity-0">
          I’m always eager to learn new technologies, improve my design
          thinking, and work on projects that challenge and grow my skillset. My
          goal is to become a well-rounded developer who can contribute
          meaningfully to both frontend engineering and user experience design.
        </p>
        {/* <StretchableLine/> */}
      </div>
    </section>
  );
};

export default About;
