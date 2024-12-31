'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { VscAccount } from "react-icons/vsc";
import { CiSearch } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
import { IoHeartOutline } from "react-icons/io5";
import { HiMenu } from "react-icons/hi";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { SiYoutube } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { BsCardChecklist } from "react-icons/bs";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import ClothsCard from '../components/ClothsCard';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
const ProductList = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            {/* Top Bar */}

            <div className="flex pl-[144px] pr-[169px] text-[#FFFFFF] bg-[#23856d] w-full h-[58px] items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 text-[#FFFFFF]">
                        <IoCallOutline size={16} />
                        <span className="text-[12px]">(225) 555-0118</span>
                    </div>
                    <div className="flex items-center gap-1 text-[#FFFFFF]">
                        <CiMail size={16} />
                        <span className="text-[12px]">michelle.rivera@example.com</span>
                    </div>
                </div>
                <h3 className="font-bold text-[14px]">Follow Us and get a chance to win 80% off</h3>
                <div className="flex items-center gap-3">
                    <p className="text-[12px] font-bold">Follow Us:</p>
                    <div className="flex items-center gap-3">
                        <a href="#" className="text-[#FFFFFF] hover:text-[#23A6F0]">
                            <FaInstagram size={16} />
                        </a>
                        <a href="#" className="text-[#FFFFFF] hover:text-[#23A6F0]">
                            <SiYoutube size={16} />
                        </a>
                        <a href="#" className="text-[#FFFFFF] hover:text-[#23A6F0]">
                            <FaFacebook size={16} />
                        </a>
                        <a href="#" className="text-[#FFFFFF] hover:text-[#23A6F0]">
                            <FaTwitter size={16} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Top Bar Ended */}

            {/* Main Navbar Start */}

            <div className="bg-white px-4 md:px-6 py-2 mb-3 h-auto w-full">
                <div className="flex items-center justify-between md:justify-around font-medium text-sm">
                    <h3 className="text-2xl font-bold text-[#252B42]">
                        Bandage
                    </h3>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex">
                        <ul className="flex justify-center items-center gap-4 text-[#737373]">
                            <li><Link href="/">Home</Link></li>
                            <li>
                                <Link href="/">
                                    Shop
                                </Link>
                            </li>
                            <li><Link href="/about">About</Link></li>
                            <li><Link href="/">Blog</Link></li>
                            <li><Link href="/">Contact</Link></li>
                            <li><Link href="/pricing">Pricing</Link></li>
                        </ul>
                    </div>

                    {/* Desktop Account Section */}
                    <div className="hidden md:flex items-center gap-2 text-[#23A6F0]">
                        <VscAccount size={20} /> <span>Login / Register</span>
                        <CiSearch size={20} />
                        <BsCart2 size={20} />
                        <IoHeartOutline size={20} />
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
                        <ul className="flex flex-col justify-center items-center gap-4 text-[#737373] text-lg flex-wrap">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/">Product</Link></li>
                            <li><Link href="/">Pricing</Link></li>
                            <li><Link href="/">Contact</Link></li>
                        </ul>
                    </div>
                )}
            </div>

            {/* Main Navbar End */}



            {/* Catagery Section */}

            <div className="w-full  px-4 py-3">
                <div className="max-w-6xl my-[10px]  mx-auto flex justify-between items-center">
                    <div>
                        <p className="text-lg font-medium text-gray-900">shop</p>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                        <p className="text-gray-600">
                            Home
                        </p>
                        <FaAngleRight className="h-4 w-4 text-gray-400" />
                        <p className="text-gray-400">
                            shop
                        </p>
                    </div>
                </div>
            </div>

            <div className='flex justify-center items-center gap-8  w-full flex-wrap '>
                <ClothsCard imageSrc={'/Images/fixed-height (5).png'} />
                <ClothsCard imageSrc={'/Images/fixed-height (4).png'} />
                <ClothsCard imageSrc={'/Images/fixed-height (3).png'} />
                <ClothsCard imageSrc={'/Images/fixed-height (2).png'} />
                <ClothsCard imageSrc={'/Images/fixed-height (1).png'} />
            </div>

            <div className='max-w-6xl mt-[48px]  mx-auto flex justify-between items-center'>
                <div className='text-[#737373] text-center py-[24px]'>
                    Show all results
                </div>
                <div className='flex justify-center items-center gap-2 '>
                    View: <HiMiniSquares2X2 />
                    <BsCardChecklist />
                </div>

                <div className='flex justify-between items-center gap-3 '>
                    <button className='py-[10px] px-[20px]  text-black border border-gray-200 rounded'>
                        Popularity <select name="Popularity"
                            id="Popularity"></select></button>
                    <button className='py-[10px] px-[20px]  bg-[#23A6F0] rounded'>Filter</button>
                </div>

            </div>
            <div className='w-full h-[175px] bg-[#FAFAFA]'></div>

            <Footer />

            <div className='my-[80px] flex justify-around items-center gap-[29.5px] flex-wrap  mx-[38px]  '>

                <ProductCard imageSrc={'/Images/fixed-height (2).png'}
                    productName={'Clase Graduandas'}
                    department={'Women Casual OutWear'}
                    originalPrice={16.48}
                    salePrice={6.48}
                />

                <ProductCard imageSrc={'/Images/fixed-height (1).png'}
                    productName={'Embossed Knit'}
                    department={'Women Casual OutWear'}
                    originalPrice={16.48}
                    salePrice={6.48}
                />

                <ProductCard imageSrc={'/Images/fixed-height (3).png'}
                    productName={'Clase Graduandas'}
                    department={'Women Casual OutWear'}
                    originalPrice={16.48}
                    salePrice={6.48}
                />

                <ProductCard imageSrc={'/Images/fixed-height (5).png'}
                    productName={'Printed T-shirt Color black '}
                    department={'Women Casual OutWear'}
                    originalPrice={16.48}
                    salePrice={6.48}
                />
            </div>

            <div className='my-[80px] flex justify-around items-center gap-[29.5px] flex-wrap  mx-[38px]  '>

                <ProductCard imageSrc={'/Images/fixed-height (4).png'}
                    productName={'Clase Graduandas'}
                    department={'Women Casual OutWear'}
                    originalPrice={16.48}
                    salePrice={6.48}
                />

                <ProductCard imageSrc={'/Images/fixed-height (1).png'}
                    productName={'Embossed Knit'}
                    department={'Women Casual OutWear'}
                    originalPrice={16.48}
                    salePrice={6.48}
                />

                <ProductCard imageSrc={'/Images/fixed-height (5).png'}
                    productName={'Clase Graduandas'}
                    department={'Women Casual OutWear'}
                    originalPrice={16.48}
                    salePrice={6.48}
                />

                <ProductCard imageSrc={'/Images/fixed-height (3).png'}
                    productName={'Printed T-shirt Color black '}
                    department={'Women Casual OutWear'}
                    originalPrice={16.48}
                    salePrice={6.48}
                />
            </div>

            <div className='my-[80px] flex justify-around items-center gap-[29.5px] flex-wrap  mx-[38px]  '>

                <ProductCard imageSrc={'/Images/fixed-height (5).png'}
                    productName={'Clase Graduandas'}
                    department={'Women Casual OutWear'}
                    originalPrice={16.48}
                    salePrice={6.48}
                />
                <ProductCard imageSrc={'/Images/fixed-height (1).png'}
                    productName={'Printed T-shirt Color black '}
                    department={'Women Casual OutWear'}
                    originalPrice={16.48}
                    salePrice={6.48}
                />

                <ProductCard imageSrc={'/Images/fixed-height (4).png'}
                    productName={'Embossed Knit'}
                    department={'Women Casual OutWear'}
                    originalPrice={16.48}
                    salePrice={6.48}
                />

                <ProductCard imageSrc={'/Images/fixed-height (2).png'}
                    productName={'Clase Graduandas'}
                    department={'Women Casual OutWear'}
                    originalPrice={16.48}
                    salePrice={6.48}
                />

            </div>

            <div className="flex justify-center space-x-2 my-[48px]   ">
                <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded hover:scale-110 active:scale-95 active:bg-blue-600 underline">
                    First
                </button>
                <button className="px-4 py-2  bg-gray-200  hover:bg-blue rounded hover:scale-110 active:scale-95  active:bg-blue-600 underline">
                    1
                </button>
                <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded hover:scale-110 active:scale-95  active:bg-blue-600 underline">
                    2
                </button>
                <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded hover:scale-110 active:scale-95  active:bg-blue-600 underline">
                    3
                </button>
                <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded hover:scale-110 active:scale-95  active:bg-blue-600 underline">
                    Next
                </button>
            </div>


        </>
    );
};

export default ProductList;
