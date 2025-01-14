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
import Navigation from './Navigation';
const ProductList = () => {

    return (
        <>
            <Navigation />

            {/* Catagery Section */}

            <div className="w-full px-4 py-3">
  <div className="max-w-6xl my-[10px] mx-auto flex justify-between items-center">
    <div>
      <p className="text-lg font-medium text-gray-900">shop</p>
    </div>
    <div className="flex items-center space-x-2 text-sm">
    <Link href={"/"}>  <p className="text-gray-600">Home</p> </Link>
      <FaAngleRight className="h-4 w-4 text-gray-400" />
     <Link href={"/productpage"}> <p className="text-gray-400">Shop</p> </Link>
    </div>
  </div>
</div>

<div className="flex justify-center items-center gap-8 w-full flex-wrap md:flex-row flex-col">
  <ClothsCard imageSrc={'/Images/ssop-img-1.jpg'} />
  <ClothsCard imageSrc={'/Images/card-image-3.jpg'} />
  <ClothsCard imageSrc={'/Images/ssop-img-3.jpg'} />
  <ClothsCard imageSrc={'/Images/ssop-img-4.jpg'} />
  <ClothsCard imageSrc={'/Images/ssop-img-5.jpg'} />
</div>

            <div className='max-w-6xl mt-[48px]  mx-auto flex justify-between items-center'>
               <Link href={""}> <div className='text-[#737373] text-center py-[24px]'>
                    Show all results 
                </div></Link>
                <div className='flex justify-center items-center gap-2 '>
                    View: <HiMiniSquares2X2 />
                    <BsCardChecklist />
                </div>

                <div className='flex justify-between items-center gap-3 '>
                    <button className='py-[10px] px-[20px]  text-black border border-gray-200 rounded'>
                        Popularity <select name="Popularity"
                            id="Popularity"></select>
                            </button>
                   <Link href={""}> <button className='py-[10px] px-[20px] bg-[#23A6F0]  rounded transition-transform transform hover:translate-y-0 active:translate-y-1 hover:bg-[#2a8cc5]'>Filter</button> </Link>
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
