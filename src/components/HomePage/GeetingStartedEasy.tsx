"use client";

import Image from "next/image";
import E1 from "../../assets/e1.png";
import E2 from "../../assets/Group 39878.png";
import E3 from "../../assets/Group 39880.png";

const steps = [
  {
    number: "01",
    image: E1,
    title: "Add requirements & sign up today",
  },
  {
    number: "02",
    image: E2,
    title: "Connect with your CSM & onboarding team",
  },
  {
    number: "03",
    image: E3,
    title: "Meet your STR Assistant next week",
  },
];

const GeetingStartedEasy = () => {
  return (
    <section className="w-full py-16 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 font-dmSans">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-gray-900 mb-4">
            Getting Started is <span className="text-[#ed3c6a]">Easy</span>
          </h2>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative w-full">
                <div className="absolute -top-5 -left-4 w-16 h-16 rounded-full border-4 border-[#ed3c6a] bg-white flex items-center justify-center z-10">
                  <span className="text-lg font-bold text-gray-900">
                    {step.number}
                  </span>
                </div>

                <div className="border border-pink-100 rounded-xl p-8 pt-12 flex items-center justify-center min-h-45 bg-white">
                  <Image
                    src={step.image}
                    alt={step.title}
                    className="object-contain max-h-20 w-auto"
                  />
                </div>
              </div>

              <h3 className="mt-6 text-center font-semibold text-gray-900 max-w-50">
                {step.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GeetingStartedEasy;