"use client";

import Image from "next/image";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import manImage from "../../assets/smiling-male-office-worker 1.png";
import leftTop from "../../assets/leftTop.png";
import calender from "../../assets/calender.png";
import rightTop from "../../assets/righttop.png";
const features = [
  "Brilliant Client Service",
  "Flexibility & Adaptibility",
  "We make it Personal",
  "We have expart in our team",
];

const WhyChooseUs = () => {
  return (
    <section className="w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-pink-50 rounded-3xl p-8 lg:p-16 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-gray-900 leading-tight">
                Few Reasons Why you
                <br />
                Choose us?
              </h2>

              <p className="text-gray-600 text-sm leading-relaxed max-w-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation
              </p>

              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#ed3c6a]/20 flex items-center justify-center">
                      <FiCheck className="w-4 h-4 text-[#ed3c6a]" />
                    </div>
                    <span className="text-gray-900 font-medium text-sm">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button className="mt-4 px-6 py-3 bg-[#ed3c6a] text-white font-medium rounded-md flex items-center gap-2 hover:bg-[#d9345a] transition-colors">
                Schedule A Meeting
                <FiArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="relative min-h-125 lg:min-h-150">
              <div className="absolute bottom-0 right-0 w-full h-[55%] bg-[#fac4d2] rounded-full z-0"></div>

              <div className="absolute bottom-0 right-10 w-[320px] lg:w-105 z-10">
                <Image
                  src={manImage}
                  alt="Smiling office worker"
                  className="object-contain"
                />
              </div>

              <div className="absolute top-60 left-0 lg:-left-10 z-20">
                <Image
                  src={leftTop}
                  height={150}
                  width={200}
                  alt="Property listing"
                  className="object-contain w-fit"
                />
              </div>

              <div className="absolute top-45 right-0 lg:-right-10 z-20">
                <Image
                  src={rightTop}
                  height={150}
                    width={200}
                  alt="Brand logos"
                  className="object-contain w-fit"
                />
              </div>

              <div className="absolute -bottom-20 right-0 lg:-left-30 z-0">
                <Image
                  src={calender}
                  alt="Calendar"
                  className="object-contain w-fit"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
