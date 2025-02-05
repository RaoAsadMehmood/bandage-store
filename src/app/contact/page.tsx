import React from 'react'
import Navbar from '../team/Navbar'
import Image from 'next/image'
import { FaFacebook, FaInstagram, FaTwitter, } from 'react-icons/fa6'
import { CiLinkedin } from 'react-icons/ci'
import { BsTelephone } from 'react-icons/bs'
import { FaLocationDot } from "react-icons/fa6";
import { PiArrowArcRightThin } from "react-icons/pi";
import { IoIosMail } from "react-icons/io";

import Link from 'next/link'
import Footer from '../components/Footer'

const Contact = () => {
    return (
        <>
            <Navbar />
            <div className="my-10 w-full h-auto px-4 overflow-x-hidden md:px-[195px] flex flex-col md:flex-row justify-center items-center gap-8">
                {/* Text Section */}
                <div className="text-start flex-1">
                    <p className="text-[#737373] font-bold text-sm">CONTACT US</p>
                    <h3 className="text-[36px] md:text-[54px] font-bold text-[#252B42] leading-snug">
                        Get in touch <br /> today!
                    </h3>
                    <p className="text-[#737373] font-light text-base md:text-[20px] mt-4">
                        We know how large objects will act, <br />
                        but things on a small scale
                    </p>
                    <div className="my-5 gap-3">
                        <span className="block text-[#252B42] font-bold text-lg">Phone: +451 215 215</span>
                        <span className="block text-[#252B42] font-bold text-lg">Fax: +451 215 215</span>
                    </div>
                    <div className="flex gap-4 mt-6">
                        <Link href={""}> <FaTwitter size={30} color="#252B42" className='transform transition duration-500 hover:scale-110' /> </Link>
                        <Link href={""}> <FaFacebook size={30} color="#252B42" className='transform transition duration-500 hover:scale-110' /> </Link>
                        <Link href={""}><FaInstagram size={30} color="#252B42" className='transform transition duration-500 hover:scale-110' /> </Link>
                        <Link href={""}><CiLinkedin size={30} className="text-[#252B42] text-xl transform transition duration-500 hover:scale-110" /></Link>
                    </div>
                </div>

                {/* Image Section */}
                <div className="flex-1">
                    <Image
                        src="/Images/76440682597.png"
                        alt="Contact Image"
                        className="w-full h-auto object-contain"
                        width={500}
                        height={500}
                    />
                </div>

            </div>

            <div className='w-auto h-auto  text-white py-10 px-4 md:px-[195px]'>
                <div className="text-center px-4 md:px-8">
                    {/* Header Section */}
                    <p className="text-[#737373] font-bold text-sm">VISIT OUR SERVICES</p>
                    <h3 className="text-[#252B42] font-bold text-[28px] md:text-[40px] mt-2">
                        We help small businesses <br className="hidden md:block" />
                        with big ideas
                    </h3>

                    {/* Cards Section */}
                    <div className="flex flex-wrap justify-center items-center gap-6 mt-8">
                        {/* Card 1 */}
                        <div className="w-full sm:w-[330px] h-auto sm:h-[400px] border border-[#23a6f0] rounded-md mx-auto flex flex-col justify-center items-center gap-4 p-6 transform transition duration-500 hover:scale-105">
                            <BsTelephone size={72} className="text-[#23a6f0] transform transition duration-500 hover:scale-110" />
                            <div className="text-center">
                                <span className="text-[#252B42] text-sm font-semibold block">georgia.young@example.com</span>
                                <span className="text-[#252B42] text-sm font-semibold block">georgia.young@ple.com</span>
                            </div>
                            <p className="text-[#252B42] font-semibold text-[20px] sm:text-[24px]">Get Support</p>
                            <Link href={""}>
                                <button className="text-[#23a6f0] bg-transparent border border-[#23a6f0] text-sm py-3 px-5 mt-4 rounded-full transition-transform transform hover:translate-y-0 active:translate-y-1">
                                    Submit Request
                                </button>
                            </Link>
                        </div>

                        {/* Card 2 */}
                        <div className="w-full sm:w-[330px] h-auto sm:h-[400px] bg-[#252B42] border border-[#23a6f0] rounded-md mx-auto flex flex-col justify-center items-center gap-4 p-6 transform transition duration-500 hover:scale-105">
                            <FaLocationDot size={72} className="text-[#23a6f0] transform transition duration-500 hover:scale-110" />
                            <div className="text-center">
                                <span className="text-[#fafafa] text-sm font-semibold block">georgia.young@example.com</span>
                                <span className="text-[#fafafa] text-sm font-semibold block">georgia.young@ple.com</span>
                            </div>
                            <p className="text-[#fafafa] font-semibold text-[20px] sm:text-[24px]">Get Support</p>
                            <Link href={""}>
                                <button className="text-[#23a6f0] bg-transparent border border-[#23a6f0] text-sm py-3 px-5 mt-4 rounded-full transition-transform transform hover:translate-y-0 active:translate-y-1">
                                    Submit Request
                                </button>
                            </Link>
                        </div>

                        {/* Card 3 */}
                        <div className="w-full sm:w-[330px] h-auto sm:h-[400px] border border-[#23a6f0] rounded-md mx-auto flex flex-col justify-center items-center gap-4 p-6 transform transition duration-500 hover:scale-105">
                            <IoIosMail size={72} className="text-[#23a6f0] transform transition duration-500 hover:scale-110" />
                            <div className="text-center">
                                <span className="text-[#252B42] text-sm font-semibold block">georgia.young@example.com</span>
                                <span className="text-[#252B42] text-sm font-semibold block">georgia.young@ple.com</span>
                            </div>
                            <p className="text-[#252B42] font-semibold text-[20px] sm:text-[24px]">Get Support</p>
                            <Link href={""}>
                                <button className="text-[#23a6f0] bg-transparent border border-[#23a6f0] text-sm py-3 px-5 mt-4 rounded-full transition-transform transform hover:translate-y-0 active:translate-y-1">
                                    Submit Request
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>


                <div className='w-full h-auto gap-4 mt-10 flex flex-col justify-center items-center'>
                    <div className="flex justify-center items-center relative h-[100px] group">
                        <style>
                            {`
                @keyframes float {
                    0% { transform: translate(0, 0) rotate(45deg); }
                    50% { transform: translate(8px, -8px) rotate(60deg); }
                    100% { transform: translate(0, 0) rotate(45deg); }
                }
                .float-animation:hover {
                    animation: float 1.5s ease-in-out infinite;
                }
                `}
                        </style>
                        <PiArrowArcRightThin
                            size={70}
                            className="text-[#23a6f0] font-light relative -top-2 -left-1
                           float-animation transition-all duration-300"
                        />
                    </div>

                    <div className='text-center'>
                        <span className='text-[#737373] font-semibold text-lg'>WE CAN'T WAIT TO MEET YOU!</span>
                        <h3 className='text-[#252B42] font-bold text-[54px]'>Let's Talk</h3>
                    </div>
                    <Link href={""}><button className="bg-[#23a6f0] text-white text-sm font-bold py-[15px] px-[25px] transition-transform transform hover:translate-y-0 active:translate-y-1 rounded-md flex items-center gap-2">
                        Try it free now
                    </button></Link>
                </div>
            </div>
            <Footer />

        </>

    )
}

export default Contact