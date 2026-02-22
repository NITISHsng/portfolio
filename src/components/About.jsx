import React from "react";
import { Download, Mail, Phone } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Heading from "./Heading";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    gsap.from(".about-image", {
      x: -120,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".about-image",
        start: "top 80%",
      },
    });

    gsap.from(".about-content > *", {
      x: 120,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".about-content",
        start: "top 80%",
      },
    });
  });

  return (
    <section
      id="about"
      className="relative py-24 text-white overflow-hidden"
    >
      <div className="w-11/12 max-w-6xl mx-auto">
        <Heading icon={"/about.svg"} text={" About Me"} />

        <div className="flex flex-col lg:flex-row items-center gap-16 mt-16">
          
          {/* Image Column */}
          <div className="about-image w-full lg:w-5/12 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-700"></div>

              <div className="relative rounded-3xl overflow-hidden border border-white/10 backdrop-blur-lg bg-white/5 shadow-2xl">
                <img
                  src="image.png"
                  alt="Nitish"
                  className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="about-content w-full lg:w-7/12 flex flex-col gap-8 text-center lg:text-left">
            
            {/* Intro */}
            <div>
              <h3 className="text-4xl md:text-5xl font-semibold tracking-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                  Nitish
                </span>
              </h3>
              <p className="text-cyan-400 font-medium mt-3 text-lg">
                Computer Science Student • Full-Stack Developer
              </p>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-lg leading-relaxed">
              I specialize in building scalable, production-ready applications 
              using <span className="text-white font-semibold">React, Node.js, and modern CSS frameworks</span>. 
              I focus on performance, security, and crafting intuitive user 
              experiences that deliver measurable real-world impact.
            </p>

            {/* Info Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/40 transition-all duration-300">
                <Mail className="text-cyan-400" />
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-white font-medium">
                    singhanitish829@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/40 transition-all duration-300">
                <Phone className="text-cyan-400" />
                <div>
                  <p className="text-sm text-gray-400">Mobile</p>
                  <p className="text-white font-medium">
                    +91 8001338614
                  </p>
                </div>
              </div>
            </div>

            {/* Resume Button */}
            {/* <div>
              <a
                href="/devnitishx.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 py-3 px-8 rounded-xl font-semibold shadow-lg hover:scale-105 transition-all duration-300"
              >
                Download Resume <Download size={18} />
              </a>
            </div> */}

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;