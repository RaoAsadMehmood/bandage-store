'use client';
import Link from 'next/link';
import React, { useState } from 'react'
import { BsCart2 } from 'react-icons/bs';
import { CiSearch } from 'react-icons/ci';
import { FaAngleRight } from 'react-icons/fa6';
import { HiMenu } from 'react-icons/hi';

const Pricing = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <>
            <div className='bg-[#FAFAFA] mx-0 my-0'>
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
                    <div className='flex flex-col justify-center items-center mt-2'>
                        <p className='text-[#737373] font-bold text-base'>Pricing</p>
                        <h2 className='text-[#252B42] font-bold text-[58px]'>SAMPLE PRICING</h2>
                    </div>
                    <div className='flex justify-center items-center'>
                        <p className='text-[#252B42]'>Home</p>
                        <FaAngleRight size={16} color='#737373' />
                        <span className='text-[#737373]'>Pricing</span>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Pricing