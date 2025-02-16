'use client';
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image';
import Footer from '../components/Footer';
import AnimatedStats from './Animatedstats';
import VideoSection from './VideoSection';
import EmployeeCard from '../team/EmployeeCard';
import Navbar from '../team/Navbar';


const About = () => {

  return (
    <>
      {/* Main Navbar Start */}
      <Navbar />
      {/* Main Navbar End */}


      {/* Hero Section */}

      <section className="min-h-screen w-full py-12 lg:py-16 bg-white overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Content Column */}
            <div className="flex flex-col items-center lg:items-start space-y-6 lg:space-y-8 max-w-xl w-full lg:w-1/2">
              <span className="text-[#252B42] text-sm font-bold sm:text-base tracking-wider uppercase">
                About Company
              </span>

              <h1 className="text-[#252B42] text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-center lg:text-left">
                About Us
              </h1>

              <p className="text-[#252B42] text-base sm:text-lg leading-relaxed text-center lg:text-left">
                We know how large objects will act, but things on
                <br className="hidden lg:block" />
                a small scale just do not act that way.
              </p>

              <div className="w-full sm:w-auto animate-fade-in-up flex justify-center items-center">
                <button className=" sm:w-auto bg-[#23a6f0] text-white text-sm font-bold py-4 px-8 rounded-md
                hover:bg-[#1b86c3] transition-transform transform hover:translate-y-0 active:translate-y-1
                shadow-lg hover:shadow-xl">
                  Get Quote Now
                </button>
              </div>
            </div>

            {/* Image Column */}
            <div className="w-full lg:w-1/2 relative">
              <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] w-full">
                <Image
                  src="/Images/About us.png"
                  alt="Shopping woman with bags"
                  fill
                  className="object-contain transform hover:scale-105 transition-transform duration-300"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section End */}

      <div className="bg-[#fafafa] w-full h-auto py-8 px-4 sm:px-8 md:px-16 lg:px-[211px] flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-0">
  {/* Text Section */}
  <div className="flex flex-col gap-4 text-center md:text-left md:w-1/2">
    <span className="text-[#E74040] text-sm md:text-base font-bold">
      Problems trying
    </span>
    <h3 className="text-[#252B42] font-bold text-xl md:text-2xl lg:text-3xl leading-snug">
      Met minim Mollie non desert <br className="hidden lg:block" />
      Alamo est sit cliquey dolor do <br className="hidden lg:block" />
      met sent.
    </h3>
  </div>

  {/* Paragraph Section */}
  <p className="text-[#737373] font-light text-sm md:text-base md:w-1/2 text-center md:text-left leading-relaxed">
    Problems trying to resolve the conflict between the two major realms of
    Classical physics: Newtonian mechanics
  </p>
</div>



      <AnimatedStats />
      <VideoSection />


      {/* Employees Section */}
      <div className="w-full  py-12 flex flex-col items-center">

        <div className="flex flex-col items-center text-center mb-[112px]">
          <p className="text-[40px] text-[#252B42] font-bold">Meet Our Team</p>
          <span className="text-[14px] text-[#737373]">
            Problems trying to resolve the conflict between <br />
            the two major realms of Classical physics: Newtonian mechanics
          </span>
        </div>

        {/* Team Members */}
        <div className="flex flex-wrap justify-around gap-10 px-4">
          <EmployeeCard imageSrc={'/Images/team-1-user-3.png'} userName={'Charles Dickens'} profession={'Manager'} />
          <EmployeeCard imageSrc={'/Images/team-1-user-2.png'} userName={'Elizabeth William'} profession={'Illustrator'} />
          <EmployeeCard imageSrc={'/Images/team-1-user-1.png'} userName={'Emily Rowlnad'} profession={'Animator'} />
        </div>
      </div>

      <section className="bg-[#fafafa] w-full py-8 sm:py-12 lg:py-16">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 max-w-3xl mx-auto">
            <h2 className="text-[#252B42] text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Big Companies Are Here
            </h2>
            <p className="text-[#737373] text-sm sm:text-base lg:text-lg px-4">
                Problems trying to resolve the conflict between
                <span className="hidden sm:inline"> </span>
                <br className="sm:hidden" />
                the two major realms of Classical physics: Newtonian mechanics
            </p>
        </div>

        {/* Logos Section */}
        <div className="flex flex-wrap gap-8 sm:gap-12 items-center justify-center">
            {[
                { src: "/Images/Vector (1).png", alt: "Hooli Logo" },
                { src: "/Images/Vector.png", alt: "Lyft Logo" },
                { src: "/Images/fa-brands-5.png", alt: "Leaf Logo" },
                { src: "/Images/col-md-2 (1).png", alt: "Stripe Logo" },
                { src: "/Images/col-md-2.png", alt: "AWS Logo" },
            ].map((logo, index) => (
                <div
                    key={index}
                    className="flex justify-center p-4 sm:p-6"
                >
                    <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={153}
                        height={34}
                        className="w-[100px] sm:w-[120px] lg:w-[153px] h-auto 
                        transform transition duration-300 hover:scale-110
                        opacity-70 hover:opacity-100"
                    />
                </div>
            ))}
        </div>
    </div>
</section>


      <section className="w-full">
        <div className="flex flex-col lg:flex-row">
          {/* Blue Content Section */}
          <div className="w-full lg:w-[60%] bg-[#2a7cc7] min-h-[400px] sm:min-h-[500px] lg:min-h-[580px]">
            <div className="px-6 sm:px-12 lg:px-0 py-16 sm:py-20 lg:py-0 lg:ml-[25%] lg:my-[199.5px] flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 lg:space-y-[20px]">

              <span className="text-white font-bold text-sm sm:text-base tracking-wider">
                WORK WITH US
              </span>

              <h2 className="text-white font-bold text-3xl sm:text-4xl lg:text-[40px] leading-tight">
                Now Lets grow Yours
              </h2>

              <p className="text-white text-sm sm:text-[14px] font-light max-w-md">
                The gradual accumulation of information about atomic and
                {' '}
                <br className="hidden lg:block" />
                small-scale behavior during the first quarter of the 20th
              </p>

              <button className="text-white border border-1 py-3 sm:py-[15px] px-8 sm:px-[40px] rounded-md transition-all duration-300 hover:bg-white hover:text-[#2a7cc7]                           active:translate-y-1">
                Lets Connect
              </button>
            </div>
          </div>


          <div className="hidden lg:block w-[40%] h-[580px] relative">
            <Image
              src="/Images/unsplash_vjMgqUkS8q8.png"
              alt="Work with us"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 0vw, 40vw"
              priority
            />
          </div>
        </div>
      </section>

      <Footer />


    </>
  )
}

export default About