'use client';
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaAngleRight } from "react-icons/fa6";
import { BsCardChecklist } from "react-icons/bs";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

import Navigation from './Navigation';

interface Product {
  _id: string;
  title: string;
  productImage: {
    asset: {
      _ref: string;
    };
  };
  price: number;
  description?: string;
}

const ProductPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = `*[_type == "product"]{
          _id,
          title,
          price,
          description,
          productImage
        }[0...5]`;
        const result = await client.fetch<Product[]>(query);
        setProducts(result);
      } catch (error) {
        console.error("Products fetch error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <Navigation />

      {/* Category Section */}
      <div className="w-full px-4 py-3">
        <div className="max-w-6xl my-[10px] mx-auto flex justify-between items-center">
          <div>
            <p className="text-lg font-medium text-gray-900">shop</p>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/"><p className="text-gray-600">Home</p></Link>
            <FaAngleRight className="h-4 w-4 text-gray-400" />
            <Link href="/productpage"><p className="text-gray-400">Shop</p></Link>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="flex justify-center items-center gap-8 w-full flex-wrap md:flex-row flex-col">
        {loading ? (
          Array(5).fill(0).map((_, index) => (
            <div key={index} className="w-[206px] h-[233px] bg-gray-200 animate-pulse rounded-lg" />
          ))
        ) : products.map((product) => (
          <div
            key={product._id}
            className="w-[206px] h-[233px] relative overflow-hidden group hover:scale-110 shadow-md hover:shadow-lg transition-all duration-500 ease-in-out"
          >
            {product.productImage && (
              <img
                src={urlFor(product.productImage).url()}
                alt={product.title}
                width={206}
                height={233}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            )}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-all duration-500 ease-in-out">
              <h3 className="text-white font-bold text-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                {product.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Filter and View Section */}
      <div className="max-w-6xl mt-[48px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <Link href="">
          <div className="text-[#737373] text-center py-[24px] w-full md:w-auto">
            Show all results
          </div>
        </Link>

        <div className="flex justify-center items-center gap-2 w-full md:w-auto">
          <span>View:</span>
          <HiMiniSquares2X2 className="cursor-pointer text-gray-600 hover:text-[#23A6F0] transition" />
          <BsCardChecklist className="cursor-pointer text-gray-600 hover:text-[#23A6F0] transition" />
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 w-full md:w-auto">
          <div className="relative w-full sm:w-auto">
            <select
              name="popularity"
              id="popularity"
              className="appearance-none py-[10px] px-[20px] w-full sm:w-auto text-black border border-gray-200 rounded cursor-pointer bg-white focus:outline-none focus:ring-2 focus:ring-[#23A6F0]"
            >
              <option value="popularity">Popularity</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Rating</option>
            </select>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400">
              ▼
            </div>
          </div>

          <Link href="">
            <button className="py-[10px] px-[20px] bg-[#23A6F0] text-white rounded transition-transform transform hover:translate-y-0 active:translate-y-1 hover:bg-[#2a8cc5] w-full sm:w-auto">
              Filter
            </button>
          </Link>
        </div>
      </div>

     

      {/* Featured Products Section */}
      <div className='my-[80px] flex justify-around items-center gap-[29.5px] flex-wrap mx-[38px]'>
        {[
          ['fixed-height (2).png', 'Classic Graduandas'],
          ['fixed-height (1).png', 'Embossed Knit'],
          ['fixed-height (3).png', 'Summer Collection'],
          ['fixed-height (5).png', 'Printed T-shirt']
        ].map(([img, name]) => (
          <ProductCard
            key={name}
            imageSrc={`/Images/${img}`}
            productName={name}
            department={'Premium Collection'}
            originalPrice={16.48}
            salePrice={6.48}
          />
        ))}
      </div>
      

      {/* Pagination */}
      <div className="flex justify-center space-x-2 my-[48px]">
        {['First', '1', '2', '3', 'Next'].map((label) => (
          <button
            key={label}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded hover:scale-110 active:scale-95 active:bg-blue-600 underline"
          >
            {label}
          </button>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;