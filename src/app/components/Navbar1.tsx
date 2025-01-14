'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { VscAccount } from "react-icons/vsc";
import { CiSearch } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
import { IoHeartOutline } from "react-icons/io5";
import { HiMenu } from "react-icons/hi";

const Navbar1 = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <div className="bg-white px-4 md:px-6 py-2 mb-3 h-auto w-full">
                {/* Main Navbar */}
                <div className="flex items-center justify-between font-medium text-sm">
                    {/* Brand Name */}
                    <Link href={`/`}>  <h3 className="text-2xl font-bold text-[#252B42]">
                        Bandage
                    </h3></Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-4 text-[#737373]">
                        <ul className="mr-10 lg:mr-[471px] flex items-center gap-4">
                            <li><Link href="/">Home</Link></li>
                            <li>
                                <Link href="/productpage">Shop</Link>
                            </li>
                            <li><Link href="/about">About</Link></li>
                            <li><Link href="/team">Team</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                            <li>
                                <Link href="/pricing"> Pricing </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Desktop Account Section */}
                    <div className="hidden md:flex items-center gap-4 text-[#23A6F0]">
                        <Link href={""}>   <VscAccount size={20} className='transform transition duration-500 hover:scale-110' /></Link>
                        <Link href={""}> <p>Login / Register</p> </Link>
                        <Link href={""}> <CiSearch size={20} className='transform transition duration-500 hover:scale-110' /></Link>
                        <Link href={""}><BsCart2 size={20} className='transform transition duration-500 hover:scale-110' /></Link>
                        <Link href={""}> <IoHeartOutline size={20} className='transform transition duration-500 hover:scale-110' /></Link>
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

                {/* Mobile Menu - Slides down when menu is opened */}
                {isMenuOpen && (
                    <div className="md:hidden mt-[100.6px] pb-4 ">
                        <ul className="flex flex-col  justify-center items-center gap-4 text-[#737373] text-[30px]">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/productpage">Product</Link></li>
                            <li><Link href="/about">About</Link></li>
                            <li><Link href="/">Contact</Link></li>
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
};

export default Navbar1;
