"use client";

import Image from "next/image";
import tool1 from "../../assets/t1.png";
import tool2 from "../../assets/t2.png";
import tool3 from "../../assets/t3.png";
import tool4 from "../../assets/t4.png";
import tool5 from "../../assets/t5.png";
import tool6 from "../../assets/t6.png";

const tools = [
  { id: 1, src: tool1, alt: "PriceLabs" },
  { id: 2, src: tool2, alt: "Wheelhouse" },
  { id: 3, src: tool3, alt: "Beyond Pricing" },
  { id: 4, src: tool4, alt: "Hostfully" },
  { id: 5, src: tool5, alt: "Guesty" },
  { id: 6, src: tool6, alt: "LODGIFY" },
  { id: 7, src: tool4, alt: "Hostfully" },
  { id: 8, src: tool5, alt: "Guesty" },
  { id: 9, src: tool6, alt: "LODGIFY" },
];

const Tools = () => {
  return (
    <section className="w-full py-16 lg:pt-24 ">
      <div className="max-w-6xl mx-auto text-center mb-12 px-4 md:px-0">
        <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-gray-900 mb-4">
          Our <span className="text-[#ed3c6a]">Tools</span>
        </h2>
        <p className=" text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      <div className="bg-neutral-100 py-8 md:mt-20 px-4 md:px-0">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {tools.map((tool) => (
            <div
              key={tool.id}
              className="bg-white rounded-xl px-10 py-14 flex items-center justify-center hover:shadow-lg transition-shadow duration-300 h-28"
            >
              <Image
                src={tool.src}
                alt={tool.alt}
                className="object-contain max-h-12 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
