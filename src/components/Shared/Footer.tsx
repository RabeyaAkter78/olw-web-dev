"use client";

import Image from "next/image";
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import googleLogo from "../../assets/Google-Logo.wine 1.png";

const companyLinks = [
  { label: "About", href: "#" },
  { label: "Features", href: "#" },
  { label: "Works", href: "#" },
  { label: "Career", href: "#" },
];

const helpLinks = [
  { label: "Customer Support", href: "#" },
  { label: "Delivery Details", href: "#" },
  { label: "Terms & Conditions", href: "#" },
  { label: "Privacy Policy", href: "#" },
];

const resourceLinks = [
  { label: "Free eBooks", href: "#" },
  { label: "Development Tutorial", href: "#" },
  { label: "How to - Blog", href: "#" },
  { label: "Youtube Playlist", href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <Image
              src={googleLogo}
              alt="Google"
              width={120}
              height={40}
              className="mb-4"
            />
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nullam dictum aliquet accumsan porta lectus ridiculus in
              mattis. Netus sodales in volutpat ullamcorper amet
              adipiscing fermentum.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-gray-600 hover:text-[#ed3c6a] transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-[#ed3c6a] transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-[#ed3c6a] transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-[#ed3c6a] transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-500 text-sm hover:text-[#ed3c6a] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Help</h4>
            <ul className="space-y-3">
              {helpLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-500 text-sm hover:text-[#ed3c6a] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Resources</h4>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-500 text-sm hover:text-[#ed3c6a] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-[#1a0b2e] py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-400 text-sm">
            &copy; Copyright 2026, All Rights Reserved by XYZ
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;