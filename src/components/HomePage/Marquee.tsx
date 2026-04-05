"use client";

import React from "react";
import Image from "next/image";

// Brand logos for the marquee
const brands = [
  { name: "Airbnb", src: "/Vector.png", width: 100 },
  { name: "Booking.com", src: "/layer1.png", width: 120 },
  { name: "Vrbo", src: "/m3.png", width: 80 },
  { name: "Tripadvisor", src: "/m4.png", width: 140 },
  { name: "Agoda", src: "/m5.png", width: 80 },
  { name: "Expedia", src: "/m6.png", width: 100 },
];

const Marquee = () => {
  // Duplicate the brands array for seamless looping
  const duplicatedBrands = [...brands, ...brands, ...brands];

  return (
    <section className="w-full py-12 lg:py-16 bg-white border-t border-[#f0f0f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-center text-lg sm:text-xl font-semibold text-[#1a1a1a] mb-10">
          Trusted by leaders in 50+ industries
        </h2>

        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          {/* Gradient Overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Scrolling Track */}
          <div className="flex animate-marquee">
            {duplicatedBrands.map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="flex-shrink-0 mx-8 sm:mx-12 flex items-center justify-center"
              >
                <Image
                  src={brand.src}
                  alt={brand.name}
                  width={brand.width}
                  height={40}
                  className="opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Keyframe animation for marquee */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Marquee;