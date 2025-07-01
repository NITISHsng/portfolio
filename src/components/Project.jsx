import React, { useEffect, useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Heading from "./Heading";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
    title: "Hostel Mess Management",

    description:
      "A full-stack system to manage daily meal entries, expense calculations, and reports for hostel mess. User login and real-time DB via Firebase.",
    technologies: ["React", "Tailwind CSS", "Firebase"],
    projectLink: "https://hostelmess.netlify.app/",
    codeLink: "https://github.com/NITISHsng/Mess",
    landingPage:"hostelmess.png",
    type: "personal",
  },
    {
    title: "GuessKaro Game",
    description:
      "A number guessing game with coin rewards, level system, and random card generation. Real-time updates using Firebase Firestore.",
    technologies: ["HTML", "CSS", "JavaScript", "Firebase"],
    projectLink: "https://guesskoro.vercel.app/",
    codeLink: "https://github.com/NITISHsng/guessing-game",
    landingPage:"guesskoro.png",
    type: "personal",
  },
  {
    title: "ToDo App",
    description:
      "A simple and responsive task manager to add, delete, and mark tasks as completed. Designed with a clean UI using HTML, CSS, JS.",
    technologies: ["HTML", "CSS", "JavaScript"],
    projectLink: "https://toxyz.netlify.app/",
    codeLink: "https://github.com/NITISHsng/Todo",
    landingPage:"todoapp.png",
    type: "personal",
  },


  {
    title: "SinghaInfra",
    description:
      "A professional business website for a construction company, featuring project showcases, contact form, and Firebase-based backend.",
    technologies: ["React", "Tailwind CSS", "Firebase"],
    projectLink: "https://singhainfra.in",
    codeLink: "https://github.com/nitish-s/san-construction",
    landingPage:"singhainfra.png",
    type: "client",
  },
];

const Project = () => {
  const personalProjects = projects.filter((p) => p.type === "personal");
  const clientProjects = projects.filter((p) => p.type === "client");

  const MyProjects = useRef(null);
  const projectHeading = useRef(null);

  useEffect(() => {
    gsap.fromTo(".clientProjects .projects-grid", 
      {
        y:50,
        opacity:0,
      },
      {
      opacity: 1,
      duration:1,
      y:0,
      delay:0.3,
      duration: 0.5,
      scrollTrigger: {
        trigger: "#clientProjects",
        start: "top 70%",
        end: "top 50%",
        // markers:true,
          // scrub: true,
      },
    });


       gsap.fromTo(".personalProjects .projects-grid", 
      {
        y:50,
        opacity:0,
      },
      {
      opacity: 1,
      duration:1,
      y:0,
      delay:0.3,
      duration: 0.5,
      scrollTrigger: {
        trigger: "#personalProjects",
        start: "top 70%",
        end: "top 50%",
        // markers:true,
          // scrub: true,
      },
    });
  }, []);

  const renderProjectCards = (list) => (
    <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5 opacity-0">
      {list.map((project, index) => (
<div
  key={index}
  className="project group relative border border-white/10 rounded-xl p-5 pb-16 hover:border-white/20 transition z-10 overflow-hidden"
>
  {/* Background image */}
<div
  className="absolute inset-0 bg-center bg-cover opacity-0 transition-all duration-300 group-hover:opacity-100  group-hover:brightness-50 z-0"
  style={{ backgroundImage: `url(${project.landingPage})` }}
/>

  {/* Foreground content */}
  <div className="relative z-10">
    <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
    <p className="text-white/70 text-lg sm:text-xl mb-3">{project.description}</p>
    <div className="mb-4 flex flex-wrap gap-2">
      {project.technologies.map((tech, idx) => (
        <span
          key={idx}
          className="px-2 py-0.5 text-xs rounded bg-white/10 text-white border border-white/20"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>

  {/* Button group pinned to bottom */}
  <div className="absolute bottom-4 left-5 right-5 z-10 flex gap-3">
    <a
      href={project.projectLink}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1 px-3 py-1 text-sm bg-white text-black rounded hover:bg-gray-200 transition"
    >
      <ExternalLink size={16} />
      Live Demo
    </a>
    <a
      href={project.codeLink}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1 px-3 py-1 text-sm border border-white text-white rounded hover:bg-white hover:text-black transition"
    >
      <Github size={16} />
      GitHub Code
    </a>
  </div>
</div>


      ))}
    </div>
  );

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center bg-transparent"
    >
      <div className="w-11/12 rounded-2xl py-6">

      <Heading icon={"/project.png"} text={"Projects"}/>
           {/* Client Projects */}
        <h3 id="clientProjects" className="text-2xl font-semibold ml-6 text-white mb-4 mt-10">
          Client Projects
        </h3>
        <div className="clientProjects">
          {renderProjectCards(clientProjects)}
        </div>
        {/* Personal Projects */}
        <h3 id="personalProjects" className="text-2xl ml-6 font-semibold text-white mb-4 mt-6">
          Personal Projects
        </h3>
        <div  className="personalProjects">

        {renderProjectCards(personalProjects)}
        </div>

     
      </div>
    </section>
  );
};

export default Project;


