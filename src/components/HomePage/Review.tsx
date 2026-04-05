"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import user1 from "../../assets/u1.png";
import user2 from "../../assets/u2.png";
import user3 from "../../assets/u3.png";

const reviews = [
  {
    id: 1,
    name: "Jenny Wilson",
    image: user1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    name: "Esther Howard",
    image: user2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    name: "Robert Fox",
    image: user3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const StarRating = () => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <span key={i} className="text-yellow-400 text-sm">★</span>
    ))}
  </div>
);

const ReviewCard = ({
  review,
  isActive,
  onHover,
}: {
  review: typeof reviews[0];
  isActive: boolean;
  onHover: () => void;
}) => {
  return (
    <div
      onMouseEnter={onHover}
      className={`p-6 rounded-xl flex items-start gap-4 cursor-pointer transform transition-all duration-500 ease-in-out ${
        isActive
          ? "bg-white shadow-xl scale-105"
          : "bg-gray-50 hover:bg-white hover:shadow-lg"
      }`}
    >
      <div className="w-16 h-16 rounded-full overflow-hidden shrink-0">
        <Image
          src={review.image}
          alt={review.name}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex-1">
        <h4 className="font-semibold text-gray-900 mb-1">{review.name}</h4>
        <p className="text-gray-600 text-sm mb-2 line-clamp-3">{review.text}</p>
        <StarRating />
      </div>
    </div>
  );
};

const Review = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-16 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-gray-900 mb-4">
            Check Our Clients <span className="text-[#ed3c6a]">Review</span>
          </h2>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <ReviewCard
              key={review.id}
              review={review}
              isActive={activeIndex === index}
              onHover={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;