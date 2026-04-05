"use client";

import Image from "next/image";

import icon1 from "../../assets/fi_3176366.png";
import icon2 from "../../assets/fi_1048953.png";
import icon3 from "../../assets/fi_2954884.png";
import icon4 from "../../assets/Layer_13.png";
import icon5 from "../../assets/Group 39894.png";
import icon6 from "../../assets/Group.png";

const services = [
  {
    icon: icon1,
    title: "Manage Property Listings",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: icon2,
    title: "Manage Customer Bookings",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: icon3,
    title: "Schedule House Cleaning",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: icon4,
    title: "Monitor Guest Reviews",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: icon5,
    title: "Track & Report Expenses",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: icon6,
    title: "Guest Inquiry & Support",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const OurService = () => {
  return (
    <section className="w-full py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-gray-900 mb-4">
            Our <span className="text-[#ed3c6a]">Service</span>
          </h2>
          <p className=" text-gray-900 max-w-3xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className=" border border-pink-200 rounded-xl p-6  hover:shadow-lg transition-all duration-300 font-dmSans hover:border-none hover:bg-white"
            >
              <div className="mb-4">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={85}
                  height={85}
                  className="w-21 h-21 object-contain"
                />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight mt-8">
                {service.title}
              </h3>

              <p className=" text-gray-600 leading-relaxed mb-5">
                {service.description}
              </p>

              <button className="px-5 py-2  font-medium text-[#ed3c6a] border border-[#ed3c6a] rounded-full hover:bg-[#ed3c6a] hover:text-white transition-all duration-300">
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurService;
