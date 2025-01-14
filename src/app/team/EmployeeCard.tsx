import React from 'react'
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6';
import Link from 'next/link';
interface EmployeeCardProps{
    imageSrc: string;
    userName: string;
    profession: string;
}
const EmployeeCard: React.FC<EmployeeCardProps> = ({ imageSrc, userName, profession }) => {
  return (
    <>
    <div className='flex flex-col items-center text-center gap-4'>
     <Image
            src={imageSrc}
            alt="team-1-user-3.png"
            width={316}
            height={213}
            className="rounded-lg transform transition duration-500 hover:scale-110"
          />
          <p className="text-[#252B42] text-[20px] font-bold">{userName}</p>
          <span className="text-[14px] text-[#737373] font-bold">{profession}</span>
          <div className="flex gap-5">
            <Link href={""}> <FaFacebook size={22} color="#23a6f0" className='transform transition duration-500 hover:scale-110' /> </Link>
            <Link href={""}> <FaTwitter size={22} color="#23a6f0" className='transform transition duration-500 hover:scale-110' /> </Link>
            <Link href={""}><FaInstagram size={22} color="#23a6f0" className='transform transition duration-500 hover:scale-110' /> </Link>
          </div>
          </div>
    </>
  )
}

export default EmployeeCard