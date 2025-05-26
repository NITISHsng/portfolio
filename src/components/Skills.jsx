import React from "react";
import {
  DiJavascript,
  DiHtml5,
  DiCss3,
  DiGit,
  DiGithub,
  DiJava,
  DiReact,
  DiPython,
  DiDatabase,

} from "react-icons/di";
import { GiSaphir } from "react-icons/gi";
import { SiTailwindcss, SiC } from "react-icons/si";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Heading from "./Heading";
const skills = [
  {
    name: "JavaScript",
    icon: <DiJavascript className="text-white" size={36} />,
  },
  { name: "React.js", icon: <DiReact className="text-white" size={36} /> },
  { name: "HTML", icon: <DiHtml5 className="text-white" size={36} /> },
  { name: "CSS", icon: <DiCss3 className="text-white" size={36} /> },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-white" size={36} />,
  },
  { name: "Gsap", icon: <GiSaphir className="text-white" size={36} /> },
  { name: "Git", icon: <DiGit className="text-white" size={36} /> },
  { name: "GitHub", icon: <DiGithub className="text-white" size={36} /> },
  { name: "Java", icon: <DiJava className="text-white" size={36} /> },
  { name: "C", icon: <SiC className="text-white" size={36} /> },
  { name: "Python", icon: <DiPython className="text-white" size={36} /> },
  { name: "SQL", icon: <DiDatabase className="text-white" size={36} /> },
];
gsap.registerPlugin(ScrollTrigger);
const Skils = () => {
  useGSAP(()=>{

  gsap.to("#items .abc", {
  opacity: 1,
  y:30,
  stagger:.2,
  duration: 0.5,
  scrollTrigger: {
    trigger: "#items", 
    start: "top 90%",
    end: "top 50%",
    scrub: 2,
  },
});



     
  })
  return (
    <section
      id="skills"
      className=" flex items-center justify-center  z-4 w-full min-h-[40vh]"
    >
      <div className="w-11/12 rounded-2xl">

        <Heading icon={"/skill.svg"} text={"Skills"}/>

        {/* Skills Grid */}
        <div id="items" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-5">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="abc bg-white/10 text-white rounded-xl p-4 flex items-center gap-3 shadow hover:bg-white/20 transition opacity-0"
            >
              {skill.icon}
              <span className="text-base">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skils;
