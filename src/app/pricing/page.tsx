'use client';
import Link from 'next/link';
import React, { useState } from 'react'
import { FaAngleRight } from 'react-icons/fa6';
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

    const [isActive, setIsActive] = useState(false);

    const toggleSwitch = () => {
        setIsActive(!isActive);
    };
    return (
        <>

            <Navbar />


            <div className="min-h-screen w-full">
                {/* Main container with responsive padding */}
                <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    {/* Header Section */}
                    <div className="pt-12 sm:pt-16 space-y-6 text-center">
                        <div>
                            <p className="text-[#737373] font-bold text-sm sm:text-base">Pricing</p>
                            <h1 className="text-[#252B42] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[58px] mt-2">
                                SAMPLE PRICING
                            </h1>
                        </div>

                        {/* Breadcrumb - Made responsive */}
                        <div className="flex justify-center items-center space-x-2">
                            <Link href="/" className="text-[#252B42] hover:underline">Home</Link>
                            <FaAngleRight size={16} color="#737373" />
                            <Link href="/productpage" className="text-[#737373] hover:underline">Shop</Link>
                        </div>
                    </div>


                    <div className="mt-12 sm:mt-20 text-center max-w-2xl mx-auto px-4">
                        <h2 className="font-bold text-2xl sm:text-3xl md:text-[40px] text-[#252B42]">Pricing</h2>
                        <p className="text-sm text-[#737373] font-bold mt-4">
                            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
                        </p>
                    </div>

                    {/* Plan Selection Section */}
                    <div className="mt-10 sm:mt-16 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <div className="flex items-center space-x-4">
                            <h2 className="font-bold text-sm sm:text-base text-[#252B42]">Monthly</h2>
                            <div className="flex items-center space-x-2">
                                <h2 className="font-bold text-sm sm:text-base text-[#252B42]">Yearly</h2>
                                
                                <ToggleSwitch />
                            </div>
                        </div>
                        <div className="bg-[#B2E3FF] hover:bg-[#23A6F0] transition-colors duration-300 rounded-full px-4 py-2">
                            <h6 className="text-center font-bold text-xs sm:text-sm text-[#23A6F0] hover:text-white">
                                Save 25%
                            </h6>
                        </div>
                    </div>

                    {/* Pricing Cards Section */}
                    <div className="mt-10 flex justify-center items-center md:flex-row flex-col gap-6">
                        <PlanCard planName="Free" cardColor="#ffffff" price={0} textColor="#252B42" />
                        <PlanCard planName="Premium Plan" cardColor="#252B42" price={19.99} textColor="#FFFFFF" />
                        <PlanCard planName="Standard Plan" cardColor="#ffffff" price={9.99} textColor="#252B42" />
                    </div>

                    {/* FAQ Section */}
                    <div className="my-20 space-y-12">
                        <div className="text-center max-w-2xl mx-auto px-4">
                            <h3 className="text-2xl sm:text-3xl md:text-[40px] text-[#252B42] font-bold">
                                Pricing FAQs
                            </h3>
                            <p className="text-[#737373] font-light text-base sm:text-lg md:text-xl mt-4">
                                Problems trying to resolve the conflict between the two major realms of Classical physics
                            </p>
                        </div>
                        <div className="max-w-3xl mx-auto">
                            <FAQSection />
                        </div>
                    </div>

                    {/* Trial Section */}
                    <div className="py-16 text-center">
                        <div className="max-w-2xl mx-auto px-4 space-y-6">
                            <h3 className="text-2xl sm:text-3xl md:text-[40px] text-[#252B42] font-bold">
                                Start your 14 days free trial
                            </h3>
                            <p className="text-sm sm:text-base text-[#737373]">
                                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent.
                            </p>
                            <button className="bg-[#23a6f0] text-white text-sm font-bold py-3 px-6 rounded-md shadow-lg transition-all hover:bg-[#1d8ac7] active:transform active:translate-y-1">
                                Try it free now
                            </button>
                            <div className="flex justify-center gap-6 pt-4">
                                {[
                                    { Icon: FaTwitter, href: "" },
                                    { Icon: FaFacebook, href: "" },
                                    { Icon: FaInstagram, href: "" },
                                    { Icon: CiLinkedin, href: "" }
                                ].map((item, index) => (
                                    <Link key={index} href={item.href}>
                                        <span>
                                            <item.Icon size={24} className='text-[#23a6f0] transform transition duration-300 hover:scale-110' />
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />



        </>
    )
}

export default Pricing