"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "antd";
import {
  ArrowRightOutlined,
  MenuOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import logo from "../../assets/Google-Logo.wine 1.png";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/", active: true },
  { name: "About", href: "/about", active: false },
  { name: "Services", href: "/services", active: false, bordered: true },
  { name: "Pricing", href: "/pricing", active: false },
  { name: "Blog", href: "/blog", active: false },
  { name: "Resources", href: "/resources", active: false },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-[#f0f0f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src={logo} alt="Logo" className=" object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`
                  px-4 py-2 text-sm font-medium transition-colors duration-200
                  ${
                    link.active
                      ? "text-[#ed3c6a]"
                      : "text-[#1a1a1a] hover:text-[#ed3c6a]"
                  }
                  ${link.bordered ? "border border-[#e5e7eb] rounded" : ""}
                `}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Button
              type="primary"
              className="!bg-[#ed3c6a] !border-[#ed3c6a] hover:!bg-[#d9355f] hover:!border-[#d9355f] !text-white !font-medium !px-6 !h-11 !rounded-lg flex items-center gap-2"
            >
              Schedule A Meeting
              <ArrowRightOutlined />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#1a1a1a] hover:text-[#ed3c6a] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <CloseOutlined className="text-2xl" />
            ) : (
              <MenuOutlined className="text-2xl" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-[#f0f0f0]">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`
                    px-4 py-3 text-sm font-medium transition-colors duration-200 rounded-lg
                    ${
                      link.active
                        ? "text-[#ed3c6a] bg-[#fef2f4]"
                        : "text-[#1a1a1a] hover:text-[#ed3c6a] hover:bg-[#fef2f4]"
                    }
                    ${link.bordered ? "border border-[#e5e7eb]" : ""}
                  `}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 px-4">
                <Button
                  type="primary"
                  className="!bg-[#ed3c6a] !border-[#ed3c6a] hover:!bg-[#d9355f] hover:!border-[#d9355f] !text-white !font-medium !w-full !h-11 !rounded-lg flex items-center justify-center gap-2"
                >
                  Schedule A Meeting
                  <ArrowRightOutlined />
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
