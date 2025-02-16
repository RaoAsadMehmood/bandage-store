"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { VscAccount } from "react-icons/vsc";
import { CiSearch, CiMail } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
import { IoHeartOutline, IoCallOutline } from "react-icons/io5";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { SiYoutube } from "react-icons/si";
import { HiMenu, HiX } from "react-icons/hi";
import ShimmeringText from "../components/ShimmeringText";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/productpage" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];


const MobileMenu = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const pathname = usePathname();

  return (
    <div
      className={`fixed inset-0 transform ${isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
    >
      <div className="bg-white h-full w-64 shadow-lg">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-3xl font-bold text-[#252B42]">Bandage</h3>
          <button onClick={onClose} className="text-gray-600">
            <HiX size={22} />
          </button>
        </div>

        <nav className="p-4">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`${pathname === item.href
                      ? "text-[#23A6F0] font-semibold"
                      : "text-gray-600"
                    } block py-2`}
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8 space-y-4">
            <Link
              href="/login"
              className="flex items-center gap-2 text-[#23A6F0] py-2"
              onClick={onClose}
            >
              <VscAccount size={22} />
              <span className="text-lg">Login / Register</span>
            </Link>

            <div className="flex items-center gap-4 text-gray-600">
              <CiSearch size={22} />
              <BsCart2 size={22} />
              <IoHeartOutline size={22} />
            </div>
          </div>
        </nav>
      </div>


      <div
        className="absolute inset-0 bg-black bg-opacity-50 -z-10"
        onClick={onClose}
      />
    </div>
  );
};


const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Top Bar */}
      <div className="hidden md:flex pl-[144px] pr-[169px] text-[#FFFFFF] bg-[#23856d] w-full h-[58px] items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-[#FFFFFF]">
            <IoCallOutline size={22} />
            <span className="text-sm">(225) 555-0118</span>
          </div>
          <div className="flex items-center gap-1 text-[#FFFFFF]">
            <CiMail size={22} />
            <span className="text-sm">michelle.rivera@example.com</span>
          </div>
        </div>
        
        <ShimmeringText />

        <div className="flex items-center gap-3">
          <p className="text-[14px] font-bold">Follow Us:</p>
          <div className="flex items-center gap-3">
            <Link href="" className="text-[#FFFFFF] hover:text-[#23A6F0] hover:transform transition duration-500 hover:scale-110 ">
              <FaInstagram size={22} />
            </Link>
            <Link href="" className="text-[#FFFFFF] hover:text-[#23A6F0] hover:transform transition duration-500 hover:scale-110 ">
              <SiYoutube size={22} />
            </Link>
            <Link href="" className="text-[#FFFFFF] hover:text-[#23A6F0] hover:transform transition duration-500 hover:scale-110 ">
              <FaFacebook size={22} />
            </Link>
            <Link href="" className="text-[#FFFFFF] hover:text-[#23A6F0] hover:transform transition duration-500 hover:scale-110">
              <FaTwitter size={22} />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white px-4 md:px-6 py-2 mb-3 h-auto w-full">
        <div className="flex items-center justify-between md:justify-around font-medium text-sm">
          <Link href={"/"}>
            <h3 className="text-2xl font-bold text-[#252B42]">Bandage</h3>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex">
            <ul className="flex justify-center items-center gap-4 text-[#737373]">
              {navItems.map((item) => (
                <li key={item.label} className="text-lg">
                  <Link
                    href={item.href}
                    className={`${pathname === item.href
                        ? "text-[#23A6F0] font-semibold"
                        : "text-[#737373]"
                      }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop Account Section */}
          <div className="hidden md:flex items-center gap-2 text-[#23A6F0]">
            <VscAccount size={22} className="hover:transform transition duration-500 hover:scale-110 hover:text-[26px]" />
            <Link href={""}>
              <span className="text-[14px]">Login / Register</span>
            </Link>
            <Link href={""}>
              <CiSearch size={22} className="hover:transform transition duration-500 hover:scale-110 hover:text-[26px]" />
            </Link>
            <Link href={"/cart"}>
              <BsCart2 size={22} className="hover:transform transition duration-500 hover:scale-110 hover:text-[26px]" />
            </Link>
            <Link href={""}>
              <IoHeartOutline size={22} className="hover:transform transition duration-500 hover:scale-110 hover:text-[26px]" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden text-gray-600"
          >
            <HiMenu size={22} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Navigation;
