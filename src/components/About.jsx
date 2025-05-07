import React from "react";
import { UserCircle2 } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className=" flex items-center justify-center bg-transparent z-10 "
    >
      <div className="w-11/12 border-white/20 rounded-2xl py-6">
        <div className="flex items-center gap-3 mb-4">
          <img
            src="/about.svg"
            alt="Logo"
            className="w-12 h-12 filter invert"
          />

          <h2 className="relative text-4xl font-semibold text-white after:block after:h-[5px] after:w-full after:bg-white after:transition-all after:duration-500 after:origin-left hover:after:bg-gradient-to-r hover:after:from-purple-500 hover:after:to-pink-500">
            About Me
          </h2>
        </div>
        <p className="text-lg sm:text-xl leading-relaxed font-normal text-white p-5">
          <span className="font-semibold text-gray-400 text-3xl"> Hello!</span>{" "}
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
        <p className="text-lg sm:text-xl leading-relaxed font-normal text-white p-5">
          I'm currently exploring UI/UX design to better understand visual
          hierarchy, color theory, typography, and user behavior. This knowledge
          helps me create more intuitive and visually appealing designs. I
          believe that good design is not just how it looks, but how it works.
        </p>
        <br />
        <p className="text-lg sm:text-xl leading-relaxed font-normal text-white p-5">
          <span className="font-semibold text-gray-400 text-3xl">
            {" "}
            Over time,{" "}
          </span>{" "}
          I’ve worked on various personal and collaborative projects, including
          task management apps, games, and real-world websites like{" "}
          <span className="font-semibold text-white text-3xl">
            {" "}
            Singha
            <span className="font-semibold text-blue-800 text-3xl">
              Infra
            </span>{" "}
          </span>{" "}
          These projects have taught me a lot about clean code, performance, and
          problem-solving in real scenarios.
        </p>
        <br />
        <p className="text-lg sm:text-xl leading-relaxed font-normal text-white p-5">
          I’m always eager to learn new technologies, improve my design
          thinking, and work on projects that challenge and grow my skillset. My
          goal is to become a well-rounded developer who can contribute
          meaningfully to both frontend engineering and user experience design.
        </p>
      </div>
    </section>
  );
};

export default About;
