import React from 'react';
import Image from 'next/image';
import ProductCard from './ProductCard';
import Header from './Header';
import Navbar1 from './Navbar1';
import ArticleCard from './ArticleCard';
import Footer from './Footer';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <>

      <Header />
      <Navbar1 />
      <div className="relative w-full h-screen bg-[#01b7df] overflow-x-hidden">
        {/* Desktop Image */}
        <div className="absolute right-0 top-0 h-full w-1/2 hidden md:block">
          <Image
            src="/Images/shop-hero-1-product-slide-1.jpg"
            alt="New Collection"
            fill
            style={{ objectFit: 'cover', objectPosition: 'right' }}
            priority
            className="select-none"
          />
        </div>

        {/* Mobile Image */}
        <div className="absolute top-0 left-0 w-full h-1/2 md:hidden">
          <Image
            src="/Images/shop-hero-1-product-slide-1.jpg"
            alt="New Collection"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
            className="select-none"
          />
        </div>

        {/* Content Container */}
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center md:items-center md:justify-start">
          <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center md:text-left">
            {/* Text Content */}
            <div className="text-white space-y-4 md:space-y-8 max-w-sm md:max-w-md lg:max-w-xl">
              <p className="text-xs md:text-sm tracking-wider font-bold">
                SUMMER 2020
              </p>

              <h2 className="text-3xl md:text-5xl lg:text-[54px] font-bold leading-tight">
                NEW COLLECTION
              </h2>

              <p className="text-sm md:text-base font-light leading-relaxed">
                We know how large objects will act,<br />
                but things on a small scale.
              </p>

              <Link href={"/productpage"}>
                <button className="bg-[#2DC071] text-white px-6 py-3 mt-4 md:px-10 md:py-[15px] text-xs md:text-sm font-bold tracking-wider hover:bg-opacity-90 transition-transform transform hover:translate-y-0 active:translate-y-1">
                  SHOP NOW
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>


      <div className="flex flex-col max-w-full overflow-x-hidden items-center justify-center pt-[80px] mb-[48px] bg-[#FAFAFA]">
        <h3 className="text-2xl font-bold text-[#252B42]">EDITOR'S PICK</h3>
        <span className="text-[#737373] text-sm text-center mt-2">
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


      <div className='w-full h-screen flex flex-col justify-between items-center   bg-[#FAFAFA] '>
        <div className='my-20 gap-4 flex flex-col justify-center items-center'>
          <p className='text-xl  text-[#737373] text-center'>Featured Products</p>
          <p className='text-2xl font-bold text-[#252B42] text-center'>BESTSELLER PRODUCTS</p>
          <p className='text-sm text-[#737373] text-center'>Problems trying to resolve the conflict between </p>
        </div>

        <div className='flex justify-around items-center gap-[29.5px] flex-wrap  ' >

          {/* Rendering ProductCards component */}

          <ProductCard imageSrc={'/Images/product-cover-5.png'}
            productName={'TurtleNeck Jumper'}
            department={'Women Casual OutWear'}
            originalPrice={16.48}
            salePrice={6.48}
          />

          <ProductCard imageSrc={'/Images/fixed-height.png'}
            productName={'White Bed Clothes'}
            department={'Men Casual OutWear'}
            originalPrice={16.48}
            salePrice={6.48}
          />

          <ProductCard imageSrc={'/Images/product-cover-5 (1).png'}
            productName={'White Denim Stretchable Jeans'}
            department={'Women Casual OutWear'}
            originalPrice={16.48}
            salePrice={6.48}
          />

          <ProductCard imageSrc={'/Images/fixed-height (1).png'}
            productName={'Prada Leather Jacket'}
            department={'Women Casual OutWear'}
            originalPrice={16.48}
            salePrice={6.48}
          />
        </div>

        <div className='my-[80px] flex justify-around items-center gap-[29.5px] flex-wrap   '>

          <ProductCard imageSrc={'/Images/fixed-height (2).png'}
            productName={'Clase Graduandas'}
            department={'Women Casual OutWear'}
            originalPrice={16.48}
            salePrice={6.48}
          />

          <ProductCard imageSrc={'/Images/fixed-height (3).png'}
            productName={'Embossed Knit'}
            department={'Women Casual OutWear'}
            originalPrice={16.48}
            salePrice={6.48}
          />

          <ProductCard imageSrc={'/Images/fixed-height (4).png'}
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

          <div className="flex justify-center items-center mt-8 lg:mt-0">
            <Image
              src="/Images/col-md-6.png"
              alt="Vita Classic Product"
              width={300}
              height={600}
              className="w-auto h-auto max-w-full"
            />
          </div>
        </div>

        <div className="flex flex-col-reverse lg:flex-row justify-between items-center max-w-7xl mx-auto px-4 py-8">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0">
            <img
              src="/Images/asian-woman-man-with-winter-clothes 1.png"
              alt="Couple in winter clothes"
              className="object-cover w-3/4 lg:w-full h-auto"
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
          <span className='text-[#23A6F0] text-sm tracking-wider font-bold'>Practice Advice</span>
          <h3 className='text-2xl md:text-[40px] font-bold text-[#252B42]'>Featured Posts</h3>
          <p className='text-[#737373] text-sm px-4'>
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
          />

          <ArticleCard
            imageSrc={'/Images/unsplash_tVEqStC2uz8.png'}
            altText={'unsplash_tVEqStC2uz8.png'}
            title={' Loudest à la Madison #1 (L integral)'}
            description={' We focus on ergonomics and meeting We focus on ergonomics and meeting  Its only a keystroke away.'}
            date={'22 April 2021'}
            comments={10}
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

export default HeroSection;


