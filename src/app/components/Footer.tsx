import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";

const Footer = () => {
    return (
        <>
            <footer className="bg-white">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row items-center justify-between py-6 md:py-10">
                        <Link href={"/"}>
                            <h2 className="text-2xl font-bold text-[#252B42] mb-4 md:mb-0">Bandage</h2>
                        </Link>
                        <div className="flex items-center gap-4 text-[#23a6f0]">
                            <Link href={""}><FaFacebook className="w-6 h-6 transform transition duration-500 hover:scale-110" /></Link>
                            <Link href={""}><FaInstagram className="w-6 h-6 transform transition duration-500 hover:scale-110" /></Link>
                            <Link href={""}><IoLogoTwitter className="w-6 h-6 transform transition duration-500 hover:scale-110" /></Link>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
                        {/* Company Info */}
                        <div>
                            <h3 className="font-bold text-lg text-[#252B42] mb-4">Company Info</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li>About Us</li>
                                <li>Carrier</li>
                                <li>We are hiring</li>
                                <li>Blog</li>
                            </ul>
                        </div>

                        {/* Legal */}
                        <div>
                            <h3 className="font-bold text-lg text-[#252B42] mb-4">Legal</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li>About Us</li>
                                <li>Carrier</li>
                                <li>We are hiring</li>
                                <li>Blog</li>
                            </ul>
                        </div>

                        {/* Features */}
                        <div>
                            <h3 className="font-bold text-lg text-[#252B42] mb-4">Features</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li>Business Marketing</li>
                                <li>User Analytic</li>
                                <li>Live Chat</li>
                                <li>Unlimited Support</li>
                            </ul>
                        </div>

                        {/* Resources */}
                        <div>
                            <h3 className="font-bold text-lg text-[#252B42] mb-4">Resources</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li>IOS & Android</li>
                                <li>Watch a Demo</li>
                                <li>Customers</li>
                                <li>API</li>
                            </ul>
                        </div>

                        {/* Get In Touch */}
                        <div>
                            <h3 className="font-bold text-lg text-[#252B42] mb-4">Get In Touch</h3>
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    required
                                    className="w-full max-w-[180px] px-4 py-2 outline-none border border-gray-300 rounded-l-md text-gray-600"
                                />
                                <button className="bg-[#23A6F0] text-white rounded-r-md px-4 py-2 transition-transform transform hover:translate-y-0 active:translate-y-1">
                                    Subscribe
                                </button>
                            </div>
                            <p className="text-gray-500 text-sm mt-2">Lore imp sum dolor Amit</p>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-8 py-4 border-t bg-[#fafafa] border-gray-200">
                    <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
                        <p className="text-gray-600">
                            Made With 🖤 by <Link href={"https://www.linkedin.com/in/rao-asad-mehmood"} target='blank'><b>Rao Asad Mehmood</b></Link> All Right Reserved!
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
