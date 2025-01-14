import React from 'react';
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { SiYoutube } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Link from 'next/link';

const Header = () => {
    return (
        <>
            <div className='bg-[#252b42] px-6 py-2 mb-3 text-white h-11 w-full hidden md:flex items-center
             justify-between font-medium text-sm'>
                {/* Left Section - Hidden on mobile */}
                <div className='hidden md:flex items-center gap-4'>
                    <div className='flex items-center gap-1'>
                        <IoCallOutline size={16} />
                        <p>(225) 555-0118</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <CiMail size={16} />
                        <a href="mailto:michelle.rivera@example.com"><p>michelle.rivera@example.com</p></a>
                    </div>
                </div>
                {/* Center Section - Hidden on mobile */}
                <div className='hidden md:block'>
                    <p>Follow Us and get a chance to win 80% off</p>
                </div>
                {/* Right Section - Hidden on mobile */}
                <div className='hidden md:flex items-center gap-2'>
                    <p>Follow Us:</p>
                    <Link href={""}>  <FaInstagram size={20} className='hover:text-[#23A6F0] hover:transform transition duration-500 hover:scale-110' /></Link>
                    <Link href={""}>  <SiYoutube size={20} className='hover:text-[#23A6F0] hover:transform transition duration-500 hover:scale-110'/> </Link>
                    <Link href={""}>  <FaFacebook size={20} className='hover:text-[#23A6F0] hover:transform transition duration-500 hover:scale-110'/> </Link>
                    <Link href={""}>  <FaTwitter size={20} className='hover:text-[#23A6F0] hover:transform transition duration-500 hover:scale-110'/> </Link>
                </div>
            </div>
        </>
    );
};

export default Header;