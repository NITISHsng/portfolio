import gsap from 'gsap'
import React, { useEffect,useRef } from 'react'
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { Mail } from "lucide-react";
import { Download } from "lucide-react";
const SocialLink = () => {
      const buttonRef = useRef(null);
    useEffect(() => {
          const tl = gsap.timeline({delay:2.8});
        tl.fromTo(buttonRef.current.querySelectorAll("span,a"), {
            y: 40,
            opacity: 0,
        },{
        y: 0,
        opacity: 1,
        stagger: 0.03,
        duration: 2.5,
        ease: "elastic.out(1,0.6)",
      });
    }, [])
    
  return (
    <>
          <div
                ref={buttonRef}
                className="flex flex-col sm:flex-row justify-center md:justify-start items-center h-[80px] mt-8 gap-6"
              >
                
                <div className="flex items-center h-full gap-4">
                  {[
                    {
                      href: "https://github.com/NITISHsng",
                      icon: <BsGithub size={22} />,
                      label: "GitHub Profile",
                    },
                    {
                      href: "https://www.linkedin.com/in/nitish-singha",
                      icon: <BsLinkedin size={22} />,
                      label: "Linkedin Profile",
                    },
                    {
                      href: "https://x.com/NitishSing63297",
                      icon: <BsTwitter size={22} />,
                      label: "Twitter Profile",
                    },
                    {
                      href: "mailto:singhanitish20022@gmail.com?subject=Let's Connect&body=Hi Nitish,%0D%0A%0D%0AI found your portfolio and would like to get in touch with you",
                      icon: <Mail size={22} />,
                      label: "Mail",
                    },
                  ].map(({ href, icon, label }, index) => (
                    <div
                      key={index}
                      className="group relative"
                    >
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex justify-center items-center w-12 h-12 border-2 border-white/50 rounded-full text-white transition-all duration-300 hover:scale-110 hover:border-white hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                        aria-label={label}
                      >
                        {icon}
                      </a>
                    </div>
                  ))}
                </div>
    
                <div className="flex justify-center items-center">
                  <a
                    href="/devnitishx.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border-2 border-white/50 text-white py-2 px-6 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:border-white hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] active:scale-95"
                  >
                    Resume <Download size={18} />
                  </a>
                </div>
              </div>
    </>
  )
}

export default SocialLink