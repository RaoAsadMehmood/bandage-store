import Link from 'next/link';
import Navbar from './Navbar';
import { PiGreaterThan } from 'react-icons/pi';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6';
import EmployeeCard from './EmployeeCard';
import { CiLinkedin } from 'react-icons/ci';
import Footer from '../components/Footer';

const Blog = () => {
  return (
    <>
      <Navbar />
      <div className="my-10 w-full h-auto text-center px-4 py-6">
        {/* Subheading */}
        <p className="font-bold text-sm text-[#737373] mb-2">WHAT WE DO</p>

        {/* Main Heading */}
        <h3 className="text-3xl md:text-4xl lg:text-5xl text-[#252B42] font-bold leading-snug">
          Innovation tailored for you
        </h3>

        {/* Breadcrumb Navigation */}
        <div className="flex justify-center items-center gap-2 my-5">
          <Link href="/" className="text-sm text-[#252B42] font-bold">
            Home
          </Link>
          <PiGreaterThan size={16} className="text-[#737373] font-bold" />
          <a href="#team" className="text-sm font-bold text-[#737373]">
            Team
          </a>

        </div>

        {/* Hero Section */}
       
<div id='team' className="w-full h-auto flex justify-center my-5 flex-wrap md:flex-row flex-col gap-2">
          {/* Large Image */}
          <div className="flex-1">
            <img
              src="/Images/unsplash_Lks7vei-eAg.png"
              alt="Description"
              className="w-full h-auto transform transition duration-500 hover:scale-110"
            />
          </div>

          {/* Smaller Images */}
          <div className="flex flex-wrap gap-2 flex-1">
            <img
              src="/Images/unsplash_gMsnXqILjp4.png"
              alt="Description"
              className="w-[49%] object-cover transform transition duration-500 hover:scale-110"
            />
            <img
              src="/Images/unsplash_1-aA2Fadydc.png"
              alt="Description"
              className=" w-[49%] object-cover transform transition duration-500 hover:scale-110"
            />
            <img
              src="/Images/unsplash_mcSDtbWXUZU.png"
              alt="Description"
              className=" w-[49%] object-cover transform transition duration-500 hover:scale-110"
            />
            <img
              src="/Images/unsplash_PSmDDeXaEWE.png"
              alt="Description"
              className="w-[49%] object-cover transform transition duration-500 hover:scale-110"
            />
          </div>
        </div>
    
        {/* Employees Section */}
        <h3 className='text-[#252B42] text-[40px] font-bold mt-[112px] my-4'>MEET OUR TEAM</h3>

        <div className="mt-[50px] flex justify-center items-center  md:flex-row flex-col gap-8">
          <EmployeeCard imageSrc={'/Images/media.png'} userName={'Gurleen Kaur'} profession={'Social Media Manager'} />
          <EmployeeCard imageSrc={'/Images/media (1).png'} userName={'Hafsa Kiyani'} profession={'Sales Executive'} />
          <EmployeeCard imageSrc={'/Images/team-1-user-2 (1).png'} userName={'Elizabeth William'} profession={'Brand Ambassador'} />
        </div>
        <div className='my-[112px] flex justify-center items-center  md:flex-row flex-col gap-8'>
          <EmployeeCard imageSrc={'/Images/media (3).png'} userName={'Emma Dylan'} profession={'Wed Designer'} />
          <EmployeeCard imageSrc={'/Images/media (2).png'} userName={'Evelyn Shawne'} profession={'Photgrapher'} />
          <EmployeeCard imageSrc={'/Images/team-1-user-1.png'} userName={'Isabella'} profession={'Back End Developer'} />
        </div>

        <div className='my-[112px] flex justify-center items-center  md:flex-row flex-col gap-8'>
          <EmployeeCard imageSrc={'/Images/team-1-user-3.png'} userName={'Jhon Wick'} profession={'Director'} />
          <EmployeeCard imageSrc={'/Images/team-1-user-2.png'} userName={'Emily Rowland'} profession={'Full Stack Developer'} />
          <EmployeeCard imageSrc={'/Images/media (3).png'} userName={'Evie Salt'} profession={'Graphic Designer'} />
        </div>

        <div className="my-10 text-center flex flex-col items-center">
          <h3 className="text-[#252B42] font-bold text-[40px]">
            Start your 14 days free trial
          </h3>
          <p className="text-sm font-light text-[#737373] mt-4 mb-6">
            Met minim Mollie non desert Alamo est sit cliquey dolor <br />
            do met sent. RELIT official consequent.
          </p>
          <button className="bg-[#23a6f0] text-white text-sm font-bold py-4 px-6 rounded-md shadow-lg transition-transform transform hover:translate-y-0 active:translate-y-1">
            Try it free now
          </button>
          <div className="flex gap-4 mt-6">
            <Link href={""}> <FaTwitter size={22} color="#23a6f0" className='transform transition duration-500 hover:scale-110' /> </Link>
            <Link href={""}> <FaFacebook size={22} color="#23a6f0" className='transform transition duration-500 hover:scale-110' /> </Link>
            <Link href={""}><FaInstagram size={22} color="#23a6f0" className='transform transition duration-500 hover:scale-110' /> </Link>
            <Link href={""}><CiLinkedin size={24} className="text-[#23a6f0] text-xl transform transition duration-500 hover:scale-110" /></Link>
          </div>
        </div>
      </div>
      <Footer />

    </>
  )
}

export default Blog