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
  DiNodejs,
} from "react-icons/di";
import { SiVercel } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { DiFirebase } from "react-icons/di";
import { SiNetlify } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { GiSaphir } from "react-icons/gi";
import { SiTailwindcss, SiC } from "react-icons/si";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Heading from "./Heading";
const skillCategories = [
  {
    category: "Languages",
    items: [
      { name: "JavaScript", icon: <DiJavascript className="text-white" size={36} /> },
      { name: "Java", icon: <DiJava className="text-white" size={36} /> },
      { name: "C", icon: <SiC className="text-white" size={36} /> },
      { name: "Python", icon: <DiPython className="text-white" size={36} /> },
    ],
  },
  {
    category: "Web & Frameworks",
    items: [
      { name: "React.js", icon: <DiReact className="text-white" size={36} /> },
      { name: "Node.js", icon: <DiNodejs className="text-white" size={36} /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" size={36} /> },
      { name: "HTML", icon: <DiHtml5 className="text-white" size={36} /> },
      { name: "CSS", icon: <DiCss3 className="text-white" size={36} /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-white" size={36} /> },
      { name: "GSAP", icon: <GiSaphir className="text-white" size={36} /> },
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      { name: "Git", icon: <DiGit className="text-white" size={36} /> },
      { name: "GitHub", icon: <DiGithub className="text-white" size={36} /> },
      { name: "SQL", icon: <DiDatabase className="text-white" size={36} /> },
      { name: "MongoDB", icon: <DiMongodb className="text-white" size={36} /> },
      { name: "Firebase", icon: <DiFirebase className="text-white" size={36} /> },
      { name: "Vercel", icon: <SiVercel className="text-white" size={36} /> },
      { name: "Netlify", icon: <SiNetlify className="text-white" size={36} /> },
    ],
  },
];

gsap.registerPlugin(ScrollTrigger);
const Skils = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".skill",
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        duration: 0.4,
        scrollTrigger: {
          trigger: "#skills",
          start: "top 80%",
        },
      }
    );
  });
  return (
    <section
      id="skills"
      className=" flex flex-col items-center justify-center  z-4 w-full min-h-[40vh] py-10"
    >
      <div className="w-11/12 rounded-2xl">
        <Heading icon={"/skill.svg"} text={"Skills"} />

        <div className="flex flex-col gap-10 mt-10">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} className="flex flex-col gap-5">
              <h3 className="text-xl font-bold text-white/80 px-5 border-l-4 border-white/20">
                {category.category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-5">
                {category.items.map((skill, index) => (
                  <div
                    key={index}
                    className="skill bg-white/10 text-white rounded-xl p-4 flex items-center gap-3 shadow transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] opacity-0 cursor-default"
                  >
                    {skill.icon}
                    <span className="text-base">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skils;

