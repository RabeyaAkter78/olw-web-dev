"use client";

import React from "react";
import { Card } from "antd";
import {
  CalendarOutlined,
  MessageOutlined,
  BarChartOutlined,
  CustomerServiceOutlined,
  TeamOutlined,
  SafetyOutlined,
} from "@ant-design/icons";

const services = [
  {
    icon: <CalendarOutlined className="text-3xl text-[#ed3c6a]" />,
    title: "Booking Management",
    description:
      "Streamline your reservation process with automated booking management and calendar synchronization.",
  },
  {
    icon: <MessageOutlined className="text-3xl text-[#ed3c6a]" />,
    title: "Guest Communication",
    description:
      "24/7 guest support and automated messaging to ensure seamless guest experiences.",
  },
  {
    icon: <BarChartOutlined className="text-3xl text-[#ed3c6a]" />,
    title: "Performance Analytics",
    description:
      "Track your property performance with detailed analytics and revenue insights.",
  },
  {
    icon: <CustomerServiceOutlined className="text-3xl text-[#ed3c6a]" />,
    title: "Cleaning Coordination",
    description:
      "Schedule and manage cleaning services to maintain pristine property conditions.",
  },
  {
    icon: <TeamOutlined className="text-3xl text-[#ed3c6a]" />,
    title: "Property Listing Optimization",
    description:
      "Optimize your listings with professional photography and compelling descriptions.",
  },
  {
    icon: <SafetyOutlined className="text-3xl text-[#ed3c6a]" />,
    title: "Damage Protection",
    description:
      "Comprehensive damage protection and security deposit management for peace of mind.",
  },
];

const OurService = () => {
  return (
    <section className="w-full py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#1a1a1a] mb-4">
            Our{" "}
            <span className="text-[#ed3c6a]">Service</span>
          </h2>
          <p className="text-base sm:text-lg text-[#6b7280] max-w-2xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border border-[#e5e7eb] rounded-xl hover:shadow-lg transition-shadow duration-300 !p-0 overflow-hidden"
              bodyStyle={{ padding: "24px" }}
            >
              <div className="flex flex-col gap-4">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-[#fef2f4] flex items-center justify-center">
                  {service.icon}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#6b7280] leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurService;