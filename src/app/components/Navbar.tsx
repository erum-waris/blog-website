"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-200 via-gray-400 to-[#91AC85] shadow-lg py-1">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between h-16 md:h-28">
          {/* Logo Section */}
          <div>
            <Image
              src="/images/parenting-logo.png"
              alt="parents logo"
              width={100}
              height={100}
              className="w-[70px] h-[70px] md:w-[120px] md:h-[120px] lg:w-[150px] lg:h-[150px]"
              priority={true}
            />
          </div>

          {/* Links for Larger Screens */}
          <div className="hidden md:flex space-x-6">
            <Link
              href="/"
              className="hover:text-[#ece6e8] hover:border-b hover:border-white hover:py-1 text-lg lg:text-2xl font-bold "
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-[#ece6e8] hover:border-b hover:border-white hover:py-1 text-lg lg:text-2xl font-bold"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="hover:text-[#ece6e8] hover:border-b hover:border-white hover:py-1 text-lg lg:text-2xl font-bold"
            >
              Contact
            </Link>
            <Link
              href="/blogs"
              className="hover:text-[#ece6e8] hover:border-b hover:border-white hover:py-1 text-lg lg:text-2xl font-bold"
            >
              Blogs
            </Link>
          </div>

          {/* Hamburger Menu for Small Screens */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none w-10 h-10 text-3xl"
            >
              {isOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>

        {/* Links for Small Screens */}
        {isOpen && (
          <div className="md:hidden space-y-2 mt-2 flex flex-col justify-center items-center">
            <Link href="/" className="hover:text-[#ece6e8] hover:border-b hover:border-white hover:py-1 transition block text-base">
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-[#ece6e8] hover:border-b hover:border-white hover:py-1 transition block  text-base"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="hover:text-[#ece6e8] hover:border-b hover:border-white hover:py-1 transition block  text-base"
            >
              Contact
            </Link>
            <Link
              href="/blogs"
              className="hover:text-[#ece6e8] hover:border-b hover:border-white hover:py-1 transition block  text-base"
            >
              Blogs
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
