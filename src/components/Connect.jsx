import React, { useEffect, useState,useRef } from "react";
import gsap from "gsap";
import emailjs from '@emailjs/browser';

import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import {
  Mail,
  Linkedin,
  Twitter,
  Youtube,
  Github,
  Facebook,
} from "lucide-react";
import Heading from "./Heading";

const Connect = () => {

  const container = useRef(null);
  const linkRefs = useRef([]);

  const socialLinks = [
    {
      href: "mailto:singhanitish20022@gmail.com?subject=Let's Connect",
      icon: <Mail size={18} />,
      text: "Email",
      image: "email.png",
    },
    {
      href: "https://www.linkedin.com/in/nitish-singha",
      icon: <Linkedin size={18} />,
      text: "LinkedIn",
      image: "linkedin.png",
    },
    {
      href: "https://x.com/NitishSing63297",
      icon: <Twitter size={18} />,
      text: "Twitter",
      image: "x.png",
    },
    {
      href: "https://youtube.com/@quickhelp260?si=orGWpPqKQyQt-IEm",
      icon: <Youtube size={18} />,
      text: "YouTube",
      image: "youtube.png",
    },
    {
      href: "https://github.com/NITISHsng",
      icon: <Github size={18} />,
      text: "GitHub",
      image: "github.png",
    },
    {
      href: "https://m.facebook.com/niti.sng/",
      icon: <Facebook size={18} />,
      text: "Facebook",
      image: "facebook.png",
    },
  ];

  
useEffect(() => {
  gsap.fromTo(
    ".linkTag",
    {
      y: 40,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none none reverse",
      },
    }
  );
}, []);


  const form = useRef();

const [loading, setLoading] = useState(null);

const sendEmail = (e) => {
  e.preventDefault();
  setLoading(true); // Start loading

  emailjs
    .sendForm('service_6oh3xut', 'template_f9x4xch', form.current, {
      publicKey: 'Vas56VMdiGEXnDjuW',
    })
    .then(() => {
      console.log('SUCCESS!');
      form.current.reset();
      setLoading(false); // Show "Sent"
      setTimeout(() => setLoading(null), 2000); // Hide after 2 sec
    })
    .catch((error) => {
      console.log('FAILED...', error.text);
      setLoading(null); // Reset even on failure
    });
};


  return (
    <section
      id="contact"
      className="w-11/12 mx-auto flex items-center justify-center bg-transparent"
    >
      <div className="w-full rounded-2xl">
        <Heading icon={"/connect.png"} text={"Let's Connect"} />

       <div className="bg-black/10 lg:mx-20">
         <p className="text-lg sm:text-xl leading-relaxed font-normal text-white p-5 text-center">
   I'm always excited to connect with fellow developers, discuss new ideas, collaborate on projects, or just have a friendly chat. Reach out through any of the platforms below — I’d love to hear from you!
        </p>
       </div>

        <div className="flex flex-col lg:flex-row gap-8 p-5">
          {/* Contact Form */}
          <form ref={form} onSubmit={sendEmail} className="flex relative flex-col gap-4 w-full lg:w-2/3">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="bg-white/10 text-white p-3 rounded-md border border-white/10 placeholder:text-white focus:outline-none focus:ring-2 focus:ring-white/20"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="bg-white/10 text-white p-3 rounded-md border border-white/10 placeholder:text-white focus:outline-none focus:ring-2 focus:ring-white/20"
            />
            <textarea
              rows="5"
              name="message"
              placeholder="Your Message"
              className="bg-white/10 text-white p-3 rounded-md border border-white/10 placeholder:text-white focus:outline-none focus:ring-2 focus:ring-white/20"
            ></textarea>
            <button
              type="submit"
              className="px-4 py-2 rounded-md bg-white text-black hover:bg-gray-200 transition"
            >
              Send Message
            </button>
{loading === true && (
  <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 text-white border border-white/10 px-4 py-1 text-center rounded-md">
    Please wait, your message is sending...
  </div>
)}

{loading === false && (
  <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 text-white border border-white/10 px-4 py-1 text-center rounded-md">
    Your message has been sent!
  </div>
)}


          </form>

          {/* Social Links */}
          <div
            ref={container}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-1/3"
          >
            {socialLinks.map(({ href, icon, text, image }, index) => (
              <a
                key={text}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                ref={(el) => (linkRefs.current[index] = el)}
                className="linkTag group relative flex items-center gap-2 px-4 py-2 border justify-center border-white/10 rounded-md text-white hover:bg-white hover:text-black transition" // Make sure overflow-hidden is added
              >
                {/* Image Wrapper */}
                <div className="absolute bottom-0 left-0 w-full h-full pointer-events-none ">
                  <img
                    src={image}
                    alt={text}
                    className="w-full h-[107px] z-100 transform translate-y-0 opacity-0 transition-all duration-1000 group-hover:translate-y-[-110%] group-hover:opacity-100"
                  />
                </div>

                {icon}
                <span className="z-10 text-2xl">{text}</span>
              </a>
            ))}
          </div>
        </div>

  <div className="bg-black/10 lg:mx-20">
    
         <p style={{
          // fontWeight: "bold",
                fontSize:"25px",
                // color: "transparent",
                fontFamily:"monospace",
                // WebkitTextStroke: "0.4px white",
                // textStroke: ".5px white",

         }} 
         
         className="text-[12px] leading-relaxed font-normal text-white p-5 text-center">
        Whether it's a quick question, a collaboration proposal, or just a hello — I'm just a message away. Let’s build something great together!
        </p>
       </div>


      </div>
    </section>
  );
};

export default Connect;
