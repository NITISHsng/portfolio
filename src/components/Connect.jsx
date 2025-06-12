import React, { useEffect, useRef } from "react";
import {
  Mail,
  Linkedin,
  Twitter,
  Youtube,
  Github,
  Facebook,
} from "lucide-react";
// import { section } from "framer-motion/client";
import Heading from "./Heading";
// import { gsap } from "gsap";
const Connect = () => {
  

    const container=useRef(null);
    // useEffect(() => {
       
    // }, [])
    

  return (
    <section
      id="contact"
      className="w-11/12 flex items-center justify-center bg-transparent "
    >
      <div className="w-11/12 rounded-2xl ">
        <Heading icon={"/connect.png"} text={"Let's Connect"}/>

        <p className="text-lg sm:text-xl leading-relaxed font-normal text-white p-5">
          I'm always open to discussing new projects, collaborations, or just
          connecting with fellow developers. Feel free to reach out through any
          of the platforms below.
        </p>

        <div ref={container} className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-5">
          <a
            href="mailto:singhanitish20022@gmail.com?subject=Let's Connect&body=Hi Nitish,%0D%0A%0D%0AI found your portfolio and would like to get in touch with you."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border justify-center relative border-white/10 rounded-md text-white hover:bg-white hover:text-black transition"
          >
            <Mail size={18} />
            <span>Email</span>
          </a>

          <a
            href="https://www.linkedin.com/in/nitish-singha"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border justify-center  relative border-white/10 rounded-md text-white hover:bg-white hover:text-black transition"
          >
            <Linkedin size={18} />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://x.com/NitishSing63297"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border justify-center  relative border-white/10 rounded-md text-white hover:bg-white hover:text-black transition"
          >
            <Twitter size={18} />
            <span>Twitter</span>
          </a>

          <a
            href="https://youtube.com/@quickhelp260?si=orGWpPqKQyQt-IEm"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border relative justify-center border-white/10 rounded-md text-white hover:bg-white hover:text-black transition"
          >
            <Youtube size={18} />
            <span>YouTube</span>
          </a>

          <a
            href="https://github.com/NITISHsng"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border relative justify-center border-white/10 rounded-md text-white hover:bg-white hover:text-black transition"
          >
            <Github size={18} />
            <span>GitHub</span>
          </a>
          <a
            href="https://m.facebook.com/niti.sng/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border relative justify-center border-white/10 rounded-md text-white hover:bg-white hover:text-black transition"
          >
            {/* <img src="mylogo2.png" alt="facebook" className="absolute bottom-10 w-full" /> */}
            <Facebook size={18} />
            <span>Facebook</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Connect;
