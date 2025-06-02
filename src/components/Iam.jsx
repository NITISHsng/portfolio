import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const Iam = () => {
  const iamRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    if (iamRef.current) {
      tl.from(iamRef.current, {
        y: 50,
        duration: 0.4,
        opacity: 0,
        ease: "power3.out",
      });
    }
  }, []);

  return (
    <div
      ref={iamRef}
      className="flex justify-center left-[-100px] relative md:justify-start md:left-0"
    >
      <h2 className="text-3xl flex mb-6 relative ">
        I'm a&nbsp;
        <span className="relative w-[100px] md:w-[150px]">
          <span
            data-text="B.Tech&nbsp;Student"
            className="role block"
            style={{ "--i": 0 }}
          >
            B.Tech&nbsp;Student
          </span>
          <span
            data-text="Tech&nbsp;Enthusiast"
            className="role block"
            style={{ "--i": 1 }}
          >
            Tech&nbsp;Enthusiast
          </span>
          <span
            data-text="Problem&nbsp;Solver"
            className="role block"
            style={{ "--i": 2 }}
          >
            Problem&nbsp;Solver
          </span>
          <span
            data-text="Web&nbsp;Developer"
            className="role block"
            style={{ "--i": 3 }}
          >
            Web&nbsp;Developer
          </span>
        </span>
      </h2>
    </div>
  );
};

export default Iam;
