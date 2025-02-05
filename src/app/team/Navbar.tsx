"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; 
import { CiSearch } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
import { HiMenu } from "react-icons/hi";
import { FaAngleRight } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); 

  
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/team", label: "Team" },
    { href: "/productpage", label: "Product" },
    { href: "/pricing", label: "Pricing" },


  ];

  return (
    <div className="bg-white px-4 md:px-6 py-2 mb-3 h-auto w-full">
      <div className="flex items-center justify-between md:justify-around font-medium text-sm">
        {/* Brand Name */}
        <Link href="/">
          <h3 className="text-2xl font-bold text-[#252B42]">Bandage</h3>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <ul className="flex justify-center items-center gap-6 font-bold text-[#737373]">
            {links.map(({ href, label }, index) => (
              <li key={index} className="relative">
                <Link
                  href={href}
                  className={`${
                    pathname === href
                      ? "text-[#23A6F0] font-semibold"
                      : "text-[#737373]"
                  } transition-all duration-300`}
                >
                  {label}
                  {pathname === href && (
                    <span
                      className="absolute left-0 bottom-0 w-full h-[2px] bg-[#23A6F0] rounded-full animate-slideIn"
                    ></span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop-Specific Buttons */}
        <div className="hidden md:flex items-center gap-5">
          <Link href="/" className="text-[#23a6f0] text-sm font-bold">
            Login
          </Link>
          <Link href="">
            <button className="bg-[#23a6f0] text-white text-sm font-bold py-[15px] px-[25px] transition-transform transform hover:translate-y-0 active:translate-y-1 rounded-md flex items-center gap-2">
              Become a member <FaAngleRight size={16} />
            </button>
          </Link>
        </div>

        {/* Mobile Icons */}
        <div className="flex md:hidden items-center gap-4">
          <CiSearch size={20} className="text-gray-600" />
          <BsCart2 size={20} className="text-gray-600" />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-600"
          >
            <HiMenu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-6 pb-4">
          <ul className="flex flex-col justify-center items-center gap-4 text-[#737373] text-lg">
            {links.map(({ href, label }, index) => (
              <li key={index}>
                <Link
                  href={href}
                  className={`${
                    pathname === href
                      ? "text-[#23A6F0] font-semibold"
                      : "text-[#737373]"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      <style jsx>{`
        @keyframes slideIn {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Navbar;
