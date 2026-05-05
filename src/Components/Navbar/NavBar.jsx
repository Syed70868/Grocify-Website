import React, { useEffect, useState } from 'react';
import { TiHeartFullOutline } from 'react-icons/ti';
import { HiShoppingBag } from 'react-icons/hi2';
import { IoSearch } from 'react-icons/io5';
import { TbMenu2, TbMenu3 } from 'react-icons/tb';

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleMenu = () => {
    if (showMenu) {
      setShowMenu(false);
    } else {
      setShowMenu(true);
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header
      className={`bg-white fixed top-0 left-0 right-0 z-50 ${isScrolled ? 'drop-shadow-[0_4px_25px_rgba(0,0,0.08)] bg-white/50 backdrop-blur-lg' : ''}`}
    >
      <nav className="max-w-[1400px] mx-auto px-10 md:h-[14vh] h-[12vh] items-center flex justify-between">
        {/* Logo */}
        <a href="#" className="text-3xl font-bold ">
          Gr<span className="text-orange-500 uppercase">o</span>cify
        </a>
        {/* Desktop Menu */}
        <ul className="md:flex items-center gap-x-15 hidden">
          <li>
            <a
              href=""
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500 active:text-orange-500"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href=""
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500 active:text-orange-500"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href=""
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500 active:text-orange-500"
            >
              Process
            </a>
          </li>
          <li>
            <a
              href=""
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500 active:text-orange-500"
            >
              Contact Us
            </a>
          </li>
        </ul>
        {/* Nav Action */}
        <div className="flex gap-x-5 items-center">
          {/* Input Field */}
          <div className="md:flex p-1 border-2 items-center border-orange-500 rounded-full hidden">
            <input
              type="text"
              name="text"
              id="text"
              placeholder="Search..."
              autoComplete="off"
              className="flex-1 h-[4vh] px-3 focus:outline-none"
            />
            <button className=" text-xl text-white items-center font-bold w-10 flex justify-center rounded-full h-10 bg-gradient-to-b from-orange-400 to-orange-500 ">
              <IoSearch />
            </button>
          </div>
          <a href="" className="text-zinc-800 text-2xl">
            <TiHeartFullOutline />
          </a>
          <a href="" className="text-zinc-800 text-2xl">
            <HiShoppingBag />
          </a>
          {/* Hamburger */}
          <button
            className="text-zinc-800 text-2xl md:hidden"
            onClick={toggleMenu}
          >
            {showMenu ? <TbMenu3 /> : <TbMenu2 />}
          </button>
        </div>
        {/* Mobile Menu */}
        <ul
          className={`flex bg-white/50 rounded-xl backdrop-blur-lg flex-col  top-30 shadow-xl -left-full transform -translate-x-1/2 p-10 text-white  gap-y-8 gap-x-15 md:hidden absolute transition-all duration-500 ${showMenu ? 'left-1/2' : '-left-full'}`}
        >
          <li>
            <a
              href=""
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500 active:text-orange-500"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href=""
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500 active:text-orange-500"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href=""
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500 active:text-orange-500"
            >
              Process
            </a>
          </li>
          <li>
            <a
              href=""
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500 active:text-orange-500"
            >
              Contact Us
            </a>
          </li>
          <li className="flex p-1 border-2 items-center border-orange-500 rounded-full md:hidden">
            <input
              type="text"
              name="text"
              id="text"
              placeholder="Search..."
              autoComplete="off"
              className="flex-1 h-[4vh] px-3 focus:outline-none placeholder:text-black"
            />
            <button className=" text-xl text-black items-center font-bold w-10 flex justify-center rounded-full h-10 bg-gradient-to-b from-orange-400 to-orange-500 ">
              <IoSearch />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
