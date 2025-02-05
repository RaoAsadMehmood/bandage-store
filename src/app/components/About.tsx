'use client';
import React, { useState } from 'react'
import Link from 'next/link'
import { CiSearch } from 'react-icons/ci';
import { BsCart2 } from 'react-icons/bs';
import { HiMenu } from 'react-icons/hi';
import { FaAngleRight } from "react-icons/fa";
import Image from 'next/image';
import { IoPlayOutline } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import Footer from './Footer';

const About = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            {/* Main Navbar Start */}
            <div className="bg-white px-4 md:px-6 py-2 mb-3 h-auto w-full my-[16px]">
                <div className="flex items-center justify-between md:justify-around font-medium text-sm">
                    <h3 className="text-2xl font-bold text-[#252B42]">Bandage</h3>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex">
                        <ul className="flex justify-center items-center gap-6 font-bold text-[#737373]">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/">Pricing</Link></li>
                            <li><Link href="/">Contact</Link></li>
                            <li><Link href="/">Product</Link></li>
                        </ul>
                    </div>

                    <div className='flex items-center gap-5'>
                        <Link href="/" className='text-[#23a6f0] text-sm font-bold'>Login</Link>
                        <button className='bg-[#23a6f0] text-white text-sm font-bold py-[15px] px-[25px] rounded-l-md flex items-center gap-2'>
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

            <div className='w-full h-[729px]  flex items-center justify-center'>
                <div className="max-w-[1120px] px-4 md:px-0 flex flex-col md:flex-row items-center justify-between">
                    <div className="flex flex-col items-start space-y-7 max-w-xl text-center md:text-left">
                        <span className="text-[#252B42] text-sm font-bold md:text-base tracking-wider">About Company</span>
                        <h1 className="text-[#252B42] text-[40px] md:text-[58px] font-bold leading-tight">
                            About Us
                        </h1>
                        <p className="text-[#252B42] text-base md:text-lg leading-relaxed">
                            We know how large objects will act, but things on<br className="hidden md:block" />
                            a small scale.
                        </p>
                        <div className="flex flex-col md:flex-row md:items-center md:space-x-8 space-y-4 md:space-y-0 mt-4">
                            <button className='bg-[#23a6f0] text-white text-sm font-bold py-[15px] px-[25px] rounded-md flex items-center gap-2'>
                                Get Quote Now
                            </button>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <Image src="/Images/About us.png" alt="Hero Image" width={500} height={500} className="w-auto h-auto max-w-full" />
                    </div>
                </div>
            </div>

            <div className='px-[211px] bg-[#fafafa]  w-full h-[236px] flex items-center justify-between '>
                <div className='gap-4 flex flex-col '>
                    <span className='text-[#E74040] text-[14px] font-bold'>Problems trying</span>
                    <h3 className='text-[#252B42] font-bold text-[24px]'>
                        Met minim Mollie non desert <br /> Alamo est sit cliquey dolor do <br /> met sent.</h3>
                </div>

                <p className='font-light text-[#737373] '>Problems trying to resolve the conflict between the two major realms of
                    <br />Classical physics: Newtonian mechanics and
                </p>
            </div>

            <div className='px-[195.5px]'>
                <div className=' w-full h-[264px] flex justify-around items-center'>
                    <p className='text-[54px] text-[#252B42] font-bold flex flex-col items-center '>15 K
                        <span className='text-[#737373] text-[16px] font-bold'>Happy Customers</span>
                    </p>
                    <p className='text-[54px] text-[#252B42] font-bold flex flex-col items-center '>150 K
                        <span className='text-[#737373] text-[16px] font-bold'>Monthly Visitors</span>
                    </p>
                    <p className='text-[54px] text-[#252B42] font-bold flex flex-col items-center '>15
                        <span className='text-[#737373] text-[16px] font-bold'>Countries Worldwide</span>
                    </p>
                    <p className='text-[54px] text-[#252B42] font-bold flex flex-col items-center '>100+
                        <span className='text-[#737373] text-[16px] font-bold'>Top partners</span>
                    </p>

                </div>
            </div>

            <div className="w-full h-[764px] relative">

                <div className="flex items-center justify-center h-full relative">
                    <Image
                        src="/Images/Video-cover.png"
                        alt="Video-cover.png"
                        width={989}
                        height={540}
                        className="rounded-2xl"
                    />

                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <button className="bg-[#23a6f0] rounded-full p-4 hover:scale-110 active:scale-95 transition-transform">
                            <IoPlayOutline size={40} color="white" />
                        </button>
                    </div>
                </div>
            </div>


            {/* Employees Section */}
            <div className="w-full  py-12 flex flex-col items-center">

                <div className="flex flex-col items-center text-center mb-[112px]">
                    <p className="text-[40px] text-[#252B42] font-bold">Meet Our Team</p>
                    <span className="text-[14px] text-[#737373]">
                        Problems trying to resolve the conflict between <br />
                        the two major realms of Classical physics: Newtonian mechanics
                    </span>
                </div>

                {/* Team Members */}
                <div className="flex flex-wrap justify-around gap-10 px-4">
                    {/* Member 1 */}
                    <div className="flex flex-col items-center text-center gap-4">
                        <Image
                            src="/Images/team-1-user-1.png"
                            alt="team-1-user-1.png"
                            width={316}
                            height={213}
                            className="rounded-lg"
                        />
                        <p className="text-[#252B42] text-[16px] font-bold">Username</p>
                        <span className="text-[14px] text-[#737373]">Profession</span>
                        <div className="flex gap-5">
                            <FaFacebook size={22} color="#23a6f0" />
                            <FaTwitter size={22} color="#23a6f0" />
                            <FaInstagram size={22} color="#23a6f0" />
                        </div>
                    </div>

                    {/* Member 2 */}
                    <div className="flex flex-col items-center text-center gap-4">
                        <Image
                            src="/Images/team-1-user-2.png"
                            alt="team-1-user-2.png"
                            width={316}
                            height={213}
                            className="rounded-lg"
                        />
                        <p className="text-[#252B42] text-[16px] font-bold">Username</p>
                        <span className="text-[14px] text-[#737373]">Profession</span>
                        <div className="flex gap-5">
                            <FaFacebook size={22} color="#23a6f0" />
                            <FaTwitter size={22} color="#23a6f0" />
                            <FaInstagram size={22} color="#23a6f0" />
                        </div>
                    </div>

                    {/* Member 3 */}
                    <div className="flex flex-col items-center text-center gap-4">
                        <Image
                            src="/Images/team-1-user-3.png"
                            alt="team-1-user-3.png"
                            width={316}
                            height={213}
                            className="rounded-lg"
                        />
                        <p className="text-[#252B42] text-[16px] font-bold">Username</p>
                        <span className="text-[14px] text-[#737373]">Profession</span>
                        <div className="flex gap-5">
                            <FaFacebook size={22} color="#23a6f0" />
                            <FaTwitter size={22} color="#23a6f0" />
                            <FaInstagram size={22} color="#23a6f0" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#fafafa] w-full py-12 gap-4 flex flex-col ">
                {/* Header Section */}
                <div className="text-center my-[60px] text-wrap ">
                    <h3 className="text-[#252B42] text-[40px] font-bold">Big Companies Are Here</h3>
                    <p className="text-[#737373]">
                        Problems trying to resolve the conflict between <br />
                        the two major realms of Classical physics: Newtonian mechanics
                    </p>
                </div>

                {/* Logos Section */}
                <div className="flex flex-wrap justify-around items-center px-4">
                    <Image
                        src="/Images/Vector (1).png"
                        alt="Hooli Logo"
                        width={153}
                        height={34}
                        className="w-auto h-auto"
                    />
                    <Image
                        src="/Images/Vector.png"
                        alt="Lyft Logo"
                        width={153}
                        height={34}
                        className="w-auto h-auto"
                    />
                    <Image
                        src="/Images/fa-brands-5.png"
                        alt="Leaf Logo"
                        width={153}
                        height={34}
                        className="w-auto h-auto"
                    />
                    <Image
                        src="/Images/col-md-2 (1).png"
                        alt="Stripe Logo"
                        width={153}
                        height={34}
                        className="w-auto h-auto"
                    />
                    <Image
                        src="/Images/col-md-2.png"
                        alt="AWS Logo"
                        width={153}
                        height={34}
                        className="w-auto h-auto"
                    />
                </div>
            </div>

            <div className='w-full h-[580px] flex '>
                <div className='w-[60%] bg-[#2a7cc7]  '>
                    <div className=' my-[199.5px] flex flex-col items-start ml-[25%] gap-[20px]  '>
                        <span className='text-white font-bold'>WORK WITH US</span>
                        <h3 className='text-white font-bold text-[40px]'>Now Let’s grow Yours</h3>
                        <p className='text-white text-[14px] font-light'>The gradual accumulation of information about atomic and <br />
                            small-scale behavior during the first quarter of the 20th </p>
                        <button className='text-white border border-1 py-[15px] px-[40px] rounded-md '>Let's Connect</button>
                    </div>
                </div>
                <div className='w-[40%] h-[637px]'>
                    <Image
                        src="/Images/unsplash_vjMgqUkS8q8.png"
                        alt="AWS Logo"
                        width={590}
                        height={640}
                        className="w-full  "
                    />
                </div>
            </div>

            <Footer />


        </>
    )
}

export default About