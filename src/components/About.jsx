import React from "react";
import { UserCircle2 } from "lucide-react";

const About = () => {
  return (
    <section id="about" className=" w-screen flex items-center justify-center bg-transparent p-4">
      <div className="w-11/12 border-white/20 rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <img src="/about.svg" alt="Logo" className="w-12 h-12 filter invert" />

          <h2 className="text-4xl font-semibold text-white">About Me</h2>
        </div>
        <p className="text-lg sm:text-xl leading-relaxed font-normal text-white">
  Hello! I'm Nitish Chandra Singha, a Computer Science student at GCELT with a strong passion for frontend development. 
  I specialize in building responsive and modern web applications using technologies like React and Tailwind CSS. 
  I enjoy turning creative ideas into interactive and functional interfaces that offer great user experiences.
</p>
<br />
<p className="text-lg sm:text-xl leading-relaxed font-normal text-white">
  I'm currently exploring UI/UX design to better understand visual hierarchy, color theory, typography, and user behavior. 
  This knowledge helps me create more intuitive and visually appealing designs. I believe that good design is not just how it looks, 
  but how it works.
</p>
<br />
<p className="text-lg sm:text-xl leading-relaxed font-normal text-white">
  Over time, I’ve worked on various personal and collaborative projects, including task management apps, games, 
  and real-world websites like SAN Construction. These projects have taught me a lot about clean code, performance, 
  and problem-solving in real scenarios.
  </p>
  <br />
  <p className="text-lg sm:text-xl leading-relaxed font-normal text-white">
  I’m always eager to learn new technologies, improve my design thinking, and work on projects that challenge and grow my skillset. 
  My goal is to become a well-rounded developer who can contribute meaningfully to both frontend engineering and user experience design.
</p>
      </div>
    </section>
  );
};

export default About;
