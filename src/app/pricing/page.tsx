'use client';
import Link from 'next/link';
import React, { useState } from 'react'
import { BsCart2 } from 'react-icons/bs';
import { CiSearch } from 'react-icons/ci';
import { FaAngleRight } from 'react-icons/fa6';
import { HiMenu } from 'react-icons/hi';
import { IoIosCheckmark } from "react-icons/io";
import ToggleSwitch from './ToggleSwitch';
import PlanCard from './PlanCard';

const Pricing = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [isActive, setIsActive] = useState(false);

    const toggleSwitch = () => {
        setIsActive(!isActive);
    };
    return (
        <>

            <div className='bg-[#FAFAFA] width-full h-full'>
                <div className=' mx-[195px] bg-white h-[380px]'>
                    {/* Main Navbar Start */}
                    <div className="bg-white px-4 md:px-6 py-2 mb-3 h-auto w-full ">
                        <div className="flex items-center justify-between md:justify-around font-medium text-sm">
                            <h3 className="text-2xl font-bold text-[#252B42]">Bandage</h3>

                            {/* Desktop Navigation */}
                            <div className="hidden md:flex">
                                <ul className="flex justify-center items-center gap-6 font-bold text-[#737373]">
                                    <li><Link href="/">Home</Link></li>
                                    <li><Link href="/">Pricing</Link></li>
                                    <li><Link href="/">Contact</Link></li>
                                    <li><Link href="/productpage">Product</Link></li>
                                </ul>
                            </div>

                            <div className='flex items-center gap-5'>
                                <Link href="/" className='text-[#23a6f0] text-sm font-bold'>Login</Link>
                                <button className='bg-[#23a6f0] text-white text-sm font-bold py-[15px] px-[25px] rounded-md flex items-center gap-2'>
                                    Become a member <FaAngleRight size={16} />
                                </button>
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
                            <div className="md:hidden mt-4 pb-4">
                                <ul className="flex flex-col justify-center items-center gap-4 text-[#737373] text-lg">
                                    <li><Link href="/">Home</Link></li>
                                    <li><Link href="/">Product</Link></li>
                                    <li><Link href="/">Pricing</Link></li>
                                    <li><Link href="/">Contact</Link></li>
                                </ul>
                            </div>
                        )}
                    </div>


                    {/* Main Navbar End */}

                    <div className='flex flex-col justify-center items-center mt-[65px]'>
                        <p className='text-[#737373] font-bold text-base '>Pricing</p>
                        <h2 className='text-[#252B42] font-bold text-[58px]'>SAMPLE PRICING</h2>
                    </div>
                    <div className='flex justify-center items-center'>
                        <p className='text-[#252B42]'>Home</p>
                        <FaAngleRight size={16} color='#737373' />
                        <Link href={'/productpage'}><span className='text-[#737373]'>Shop</span></Link>
                    </div>

                    {/*  Pricing Section  */}
                    <div className="flex flex-col justify-center w-full h-full lg:w-[607px] lg:h-[100px] items-center text-center mx-auto mt-20">
                        <h2 className="font-bold text-[40px] text-myDark text-[#252B42]">Pricing</h2>
                        <div className="w-full lg:w-[469px] h-[40px] items-center">
                            <p className=" text-sm text-myGrey text-[#737373] font-bold mt-4 px-6 lg:px-0">
                                Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
                            </p>
                        </div>
                    </div>

                    {/* Plan Selection Section  */}
                    <div className="flex justify-center items-center space-x-4 mx-auto mt-16 px-5 sm:px-5 md:px-2 lg:px-0">
                        <h2 className="font-bold text-[16px] text-myDark">Monthly</h2>
                        <div className="flex items-center space-x-2">
                            <h2 className="font-bold text-[16px] text-myDark">Yearly</h2>
                            <ToggleSwitch />
                        </div>
                        <div className="w-[109px] h-[30px] sm:h-[40px] md:h-[44px] lg:h-[44px] rounded-full flex items-center bg-[#B2E3FF] mx-auto">
                            <h6 className="text-center font-bold text-[12px] md:text-[14px] lg:text-[14px] text-[#23A6F0] mx-auto">Save 25%</h6>
                        </div>
                    </div>

                </div>

                





            </div>





        </>
    )
}

export default Pricing