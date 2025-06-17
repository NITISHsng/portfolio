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
                
                <div className=" flex items-center h-full gap-0">
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
                      className="h-full flex justify-center items-center w-20 hover:items-start transform duration-300"
                    >
                      <span className="border-2 border-white rounded-full p-[10px]">
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:bg-black/70 w-full"
                          aria-label={label} 
                        >
                          <span>{icon}</span>
                        </a>
                      </span>
                    </div>
                  ))}
                </div>
    
                <div className="h-full w-fit flex justify-center items-center hover:items-start transform transition-all duration-300">
                  <a
                    href="/devnitishx.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gap-2 flex hover:bottom-20 bg-wgite border-2 border-white text-white py-1 px-5 rounded-[5px] hover:bg-black/70 font-semibold"
                  >
                    Resume <Download size={16} className="relative top-[4px]" />
                  </a>
                </div>
              </div>
    </>
  )
}

export default SocialLink