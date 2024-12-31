import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";

const Footer = () => {
    return (
        <>
            <footer className="w-full mt-[112px] bg-white">
                <div className="max-w-7xl mx-auto px-4 md:px-6">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row  items-center justify-between py-8 md:py-[57px] bg-[#fafafa] mb-8">
                        <h2 className="text-2xl font-bold mb-6 md:mb-0 text-[#252B42]">
                            Bandage
                        </h2>
                        <div className="flex items-center gap-4 text-[#23a6f0]">
                            <FaFacebook className="w-6 h-6" />
                            <FaInstagram className="w-6 h-6" />
                            <IoLogoTwitter className="w-6 h-6" />
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
                        {/* Company Info */}
                        <div className="flex flex-col">
                            <h3 className="font-bold text-lg mb-3 text-[#252B42]">Company Info</h3>
                            <ul className="space-y-2">
                                <li className="text-gray-600">About Us</li>
                                <li className="text-gray-600">Carrier</li>
                                <li className="text-gray-600">We are hiring</li>
                                <li className="text-gray-600">Blog</li>
                            </ul>
                        </div>

                        {/* Legal */}
                        <div className="flex flex-col">
                            <h3 className="font-bold text-lg mb-3 text-[#252B42]">Legal</h3>
                            <ul className="space-y-2">
                                <li className="text-gray-600">About Us</li>
                                <li className="text-gray-600">Carrier</li>
                                <li className="text-gray-600">We are hiring</li>
                                <li className="text-gray-600">Blog</li>
                            </ul>
                        </div>

                        {/* Features */}
                        <div className="flex flex-col">
                            <h3 className="font-bold text-lg mb-3 text-[#252B42]">Features</h3>
                            <ul className="space-y-2">
                                <li className="text-gray-600">Business Marketing</li>
                                <li className="text-gray-600">User Analytic</li>
                                <li className="text-gray-600">Live Chat</li>
                                <li className="text-gray-600">Unlimited Support</li>
                            </ul>
                        </div>

                        {/* Resources */}
                        <div className="flex flex-col">
                            <h3 className="font-bold text-lg mb-3 text-[#252B42]">Resources</h3>
                            <ul className="space-y-2">
                                <li className="text-gray-600">IOS & Android</li>
                                <li className="text-gray-600">Watch a Demo</li>
                                <li className="text-gray-600">Customers</li>
                                <li className="text-gray-600">API</li>
                            </ul>
                        </div>

                        {/* Get In Touch */}
                        <div className="flex flex-col">
                            <h3 className="font-bold text-lg mb-3 text-[#252B42]">Get In Touch</h3>
                            <div className="flex w-full">
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full max-w-[166px] px-3 py-[10px] outline-none border border-r-0 border-gray-300 rounded-l-md text-gray-500"
                                />
                                <button className="bg-[#23A6F0] text-white rounded-r-md px-[10px] py-[10px] active:scale-95 transition-transform whitespace-nowrap">
                                    Subscribe
                                </button>
                            </div>
                            <p className="text-gray-500 text-sm mt-2">Lore imp sum dolor Amit</p>
                        </div>
                    </div>

                    {/* Footer Bottom */}
                </div>
                <div className="mt-8 py-6 border-t px-14 bg-[#fafafa] w-full border-gray-200">
                    <p className="text-gray-600">
                        Made With 🖤 by <Link href={"https://www.linkedin.com/in/rao-asad-mehmood"} target='blank'><b>Rao Asad Mehmood </b></Link>  All Right Reserved
                    </p>
                </div>
            </footer>
        </>
    );
};

export default Footer;


