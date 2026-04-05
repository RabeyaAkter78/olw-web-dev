"use client";

import { ArrowRightOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
const floatingDots = [
  { color: "#6366f1", size: 10, top: "22%", left: "5%" },      
  { color: "#fb7185", size: 10, top: "35%", left: "12%" },     
  { color: "#4ade80", size: 10, top: "12%", left: "48%" },   
  { color: "#fbbf24", size: 8, top: "22%", right: "12%" },     
  { color: "#22d3ee", size: 10, bottom: "18%", left: "48%" }, 
  { color: "#1e40af", size: 8, bottom: "22%", right: "5%" },  
  { color: "#fbbf24", size: 6, bottom: "8%", left: "8%" },     
];

const brandIcons = [
  { src: "/img1.png", top: "18%", left: "18%", rotate: -12, width: 75, height: 75 },     
  { src: "/img2.png", top: "60%", left: "15%", rotate: 12, width: 60, height: 60 },     
  { src: "/img3.png", top: "18%", right: "18%", rotate: 12, width: 70, height: 70 },    
  { src: "/img4.png", top: "55%", right: "15%", rotate: -8, width: 70, height: 70 },     
];

const Hero = () => {
  return (
    <section className="relative w-full min-h-175 lg:min-h-187.5 overflow-hidden bg-white">
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `
            linear-gradient(to right, #f0f0f0 1px, transparent 1px),
            linear-gradient(to bottom, #f0f0f0 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }}
      />

      <div 
        className="absolute top-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(254, 242, 242, 0.95) 0%, rgba(254, 242, 242, 0.6) 40%, transparent 100%)',
        }}
      />

      {floatingDots.map((dot, index) => (
        <div
          key={`dot-${index}`}
          className="absolute rounded-full"
          style={{
            width: dot.size,
            height: dot.size,
            backgroundColor: dot.color,
            top: dot.top,
            left: dot.left,
            right: dot.right,
            bottom: dot.bottom,
          }}
        />
      ))}

      {brandIcons.map((icon, index) => (
        <div
          key={`brand-${index}`}
          className="absolute hidden md:block z-10"
          style={{
            top: icon.top,
            left: icon.left,
            right: icon.right,
            transform: `rotate(${icon.rotate}deg)`,
          }}
        >
          <Image
            src={icon.src}
            alt="Brand icon"
            width={icon.width}
            height={icon.height}
            className="opacity-90"
          />
        </div>
      ))}

      <div className="relative z-20 flex flex-col items-center justify-center min-h-175 lg:min-h-187.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center font-dmSans">
          <h1 className="text-[40px] sm:text-[48px] lg:text-[56px] leading-[1.15] tracking-tight mb-6">
            <span className="font-bold text-gray-900">Airbnb Assistants For</span>
            <br />
            <span className="font-normal text-gray-900">Property Management</span>
          </h1>

          <p className="text-[15px] sm:text-base text-gray-600 max-w-xl mx-auto mb-10 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <div className="flex flex-col items-center gap-4">
            <button
              className="px-6 py-3 bg-[#ed3c6a] hover:bg-[#ed4c67f6] text-white rounded-md flex items-center gap-2 text-base shadow-md"
            >
              Schedule A Meeting
              <ArrowRightOutlined />
            </button>

            <Link 
              href="/pricing" 
              className="text-gray-600 hover:text-[#ed4c67] text-sm font-medium transition-colors duration-200 underline underline-offset-4"
            >
              See Pricing
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;