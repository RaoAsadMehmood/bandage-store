import React from 'react';
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";

const Footer = () => {
    return (
        <footer className="w-full mt-[112px] bg-white py-12 px-4 md:px-8 ">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col bg-[#fafafa] py-[57px] md:flex-row items-center justify-between mb-12 ">
                    <div className="text-2xl font-bold mb-6 md:mb-0 text-[#252B42]">
                        Bandage
                    </div>
                    <div className="flex gap-4 text-[#23a6f0]">
                        <FaFacebook size={24} />
                        <FaInstagram size={24} />
                        <IoLogoTwitter size={24} />
                    </div>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {/* Company Info */}
                    <div className="flex flex-col">
                        <h3 className="font-bold text-lg mb-4 text-[#252B42]">Company Info</h3>
                        <ul className="space-y-3">
                            <li className="text-gray-600">About Us</li>
                            <li className="text-gray-600">Carrier</li>
                            <li className="text-gray-600">We are hiring</li>
                            <li className="text-gray-600">Blog</li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="flex flex-col">
                        <h3 className="font-bold text-lg mb-4 text-[#252B42]">Legal</h3>
                        <ul className="space-y-3">
                            <li className="text-gray-600">About Us</li>
                            <li className="text-gray-600">Carrier</li>
                            <li className="text-gray-600">We are hiring</li>
                            <li className="text-gray-600">Blog</li>
                        </ul>
                    </div>

                    {/* Features */}
                    <div className="flex flex-col">
                        <h3 className="font-bold text-lg mb-4 text-[#252B42]">Features</h3>
                        <ul className="space-y-3">
                            <li className="text-gray-600">Business Marketing</li>
                            <li className="text-gray-600">User Analytic</li>
                            <li className="text-gray-600">Live Chat</li>
                            <li className="text-gray-600">Unlimited Support</li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="flex flex-col">
                        <h3 className="font-bold text-lg mb-4 text-[#252B42]">Resources</h3>
                        <ul className="space-y-3">
                            <li className="text-gray-600">IOS & Android</li>
                            <li className="text-gray-600">Watch a Demo</li>
                            <li className="text-gray-600">Customers</li>
                            <li className="text-gray-600">API</li>
                        </ul>
                    </div>

                    {/* Get In Touch */}
                    <div className=" lg:col-span-1">
                        <h3 className="font-bold text-lg mb-4 text-[#252B42]">Get In Touch</h3>
                            <div className="flex justify-center md:flex-row lg:flex-col gap-4">
                                <input type="email" placeholder="Your Email"
                                    className="px-4 py-3 border border-gray-300 rounded-md text-gray-500 flex-1" />
                                <button className="py-[15px] px-[22.5px] bg-[#23A6F0] text-white rounded-md font-medium">
                                    Subscribe
                                </button>
                        </div>
                        <p className="text-gray-500 text-sm mt-2">Lore imp sum dolor Amit</p>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                    <p className="text-left text-gray-600">
                        Made With Love By Finland All Right Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;