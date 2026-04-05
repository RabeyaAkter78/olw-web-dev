"use client";

import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import m1 from "../../assets/Vector.png";
import m2 from "../../assets/layer1.png";
import m3 from "../../assets/m3.png";
import m4 from "../../assets/m4.png";
import m5 from "../../assets/m5.png";
import m6 from "../../assets/m6.png";

const logos = [
  { src: m1, alt: "Company Logo 1" },
  { src: m2, alt: "Company Logo 2" },
  { src: m3, alt: "Company Logo 3" },
  { src: m4, alt: "Company Logo 4" },
  { src: m5, alt: "Company Logo 5" },
  { src: m6, alt: "Company Logo 6" },
];


const MarqueeComponent = () => {
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="w-full py-12 lg:py-16 bg-white border-t border-[#f0f0f0]">
      <div className="px-4">
        <h2 className="text-center text-lg sm:text-xl font-semibold text-[#1a1a1a] mb-10">
      Trusted by leaders in 50+ industries
        </h2>
        <div className="bg-neutral-100 h-19.25 w-full mb-10 flex items-center">
          <Marquee
            speed={40}
            gradient={false}
            pauseOnHover={true}
            className="overflow-hidden"
          >
            <div className="flex items-center space-x-12">
              {duplicatedLogos.map((logo, index) => (
                <Image
                  key={index}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-8"
                />
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default MarqueeComponent;
