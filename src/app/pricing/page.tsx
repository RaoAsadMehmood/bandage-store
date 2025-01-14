'use client';
import Link from 'next/link';
import React, { useState } from 'react'
import { BsCart2 } from 'react-icons/bs';
import { CiSearch } from 'react-icons/ci';
import { FaAngleRight } from 'react-icons/fa6';
import { HiMenu } from 'react-icons/hi';
import { FaInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import ToggleSwitch from './ToggleSwitch';
import PlanCard from './PlanCard';
import FAQSection from './FaqSection';
import Footer from '../components/Footer';
import Navbar from '../team/Navbar';

const Pricing = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [isActive, setIsActive] = useState(false);

    const toggleSwitch = () => {
        setIsActive(!isActive);
    };
    return (
        <>

            <div className=' w-full h-full flex flex-col min-h-screen'>
                <div className=' mx-[195px] bg-white '>

                    <Navbar />

                    <div className='flex flex-col justify-center items-center mt-[65px]'>
                        <p className='text-[#737373] font-bold text-base '>Pricing</p>
                        <h2 className='text-[#252B42] font-bold text-[58px]'>SAMPLE PRICING</h2>
                    </div>
                    <div className='flex justify-center items-center'>
                        <Link href="/"> <p className='text-[#252B42]'>Home</p> </Link>
                        <FaAngleRight size={16} color='#737373' />
                        <Link href={'/productpage'}><span className='text-[#737373]'>Shop</span></Link>
                    </div>

                    {/*  Pricing Section  */}
                    <div className="flex flex-col justify-center w-full h-full lg:w-[607px] lg:h-[100px] items-center text-center mx-auto mt-20">
                        <h2 className="font-bold text-[40px] text-[#252B42]">Pricing</h2>
                        <div className="w-full lg:w-[469px] h-[40px] items-center">
                            <p className=" text-sm text-myGrey text-[#737373] font-bold mt-4 px-6 lg:px-0">
                                Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
                            </p>
                        </div>
                    </div>

                    {/* Plan Selection Section  */}
                    <div className="flex justify-center items-center space-x-4 mx-auto mt-16 px-5 sm:px-5 md:px-2 lg:px-0">
                        <h2 className="font-bold text-[16px] text-[#252B42]">Monthly</h2>
                        <div className="flex items-center space-x-2">
                            <h2 className="font-bold text-[16px] text-[#252B42]">Yearly</h2>
                            <ToggleSwitch />
                        </div>
                        <div className="w-[109px] h-[30px] sm:h-[40px] md:h-[44px] lg:h-[44px] rounded-full flex items-center bg-[#B2E3FF] mx-auto hover:bg-[#23A6F0] transition-colors duration-300 ">
                            <h6 className="text-center font-bold text-[12px] md:text-[14px] lg:text-[14px] text-[#23A6F0] mx-auto hover:text-white ">Save 25%</h6>
                        </div>
                    </div>

                    <div className='mt-10 flex justify-center gap-5 flex-wrap'>
                        <PlanCard
                            planName="Free"
                            cardColor="#ffffff"
                            price={0}
                            textColor="#252B42"
                        />

                        <PlanCard
                            planName="Premium Plan"
                            cardColor="#252B42"
                            price={19.99}
                            textColor="#FFFFFF"
                        />

                        <PlanCard
                            planName="Standard Plan"
                            cardColor="#ffffff"
                            price={9.99}
                            textColor="#252B42"
                        />
                    </div>

                    <div className="my-[80px] w-full  flex justify-center items-center">
                        <div className="text-center">
                            <h3 className="text-[40px] text-[#252B42] font-bold">Pricing FAQs</h3>
                            <p className="text-[#737373] font-light text-[20px] leading-relaxed">
                                Problems trying to resolve the conflict between <br />
                                the two major realms of Classical physics
                            </p>
                        </div>
                    </div>
                    <div className='flex justify-center '>
                        <FAQSection />
                    </div>
                    <div className="my-10 text-center flex flex-col items-center">
                        <h3 className="text-[#252B42] font-bold text-[40px]">Start your 14 days free trial</h3>
                        <p className="text-sm font-light text-[#737373] mt-4 mb-6">
                            Met minim Mollie non desert Alamo est sit cliquey dolor <br />
                            do met sent. RELIT official consequent.
                        </p>
                        <button className="bg-[#23a6f0] text-white text-sm font-bold py-4 px-6 rounded-md shadow-lg transition-transform transform hover:translate-y-0 active:translate-y-1">
                            Try it free now
                        </button>
                        <div className="flex gap-4 mt-6">
                            <Link href={""}>   <span className="text-[#23a6f0] text-xl transform transition duration-500 hover:scale-110">
                                <FaTwitter size={24} />
                            </span></Link>

                            <Link href={""}>  <span className="text-[#23a6f0] text-xl transform transition duration-500 hover:scale-110">
                                <FaFacebook size={24} />
                            </span></Link>

                            <Link href={""}> <span >
                                <FaInstagram size={24} className="text-[#23a6f0] text-xl transform transition duration-500 hover:scale-110" />
                            </span></Link>
                            <Link href={""}> <span >
                                <CiLinkedin size={24} className="text-[#23a6f0] text-xl transform transition duration-500 hover:scale-110" />
                            </span> </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />



        </>
    )
}

export default Pricing