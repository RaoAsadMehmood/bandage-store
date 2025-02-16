import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Header from './Header';
import Navbar1 from './Navbar1';
import ArticleCard from './ArticleCard';
import Footer from './Footer';
import Link from 'next/link';
import { Product } from '../../../types/products';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import  {addToCart}  from '../actions/action';
import Swal from 'sweetalert2';

const HeroPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const query = `*[_type == "product"]{
          _id,
          title,
          price,
          description,
          "slug": slug.current,
          productImage
        }`;
        const fetchedProducts: Product[] = await client.fetch(query);
        setProducts(fetchedProducts);
      } catch (err) {
        setError('We are sorry, we are unable to find the products. Please try again later.');
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    Swal.fire({
      position: "top-right",
      icon: "success",
      title: `${product.title} added to cart`,
      showConfirmButton: false,
      timer: 3000,
    })
    addToCart(product);
  
  };


  return (
    <>
      <Header />
      <Navbar1 />
      
      <div className="relative w-full h-screen bg-[#01b7df] overflow-x-hidden">
        {/* Desktop Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/Images/shop-hero-1-product-slide-1.jpg"
            alt="New Collection"
            width={1920}
            height={1080}
            style={{ objectFit: "cover", objectPosition: "right" }}
            className="select-none w-full h-full md:w-1/2 md:right-0 md:absolute"
          />
        </div>        
        {/* Content Container */}
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center md:items-center md:justify-start">
          <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center md:text-left">
            {/* Text Content */}
            <div className="text-white space-y-4 md:space-y-8 max-w-sm md:max-w-md lg:max-w-xl">
              <p className="text-sm md:text-sm tracking-wider font-bold">
                SUMMER 2020
              </p>

              <h2 className="text-3xl md:text-5xl lg:text-[54px] font-bold leading-tight">
                NEW COLLECTION
              </h2>

              <p className="text-lg md:text-base font-light leading-relaxed">
                We know how large objects will act,<br />
                but things on a small scale.
              </p>

              <Link href={"/productpage"}>
                <button className="bg-transparent border border-white text-white px-6 py-3 mt-4 md:px-10 md:py-[15px] text-xs md:text-sm font-bold tracking-wider
                 hover:bg-opacity-90 transition-transform transform hover:translate-y-0 active:translate-y-1">
                  SHOP NOW
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>


      <div className="flex flex-col max-w-full overflow-x-hidden items-center justify-center pt-[80px] mb-[48px] bg-[#FAFAFA]">
        <h3 className="text-3xl font-bold text-[#252B42]">EDITORS PICK</h3>
        <span className="text-[#737373] text-lg text-center mt-2">
          Problems trying to resolve the conflict between
        </span>

        <div className="mt-[48px] flex flex-col  md:flex-row gap-4 px-4 max-w-full">
          {/* MEN Section */}
          <div className="relative">
            <Image
              src={'/Images/filter.png'}
              alt="filter.png"
              width={510}
              height={500}
              className="w-full h-auto "
            />
            <button className="absolute bottom-6 left-6 bg-white text-[#252B42] transition-transform transform hover:translate-y-0 active:translate-y-1 text-sm font-bold px-[64px] py-3 hover:bg-gray-50 ">
              MEN
            </button>
          </div>

          {/* WOMEN Section */}
          <div className="relative">
            <Image
              src={'/Images/filter (1).png'}
              alt="filter (1).png"
              width={240}
              height={500}
              className="w-full h-auto "
            />
            <button className="absolute bottom-6 left-6 bg-white text-[#252B42] text-sm font-bold px-10 py-3 transition-transform transform hover:translate-y-0 active:translate-y-1 hover:bg-gray-50 ">
              WOMEN
            </button>
          </div>

          {/* ACCESSORIES & KIDS Section */}
          <div className="flex flex-col gap-4">
            {/* ACCESSORIES */}
            <div className="relative">
              <Image
                src={'/Images/media bg-cover.png'}
                alt="filter (2).png"
                width={240}
                height={242}
                className="w-full h-auto "
              />
              <button className="absolute bottom-6 left-6 bg-white text-[#252B42] transition-transform transform hover:translate-y-0 active:translate-y-1 text-sm font-bold px-10 py-3 hover:bg-gray-50 ">
                ACCESSORIES
              </button>
            </div>

            {/* KIDS */}
            <div className="relative">
              <Image
                src={'/Images/filter (3).png'}
                alt="filter (3).png"
                width={239}
                height={242}
                className="w-full h-auto  "
              />
              <button className="absolute bottom-6 left-6 bg-white text-[#252B42] transition-transform transform hover:translate-y-0 active:translate-y-1 text-sm font-bold px-10 py-3 hover:bg-gray-50 ">
                KIDS
              </button>
            </div>
          </div>
        </div>
      </div>


      <div className='w-full h-screen flex flex-col justify-between items-center  '>
        <div className='my-10 gap-4 flex flex-col justify-center items-center'>
          <p className='text-xl  text-[#737373] text-center'>Featured Products</p>
          <p className='text-3xl font-bold text-[#252B42] text-center'>BESTSELLER PRODUCTS</p>
          <p className='text-lg text-[#737373] text-center'>Problems trying to resolve the conflict between </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {products
              .filter(product => product?.slug)
              .slice(0, 8)
              ?.map((product) => (
                <div
                  key={product?._id}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group flex flex-col"
                >
                  {/* Image Section */}
                  <div className="aspect-[4/5] w-full overflow-hidden rounded-lg bg-gray-100 relative">
                    <Link href={`/products/${product?.slug}`}>
                      {product?.productImage && (
                        <div className="w-full h-full flex items-center justify-center">
                          <Image
                            src={urlFor(product?.productImage).url()}
                            alt={product?.title}
                            width={300}
                            height={300}
                            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                      )}
                    </Link>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 flex-1 flex flex-col">
                    <Link href={`/products/${product.slug}`}>
                      <h2 className="text-xl font-semibold text-gray-900 mb-2 hover:text-primary line-clamp-2">
                        {product.title}
                      </h2>
                    </Link>
                    <p className="text-lg font-bold text-primary mb-3">${product.price}</p>
                    <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-1">
                      {product.description}
                    </p>
                    <button
                      className="mt-auto w-full text-[#252B42] border border-[#252B42] py-3 px-3 rounded-md 
               transition-colors duration-200 font-semibold text-lg"
                      onClick={(e) => handleAddToCart(e, product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>


        


        <div className="bg-[#23856D] w-full min-h-screen flex flex-col lg:flex-row justify-center items-center px-4 py-8">
          {/* Text Content */}
          <div className="flex flex-col space-y-4 lg:space-y-7 max-w-xl text-center lg:text-left">
            <span className="text-white text-sm lg:text-base tracking-wider">SUMMER 2020</span>
            <h1 className="text-white text-3xl lg:text-[40px] xl:text-[58px] font-bold leading-tight">
              Vita Classic<br />
              Product
            </h1>
            <p className="text-white/70 text-base lg:text-lg leading-relaxed">
              We know how large objects will act, but things on<br />
              a small scale.
            </p>
            <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-8 space-y-4 lg:space-y-0 mt-4">
              <span className="text-white text-xl lg:text-2xl font-bold">$16.48</span>
              <button className="bg-[#2DC071] text-white px-8 py-3 transition-transform transform hover:translate-y-0 active:translate-y-1 lg:px-10 lg:py-4 rounded font-bold text-sm lg:text-base hover:bg-opacity-90 ">
                ADD TO CART
              </button>
            </div>
          </div>

          {/* Image Section */}

          <div className="flex justify-center items-end ">
            <Image
              src="/Images/col-md-6.png"
              alt="Vita Classic Product"
              width={400}
              height={800}
              className="w-auto h-auto max-w-full"
            />
          </div>
        </div>

        <div className="flex flex-col-reverse lg:flex-row justify-between items-center max-w-7xl mx-auto px-4 py-8">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0">
            <Image
              src="/Images/asian-woman-man-with-winter-clothes 1.png"
              alt="Couple in winter clothes"
              className="object-cover w-3/4 lg:w-full h-auto"
              width={500}
              height={500}
            />
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col space-y-5 text-center lg:text-left lg:ml-28">
            <p className="text-[#BDBDBD] text-sm lg:text-base tracking-wide uppercase">SUMMER 2020</p>
            <h3 className="text-[#252B42] font-bold text-2xl lg:text-[40px] leading-tight">
              Part of the Neural<br />Universe
            </h3>
            <p className="text-[#737373] text-base lg:text-xl leading-relaxed font-normal">
              We know how large objects will act,<br />
              but things on a small scale.
            </p>
            <div className="flex flex-col lg:flex-row items-center gap-4 mt-4">
              <button className="bg-[#2DC071] text-white px-8 py-3 rounded-md font-bold transition-transform transform hover:translate-y-0 active:translate-y-1 text-sm hover:bg-opacity-90 ">
                BUY NOW
              </button>
              <button className="bg-transparent text-[#2DC071] px-8 py-3 rounded-md border transition-transform transform hover:translate-y-0 active:translate-y-1 border-[#2DC071] font-bold text-sm hover:bg-opacity-90 ">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>

        {/* Featured Posts Section */}
        <div className='text-center px-4 md:px-8 mt-20 md:mt-[112px] mb-10 md:mb-[80px] flex flex-col items-center gap-2 max-w-screen-xl mx-auto'>
          <span className='text-[#23A6F0] text-lg tracking-wider font-bold'>Practice Advice</span>
          <h3 className='text-3xl md:text-[40px] font-bold text-[#252B42]'>Featured Posts</h3>
          <p className='text-[#737373] text-lg px-4'>
            Problems trying to resolve the conflict between
            <span className='hidden md:inline'><br /></span>
            the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>

        {/* Article Cards Container */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 px-4 md:px-8 max-w-screen-xl mx-auto'>
          <ArticleCard
            imageSrc={'/Images/unsplash_hHdHCfAifHU (1).png'}
            altText={'unsplash_hHdHCfAifHU (1).png'}
            title={' Loudest à la Madison #1 (L integral)'}
            description={' We focus on ergonomics and meeting We focus on ergonomics and meeting  Its only a keystroke away.'}
            date={'22 April 2021'}
            comments={10}
            badgeText='New'
          />

          <ArticleCard
            imageSrc={'/Images/unsplash_tVEqStC2uz8.png'}
            altText={'unsplash_tVEqStC2uz8.png'}
            title={' Loudest à la Madison #1 (L integral)'}
            description={' We focus on ergonomics and meeting We focus on ergonomics and meeting  Its only a keystroke away.'}
            date={'22 April 2021'}
            comments={10}
            badgeText='New'
          />

          <ArticleCard
            imageSrc={'/Images/unsplash_dEGu-oCuB1Y.png'}
            altText={'unsplash_dEGu-oCuB1Y.png'}
            title={' Loudest à la Madison #1 (L integral)'}
            description={' We focus on ergonomics and meeting We focus on ergonomics and meeting  Its only a keystroke away.'}
            date={'22 April 2021'}
            comments={10}
          />
        </div>


        <Footer />
      </div>

    </>
  );
};

export default HeroPage;


