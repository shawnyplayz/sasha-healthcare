import Image from "next/image";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6 px-14">
      {/* Left Menu */}
      <ul className="flex flex-row gap-7 font-medium text-base items-center flex-1">
        <li>
          <a href="#skincare">Skincare</a>
        </li>
        <li>
          <a href="#haircare">Haircare</a>
        </li>
        <li>
          <a href="#nutraceuticals">Nutraceuticals</a>
        </li>
        <li>
          <a href="#recognise">Recognise</a>
        </li>
      </ul>

      {/* Logo */}
      <div className="flex justify-center flex-shrink-0 items-center">
        <Image
          src="/Images/SashaLogo.svg"
          width={140}
          height={50}
          alt="Sasha Logo"
        />
      </div>

      {/* Right Menu */}
      <ul className="flex flex-row gap-4 items-center font-medium text-base flex-1 justify-end">
        <li>
          <CiSearch size={24} />
        </li>
        <li>
          <a href="#about" className="text-[#1A1A1AB2]">
            About
          </a>
        </li>
        <li>
          <MdOutlineShoppingBag size={24} />
        </li>
        <li>
          <button className="py-3 px-7 bg-[#1A1A1A] text-white rounded-lg font-normal text-base gap-2 hover:text-black hover:bg-white hover:border-black hover:border-2 border-2 border-black">
            Signup
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;