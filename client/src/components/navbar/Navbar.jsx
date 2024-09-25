"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import CartPopover from "../cart/CartPopover";

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null); // Reference to the sidebar

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  // Close sidebar when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        closeSidebar();
      }
    };

    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <nav className="flex items-center justify-between py-6 lg:px-14 px-3 relative">
      {/* Left Menu - Desktop */}
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

      {/* Mobile Menu Icon */}
      <div className="flex items-center justify-between w-full lg:w-auto">
        <button
          onClick={openSidebar}
          className="lg:hidden p-2 text-gray-500 focus:outline-none"
        >
          <IoIosMenu size={28} />
        </button>

        {/* Logo */}
        <div className="flex-shrink-0 flex items-center justify-center lg:justify-start">
          <Image
            src="/Images/SashaLogo.svg"
            width={140}
            height={50}
            alt="Sasha Logo"
            className="mx-4" // Adjusts the spacing between logo and menu icon
          />
        </div>

        {/* Cart Icon (Mobile Only) */}
        <div className="lg:hidden">
          <MdOutlineShoppingBag size={28} onClick={openCart} />
          <CartPopover isOpen={isCartOpen} closePopover={closeCart} />
        </div>
      </div>

      {/* Right Menu - Desktop */}
      <ul className="hidden lg:flex flex-row gap-4 items-center font-medium text-base justify-end flex-1">
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

      {/* Sidebar - Mobile */}
      {isSidebarOpen && (
        <div
          ref={sidebarRef} // Sidebar reference for detecting outside clicks
          className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 transform ${
            openSidebar ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out lg:hidden`}
        >
          <div className="p-4 flex justify-between items-center border-b border-gray-200">
            <span className="font-semibold text-lg">Menu</span>
            <button onClick={closeSidebar} className="text-gray-500">
              <IoIosClose size={28} />
            </button>
          </div>
          <ul className="mt-4 space-y-4 px-4">
            <li>
              <a href="#skincare" onClick={closeSidebar}>
                Skincare
              </a>
            </li>
            <li>
              <a href="#haircare" onClick={closeSidebar}>
                Haircare
              </a>
            </li>
            <li>
              <a href="#nutraceuticals" onClick={closeSidebar}>
                Nutraceuticals
              </a>
            </li>
            <li>
              <a href="#recognise" onClick={closeSidebar}>
                Recognise
              </a>
            </li>
            <li>
              <a href="#about" onClick={closeSidebar}>
                About
              </a>
            </li>
            <li>
              <Link href="/register">
                <button
                  onClick={closeSidebar}
                  className="py-3 px-7 bg-[#1A1A1A] text-white rounded-lg font-normal text-base gap-2 hover:text-black hover:bg-white hover:border-black hover:border-2 border-2 border-black"
                >
                  Signup
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
