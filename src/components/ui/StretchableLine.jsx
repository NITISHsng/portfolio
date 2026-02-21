import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";

export default function StretchableLine() {
  const svgRef = useRef(null);
  const containerRef = useRef(null);
  const touchRef = useRef(false);
  const [dimensions, setDimensions] = useState({ width: 1400 });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width } = containerRef.current.getBoundingClientRect();
        setDimensions({ width });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  useEffect(() => {
    const string = containerRef.current;

    const handleMouseMove = (e) => {
      const rect = string.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (y >= 0 && y <= 100) {
        touchRef.current = true;
      }

      if (touchRef.current) {
        const path = `M 50 50 Q ${x} ${y} ${dimensions.width - 50} 50`;
        gsap.to(svgRef.current, {
          attr: { d: path },
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    const handleMouseLeave = () => {
      touchRef.current = false;
      const midX = dimensions.width / 2;
      const finalPath = `M 50 50 Q ${midX} 50 ${dimensions.width - 50} 50`;
      gsap.to(svgRef.current, {
        attr: { d: finalPath },
        duration: 1.5,
        ease: "elastic.out(1, 0.3)",
      });
    };

    string.addEventListener("mousemove", handleMouseMove);
    string.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      string.removeEventListener("mousemove", handleMouseMove);
      string.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [dimensions]);

  return (
    <div className="w-full flex justify-center items-center z-0 overflow-x-hidden">
      <div
        ref={containerRef}
        className="w-full max-w-[1400px] h-[100px] "
      >
        <svg
          width="100%"
          height="100"
          xmlns="http://www.w3.org/2000/svg"
          viewBox={`0 0 ${dimensions.width} 100`}
          preserveAspectRatio="none"
        >
          <path
            ref={svgRef}
            d={`M 50 50 Q ${dimensions.width / 2} 50 ${dimensions.width - 50} 50`}
            stroke="white"
            fill="transparent"
          />
        </svg>
      </div>
    </div>
  );
}
