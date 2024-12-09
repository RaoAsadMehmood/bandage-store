import React from 'react';
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { SiYoutube } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

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
                        <p>michelle.rivera@example.com</p>
                    </div>
                </div>
                {/* Center Section - Hidden on mobile */}
                <div className='hidden md:block'>
                    <p>Follow Us and get a chance to win 80% off</p>
                </div>
                {/* Right Section - Hidden on mobile */}
                <div className='hidden md:flex items-center gap-2'>
                    <p>Follow Us:</p>
                    <FaInstagram size={16} />
                    <SiYoutube size={16} />
                    <FaFacebook size={16} />
                    <FaTwitter size={16} />
                </div>
            </div>
        </>
    );
};

export default Header;