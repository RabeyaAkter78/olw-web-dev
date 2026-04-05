"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button, Drawer } from "antd";
import { ArrowRightOutlined, MenuOutlined } from "@ant-design/icons";
import logo from "../../assets/Google-Logo.wine 1.png";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/", active: true},
  { name: "About", href: "/about", active: false },
  { name: "Services", href: "/services", active: false,  },
  { name: "Pricing", href: "/pricing", active: false },
  { name: "Blog", href: "/blog", active: false },
  { name: "Resources", href: "/resources", active: false },
];

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const showDrawer = () => {
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-[#f0f0f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-2">
            <Image src={logo} alt="Logo" className=" object-contain" />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`
                  px-4 py-2 text-sm font-medium transition-colors duration-200
                  ${
                    link.active
                      ? "text-[#ed3c6a] border-b-2 border-[#ed3c6a]"
                      : "text-[#1a1a1a] hover:text-[#ed3c6a]"
                  }
                 
                `}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <button className="px-6 py-3 bg-[#ed3c6a] hover:bg-[#ed4c67f6] text-white rounded-md flex items-center gap-2 text-base shadow-md">
              Schedule A Meeting
              <ArrowRightOutlined />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={showDrawer}
            className="lg:hidden p-2 text-[#1a1a1a] hover:text-[#ed3c6a] transition-colors"
            aria-label="Open menu"
          >
            <MenuOutlined className="text-2xl" />
          </button>
        </div>

        {/* Ant Design Drawer for Mobile Navigation */}
        <Drawer
          title={
            <Link href="/" className="flex items-center" onClick={closeDrawer}>
              <Image src={logo} alt="Logo" width={100} height={32} />
            </Link>
          }
          placement="right"
          onClose={closeDrawer}
          open={drawerOpen}
          width={300}
          styles={{
            header: { borderBottom: "1px solid #f0f0f0" },
            body: { padding: "16px" },
          }}
        >
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={closeDrawer}
                className={`
                  px-4 py-3 text-sm font-medium transition-colors duration-200 rounded-lg
                  ${
                    link.active
                      ? "text-[#ed3c6a] bg-[#fef2f4] "
                      : "text-[#1a1a1a] hover:text-[#ed3c6a] hover:bg-[#fef2f4]"
                  }
                 
                `}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <button className="px-6 py-3 bg-[#ed3c6a] hover:bg-[#ed4c67f6] text-white rounded-md flex items-center gap-2 text-base shadow-md">
                Schedule A Meeting
                <ArrowRightOutlined />
              </button>
            </div>
          </nav>
        </Drawer>
      </div>
    </header>
  );
};

export default Navbar;
