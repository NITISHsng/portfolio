import React, { useRef } from "react";
import {GraduationCap, MapPin, Calendar, BookOpen } from "lucide-react";
import Heading from "./Heading";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);

  useGSAP(() => {
    gsap.from(cardRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="education" className="py-16 bg-transparent">
      <div className="w-10/12 rounded-2xl py-6 mx-auto">
        <Heading icon={"/education.png"} text={" My Education"} />   
        <p className="text-gray-400 text-center mb-12 mt-4 italic text-lg">
          "Education Is Not The Learning Of Facts, But The Training Of The Mind To Think."
        </p>

        <div className="flex justify-center">
          <div 
            ref={cardRef}
            className="w-full flex flex-col md:flex-row bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm group hover:border-cyan-400/30 transition-all duration-500"
          >
            {/* College Image Section */}
            <div className="md:w-1/3 relative overflow-hidden">
              <img 
                src="clgimage.webp" 
                alt="College" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 min-h-[250px]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent md:hidden" />
              <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#0f172a] to-transparent hidden md:block" />
            </div>

            {/* Content Section */}
            <div className="md:w-2/3 p-8 flex flex-col justify-center gap-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  Bachelor of Technology (B-TECH)
                </h3>
                <p className="text-xl text-gray-300 font-medium">
                  Computer Science and Engineering
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-cyan-400">
                  <BookOpen size={20} />
                  <span className="text-lg font-semibold flex flex-col sm:flex-row items-center gap-2">GCELT <span className="text-gray-400 text-sm hidden md:block">(Government College of Engineering and Leather Technology)</span></span>
                </div>

                <div className="flex flex-wrap gap-6 text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar size={18} />
                    <span>2023-2027 | Pursuing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={18} />
                    <span>Kolkata, WB - 700106</span>
                  </div>
                </div>
              </div>

              {/* Status Badge */}
              <div className="mt-2 text-right">
                <span className="px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-semibold">
                  Batch: 2023-2027
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
