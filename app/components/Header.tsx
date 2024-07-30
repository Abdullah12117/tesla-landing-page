"use client";
import { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';
import { CircleHelp } from 'lucide-react';
import { CircleUserRound } from 'lucide-react';
import Image from "next/image"
import logo from "@/app/icons/logo.svg"

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const controlHeader = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) { // if scrolling down
        setIsVisible(false);
      } else { // if scrolling up
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlHeader);
      return () => {
        window.removeEventListener('scroll', controlHeader);
      };
    }
  }, [lastScrollY]);

  return (
    <header className={`fixed top-0 left-0 right-0 w-full  z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="flex justify-between items-center py-5 px-6">
        <div>
          <Image src={logo} className="h-4 w-auto" width={100} height={100} alt="-" />
        </div>

        <nav className="hidden md:flex">
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:underline">Vehicles</a></li>
            <li><a href="#" className="hover:underline">Energy</a></li>
            <li><a href="#" className="hover:underline">Charging</a></li>
            <li><a href="#" className="hover:underline">Discover</a></li>
            <li><a href="#" className="hover:underline">Shop</a></li>
          </ul>
        </nav>

        <div className="hidden md:flex space-x-4 pr-4">
          <CircleHelp />
          <Globe />
          <CircleUserRound />
        </div>

        <button className="block md:hidden" onClick={toggleMenu}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-white w-full">
          <ul className="flex flex-col space-y-2 py-4 px-6">
            <li><a href="#" className="hover:underline">Vehicles</a></li>
            <li><a href="#" className="hover:underline">Energy</a></li>
            <li><a href="#" className="hover:underline">Charging</a></li>
            <li><a href="#" className="hover:underline">Discover</a></li>
            <li><a href="#" className="hover:underline">Shop</a></li>
            <li className="flex space-x-4 pt-4">
              <CircleHelp />
              <Globe />
              <CircleUserRound />
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;