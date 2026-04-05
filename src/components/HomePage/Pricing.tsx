"use client";

import { useState } from "react";
import icon from "../../assets/Arrow 2.png";
import Image from "next/image";
import { IoMdCheckmark } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
const plans = [
  {
    name: "Freebie",
    description:
      "Ideal for individuals who need quick access to basic features.",
    monthlyPrice: 0,
    yearlyPrice: 0,
    buttonStyle: "outline",
    features: [
      { text: "20,000+ of PNG & SVG graphics", included: true },
      { text: "Access to 100 million stock images", included: true },
      { text: "Upload custom icons and fonts", included: false },
      { text: "Unlimited Sharing", included: false },
      { text: "Upload graphics & video in up to 4k", included: false },
      { text: "Unlimited Projects", included: false },
      { text: "Instant Access to our design system", included: false },
      { text: "Create teams to collaborate on designs", included: false },
    ],
  },
  {
    name: "Professional",
    description:
      "Ideal for individuals who who need advanced features and tools for client work.",
    monthlyPrice: 25,
    yearlyPrice: 18,
    buttonStyle: "white",
    highlighted: true,
    features: [
      { text: "20,000+ of PNG & SVG graphics", included: true },
      { text: "Access to 100 million stock images", included: true },
      { text: "Upload custom icons and fonts", included: true },
      { text: "Unlimited Sharing", included: true },
      { text: "Upload graphics & video in up to 4k", included: true },
      { text: "Unlimited Projects", included: true },
      { text: "Instant Access to our design system", included: false },
      { text: "Create teams to collaborate on designs", included: false },
    ],
  },
  {
    name: "Enterprise",
    description:
      "Ideal for businesses who need personalized services and security for large teams.",
    monthlyPrice: 100,
    yearlyPrice: 75,
    buttonStyle: "outline",
    features: [
      { text: "20,000+ of PNG & SVG graphics", included: true },
      { text: "Access to 100 million stock images", included: true },
      { text: "Upload custom icons and fonts", included: true },
      { text: "Unlimited Sharing", included: true },
      { text: "Upload graphics & video in up to 4k", included: true },
      { text: "Unlimited Projects", included: true },
      { text: "Instant Access to our design system", included: true },
      { text: "Create teams to collaborate on designs", included: true },
    ],
  },
];

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="w-full py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative text-center mb-24 font-dmSans">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-gray-900 mb-4">
            Airbnb Assistent <span className="text-[#ed3c6a]">pricing</span>
          </h2>
          <p className="text-gray-600 mt-4 mb-8">
            Choose a plan that&apos;s right for you
          </p>

          <div className=" flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4">
            <span
              className={`text-sm ${!isYearly ? "text-gray-900 font-medium" : "text-gray-500"}`}
            >
              Pay Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-12 h-6 rounded-full transition-colors duration-300"
              style={{ backgroundColor: isYearly ? "#ed3c6a" : "#d1d5db" }}
            >
              <span
                className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform duration-300 ${
                  isYearly ? "translate-x-6" : ""
                }`}
              />
            </button>
            <div className="flex items-center gap-1">
              <span
                className={`text-sm ${isYearly ? "text-gray-900 font-medium" : "text-gray-500"}`}
              >
                Pay Yearly
              </span>
            </div>
            {/* Arrow and Save badge - positioned to curve from Pay Yearly to Save 25% */}
          </div>
          <div className="absolute top-40 md:top-20 -right-16 md:right-60 transform -translate-x-1/2 flex items-center mt-2">
            <Image
              src={icon}
              alt="Arrow Icon"
              height={55}
              width={90}
              className="object-contain w-fit mt-4 "
            />
            <span className="text-sm text-[#ed3c6a] font-medium mt-10">
              Save 25%
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-10">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl p-6 ${
                plan.highlighted
                  ? "bg-[#ed3c6a] text-white"
                  : "bg-white border border-pink-200"
              }`}
            >
              <h3
                className={`text-xl font-bold mb-2 ${plan.highlighted ? "text-white" : "text-gray-900"}`}
              >
                {plan.name}
              </h3>

              <p
                className={`text-sm mb-6 ${plan.highlighted ? "text-white/90" : "text-gray-500"}`}
              >
                {plan.description}
              </p>

              <div className="flex items-baseline gap-1 mb-6">
                <span
                  className={`text-5xl font-bold ${plan.highlighted ? "text-white" : "text-gray-900"}`}
                >
                  ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                </span>
                <span
                  className={`text-sm ${plan.highlighted ? "text-white/80" : "text-gray-500"}`}
                >
                  / Month
                </span>
              </div>

              <button
                className={`w-full py-3 rounded-md font-medium mb-8 transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-white text-[#ed3c6a] hover:bg-gray-100"
                    : "border border-[#ed3c6a] text-[#ed3c6a] hover:bg-[#ed3c6a] hover:text-white"
                }`}
              >
                Get Started Now
              </button>

              <ul className="space-y-4">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="shrink-0 w-5 h-5 mt-0.5">
                      {feature.included ? (
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center ${
                            plan.highlighted ? "bg-white/80" : "bg-pink-200"
                          }`}
                        >
                          <IoMdCheckmark className="w-3 h-3 text-pink-500" />
                        </div>
                      ) : (
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center ${
                            plan.highlighted ? "bg-white/80" : "bg-gray-200"
                          }`}
                        >
                       <RxCross2 className="w-3 h-3 text-gray-500" />
                        </div>
                      )}
                    </div>
                    <span
                      className={`text-sm ${
                        feature.included
                          ? plan.highlighted
                            ? "text-white"
                            : "text-gray-700"
                          : plan.highlighted
                            ? "text-white/60"
                            : "text-gray-400"
                      }`}
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
