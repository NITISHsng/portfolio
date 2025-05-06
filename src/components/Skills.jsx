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
import { SiTailwindcss, SiC } from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: <DiJavascript className="text-white" size={36} /> },
  { name: "React.js", icon: <DiReact className="text-white" size={36} /> },
  { name: "HTML", icon: <DiHtml5 className="text-white" size={36} /> },
  { name: "CSS", icon: <DiCss3 className="text-white" size={36} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-white" size={36} /> },
  { name: "GitHub", icon: <DiGithub className="text-white" size={36} /> },
  { name: "Java", icon: <DiJava className="text-white" size={36} /> },
  { name: "C", icon: <SiC className="text-white" size={36} /> },
  { name: "Python", icon: <DiPython className="text-white" size={36} /> },
  { name: "SQL", icon: <DiDatabase className="text-white" size={36} /> },
];

const Skils = () => {
  return (
    <section id="skills" className="w-screen flex items-center justify-center bg-transparent p-4">
      <div className="w-11/12 rounded-2xl p-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <img src="/skill.svg" alt="Logo" className="w-12 h-12 filter invert" />
          <h2 className="text-4xl font-semibold text-white">Skills</h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white/10 text-white rounded-xl p-4 flex items-center gap-3 shadow hover:bg-white/20 transition"
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
