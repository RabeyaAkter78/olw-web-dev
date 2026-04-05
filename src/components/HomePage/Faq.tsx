"use client";

import { useState } from "react";
import Image from "next/image";
import { FiMinus, FiPlus } from "react-icons/fi";
import avatarGroup from "../../assets/Avatar group.png";

const faqData = [
  {
    id: 1,
    question: "Is there a free trial available?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    id: 2,
    question: "Can I change my plan later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time from your account settings. The changes will take effect on your next billing cycle.",
  },
  {
    id: 3,
    question: "What is your cancellation policy?",
    answer:
      "You can cancel your subscription at any time. If you cancel, you'll still have access to your account until the end of your current billing period.",
  },
  {
    id: 4,
    question: "Can other info be added to an invoice?",
    answer:
      "Yes, you can add custom information to your invoices such as your company details, tax information, or purchase order numbers.",
  },
  {
    id: 5,
    question: "How does billing work?",
    answer:
      "We offer monthly and annual billing options. Annual plans come with a discount. You'll be charged automatically on your billing date.",
  },
  {
    id: 6,
    question: "How do I change my account email?",
    answer:
      "You can change your email address from your account settings. We'll send a verification email to confirm the change.",
  },
];

const Faq = () => {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full py-16 lg:py-24 ">
      <div className="container mx-auto px-4  sm:px-6 lg:px-8 bg-neutral-100  py-12 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Frequently asked <span className="text-[#ed3c6a]">questions</span>
          </h2>
          <p className="text-gray-600">
            Everything you need to know about the product and billing.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-0 max-w-3xl mx-auto">
          {faqData.map((faq) => (
            <div
              key={faq.id}
              className="border-b border-[#ed3c6a]/20 last:border-b-0"
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="font-semibold text-gray-900 text-sm">
                  {faq.question}
                </span>
                <span className="ml-4 shrink-0">
                  {openId === faq.id ? (
                    <FiMinus className="w-5 h-5 text-[#ed3c6a]" />
                  ) : (
                    <FiPlus className="w-5 h-5 text-[#ed3c6a]" />
                  )}
                </span>
              </button>
              {openId === faq.id && (
                <div className="pb-5">
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 container mx-auto text-center bg-neutral-100  py-12 rounded-lg">
        <Image
          src={avatarGroup}
          alt="Our support team"
          width={120}
          height={40}
          className="mx-auto mb-4"
        />
        <h3 className="text-lg font-bold text-gray-900 mb-2">
          Still have Questions?
        </h3>
        <p className="text-gray-500 text-sm mb-6">
          Can&apos;t find the answer you&apos;re looking for? Please chat to our
          friendly team.
        </p>
        <button className="px-6 py-2.5 bg-[#ed3c6a] text-white font-medium text-sm rounded-md hover:bg-[#d9345a] transition-colors">
          Get in touch
        </button>
      </div>
    </section>
  );
};

export default Faq;
