import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { section } from "framer-motion/client";

const projects = [
  {
    title: "ToDo App",
    description:
      "A simple and responsive task manager to add, delete, and mark tasks as completed. Designed with a clean UI using vanilla JavaScript.",
    technologies: ["HTML", "CSS", "JavaScript"],
    projectLink: "https://toxyz.netlify.app/",
    codeLink: "https://github.com/NITISHsng/Todo",
  },
  {
    title: "GuessKaro Game",
    description:
      "A number guessing game with coin rewards, level system, and random card generation. Real-time updates using Firebase Firestore.",
    technologies: ["HTML", "CSS", "JavaScript", "Firebase"],
    projectLink: "https://guesskoro.vercel.app/",
    codeLink: "https://github.com/NITISHsng/guessing-game",
  },
  {
    title: "Hostel Mess Management",
    description:
      "A full-stack system to manage daily meal entries, expense calculations, and reports for hostel mess. User login and real-time DB via Firebase.",
    technologies: ["React", "Tailwind CSS", "Firebase"],
    projectLink: "https://hostelmess.netlify.app/",
    codeLink: "https://github.com/NITISHsng/Mess",
  },
  {
    title: "SinghaInfra",
    description:
      "A professional business website for a construction company, featuring project showcases, contact form, and Firebase-based backend.",
    technologies: ["React", "Tailwind CSS", "Firebase"],
    projectLink: "https://singhainfra.in",
    codeLink: "https://github.com/nitish-s/san-construction",
  },
];

const Project = () => {
  return (
    
    <section id="projects" className=" flex items-center justify-center bg-transparent">
      <div className="w-11/12 rounded-2xl py-6">
        <div className="flex items-center gap-3 mb-6">
          <img src="/project.png" alt="Logo" className="w-12 h-12 filter invert" />
          <h2 className="text-4xl font-semibold text-white">Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-xl p-5 hover:border-white/20 transition z-10"
            >
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
              <div className="flex gap-3">
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
      </div>
    </section>
  );
};

export default Project;
