import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const Iam = () => {
  const iamRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({delay:1.8});
    if (iamRef.current) {
      tl.fromTo(iamRef.current, {
         y: 100,
        opacity: 0,
      },{
        y: 0,
        duration:.3,
        opacity: 1,
        ease: "power3.out",
      });
    }
  }, []);

  return (
  <>
         
          <div
            ref={iamRef}
            className="flex justify-center left-[-100px]  relative md:justify-start md:left-0 mt-4"
            style={{ fontFamily: "monospace" }}
          >
            <h2 className="text-2xl mb-6 relative inline-block ">
              I'm a&nbsp;
              <span className="relative w-[50px]">
                <span
                  data-text="DSA&nbsp;Learner"
                  className="role text-red-500"
                  style={{ "--i": 0 }}
                >
                  DSA&nbsp;Learner
                </span>
                <span
                  data-text="Tech&nbsp;Enthusiast"
                  className="role"
                  style={{ "--i": 1 }}
                >
                  Tech&nbsp;Enthusiast
                </span>
                <span
                  data-text="Problem&nbsp;Solver"
                  className="role"
                  style={{ "--i": 2 }}
                >
                  Problem&nbsp;Solver{" "}
                </span>
                <span
                  data-text="Web&nbsp;Developer"
                  className="role"
                  style={{ "--i": 3 }}
                >
                  Web&nbsp;Developer
                </span>
              </span>
            </h2>
          </div>
  </>
  );
};

export default Iam;
