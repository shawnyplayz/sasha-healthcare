'use client'

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";
import CartPopover from "../cart/CartPopover";

const Navbar = () => {

  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  
  return (
    <nav className="flex items-center lg:justify-between py-6 lg:px-14 px-3">
      {/* Left Menu */}
      <ul className="hidden lg:flex flex-row gap-7 font-medium text-base items-center flex-1">
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
      <div className="flex lg:justify-center justify-start flex-shrink-0 items-center">
        <Image
          src="/Images/SashaLogo.svg"
          width={140}
          height={50}
          alt="Sasha Logo"
        />
      </div>

      {/* Right Menu */}
      <ul className="hidden lg:flex flex-row gap-4 items-center font-medium text-base flex-1 justify-end">
        <li>
          <CiSearch size={24} />
        </li>
        <li>
          <a href="#about" className="text-[#1A1A1AB2]">
            About
          </a>
        </li>
        <li>
          <MdOutlineShoppingBag size={24} onClick={openCart} />
          <CartPopover isOpen={isCartOpen} closePopover={closeCart} />
        </li>
        <li>
          <Link href="/register">
            <button className="py-3 px-7 bg-[#1A1A1A] text-white rounded-lg font-normal text-base gap-2 hover:text-black hover:bg-white hover:border-black hover:border-2 border-2 border-black">
              Signup
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
