import React from "react";
import { UserCircle2 } from "lucide-react";
import StretchableLine from "./ui/StretchableLine";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Heading from "./Heading";

gsap.registerPlugin(ScrollTrigger);
const About = () => {
  
  useGSAP(()=>{



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

              <Heading icon={"/about.svg"} text={" About Me"}/>

        <p id="para1" className="text-lg sm:text-xl leading-relaxed font-normal text-white p-5 opacity-0">
          <span className="font-semibold text-gray-400 text-3xl hover:text-gray-100 hover:scale-1.2"> Hello!</span>{" "}
          I'm <span className="handwriting-font text-3xl">Nitish Chandra Singha</span>, a Computer Science student at{" "}
          <span className="font-semibold text-gray-400 text-xl"> GCELT</span>(
          Government college of Engineering and Leather Technology ) with a
          strong passion for web development. I specialize in building
          responsive and modern web applications using technologies like React, Next.js,
          Node.js, Express.js, MongoDB, Gsap , Tailwind CSS etc... I enjoy turning creative ideas into
          interactive and functional interfaces that offer great user
          experiences.
        </p>
        <br />
        {/* <p id="para2" className="text-lg sm:text-xl leading-relaxed font-normal text-white p-5 opacity-0">
          I'm currently exploring UI/UX design to better understand visual
          hierarchy, color theory, typography, and user behavior. This knowledge
          helps me create more intuitive and visually appealing designs. I
          believe that good design is not just how it looks, but how it works.
        </p> */}
        <br />
        {/* <p id="para3" className="text-lg sm:text-xl leading-relaxed font-normal text-white p-5 opacity-0">
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
        </p> */}
        <br />
        {/* <p  id="para4"className=" text-lg sm:text-xl leading-relaxed font-normal text-white p-5 opacity-0">
          I’m always eager to learn new technologies, improve my design
          thinking, and work on projects that challenge and grow my skillset. My
          goal is to become a well-rounded developer who can contribute
          meaningfully to both frontend engineering and user experience design.
        </p> */}
        {/* <StretchableLine/> */}
      </div>
    </section>
  );
};

export default About;
