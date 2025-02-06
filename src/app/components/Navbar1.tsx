'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { VscAccount } from "react-icons/vsc";
import { CiSearch } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
import { IoHeartOutline } from "react-icons/io5";
import { HiMenu } from "react-icons/hi";

const Navbar1 = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();


    const links = [
        { href: "/", label: "Home" },
        { href: "/productpage", label: "Shop" },
        { href: "/about", label: "About" },
        { href: "/team", label: "Team" },
        { href: "/contact", label: "Contact" },
        { href: "/pricing", label: "Pricing" },
    ];

    return (
        <>
            <div className="bg-white px-4 md:px-6 py-2 mb-3 h-auto w-full">
                {/* Main Navbar */}
                <div className="flex items-center justify-between font-medium text-sm">
                    {/* Brand Name */}
                    <Link href={`/`}>
                        <h3 className="text-2xl font-bold text-[#252B42]">Bandage</h3>
                    </Link>

                    <div className="hidden md:flex items-center gap-4 text-[#737373]">
                        <ul className="mr-10 lg:mr-[471px] flex items-center gap-4 text-[16px]">
                            {links.map(({ href, label }, index) => (
                                <li key={index}>
                                    <Link
                                        href={href}
                                        className={`relative ${pathname === href
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

                    {/* Desktop Account Section */}
                    <div className="hidden md:flex items-center gap-4 text-[#23A6F0]">
                        <Link href={""}>
                            <VscAccount
                                size={24}
                                className="transform transition duration-500 hover:scale-110"
                            />
                        </Link>
                        <Link href={""}>
                            <p className='text-[14px]'>Login / Register</p>
                        </Link>
                        <Link href={""}>
                            <CiSearch
                                size={24}
                                className="transform transition duration-500 hover:scale-110"
                            />
                        </Link>
                        <Link href={""}>
                            <IoHeartOutline
                                size={24}
                                className="transform transition duration-500 hover:scale-110"
                            />
                        </Link>
                        <Link href={"/cart"}>
                            <BsCart2
                                size={24}
                                className="transform transition duration-500 hover:scale-110"
                            />
                        </Link>
                    </div>

                    {/* Mobile Icons */}
                    <div className="flex md:hidden items-center gap-4">
                        <CiSearch size={24} className="text-gray-600" />
                        <BsCart2 size={24} className="text-gray-600" />
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
                    <div className="md:hidden mt-[100.6px] pb-4">
                        <ul className="flex flex-col justify-center items-center gap-4 text-[#737373] text-[30px]">
                            {links.map(({ href, label }, index) => (
                                <li key={index}>
                                    <Link
                                        href={href}
                                        className={`${pathname === href
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
            </div>
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
        </>
    );
};

export default Navbar1;
