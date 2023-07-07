"use client";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleNav = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <header className="flex justify-center md:items-center md:h-[100px] md:w-full">
      <div className=" w-[300px] flex justify-between items-center md:hidden">
        <Link href="/">
          <div className="tracking-[2px] leading-[27px] font-[bold] text-4xl text-[#9f9eff]">
            <div className=" text-[#433ec4] ">RAHIL</div>
            <div className="text-[#007efc] ">ANSARI</div>
          </div>
        </Link>

        <div className="text-[40px] z-[1000] text-[#433ec4]" aria-label="toggle navigation" onClick={handleNav}>
          {isDrawerOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      <ul
        className={` fixed md:static  bg-black md:bg-transparent md:translate-x-0 list-none text-white z-[100] ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"}  transition-transform duration-[250ms] 
          ease-[cubic-bezier(0.5,0,0.5,1)]  h-screen  md:h-0  flex 
          flex-col md:flex-row  justify-evenly md:justify-center items-center  inset-0 md:inset-auto `}
      >
        <li className="">
          <Link href="/" className="relative text-[#a09eff] no-underline text-3xl font-black uppercase  md:inline-block  md:text-base md:font-normal  md:mx-2.5 md:my-0 md:pb-[5px]">
            Home <span className="absolute bg-[#007efc] w-[0%] h-0.5 transition-all duration-[0.6s] left-0 bottom-0 hover:w-full"></span>
          </Link>
        </li>
        <li className="">
          <Link href="/about" className="relative text-[#a09eff] no-underline text-3xl font-black uppercase  md:inline-block  md:text-base md:font-normal  md:mx-2.5 md:my-0 md:pb-[5px]">
            About <span className="absolute bg-[#007efc] w-[0%] h-0.5 transition-all duration-[0.6s] left-0 bottom-0 hover:w-full"></span>
          </Link>
        </li>
        <li className="">
          <Link href="/projects" className="relative text-[#a09eff] no-underline text-3xl font-black uppercase  md:inline-block  md:text-base md:font-normal  md:mx-2.5 md:my-0 md:pb-[5px]">
            Projects <span className="absolute bg-[#007efc] w-[0%] h-0.5 transition-all duration-[0.6s] left-0 bottom-0 hover:w-full"></span>
          </Link>
        </li>
        <li className="">
          <Link href="/support" className="relative text-[#a09eff] no-underline text-3xl font-black uppercase  md:inline-block  md:text-base md:font-normal  md:mx-2.5 md:my-0 md:pb-[5px]">
            Support <span className="absolute bg-[#007efc] w-[0%] h-0.5 transition-all duration-[0.6s] left-0 bottom-0 hover:w-full"></span>
          </Link>
        </li>
        <li className="">
          <Link href="/contact" className="relative text-[#a09eff] no-underline text-3xl font-black uppercase  md:inline-block  md:text-base md:font-normal  md:mx-2.5 md:my-0 md:pb-[5px]">
            Contact <span className="absolute bg-[#007efc] w-[0%] h-0.5 transition-all duration-[0.6s] left-0 bottom-0 hover:w-full"></span>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
