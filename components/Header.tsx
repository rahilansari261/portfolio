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
    <header>
      <div className=" w-[300px] flex justify-between items-center;">
        <Link href="/">
          <div className="tracking-[2px] leading-[27px] font-[bold] text-4xl text-[#9f9eff];">
            <div className=" text-[#433ec4] ">RAHIL</div>
            <div className="text-[#007efc] ">ANSARI</div>
          </div>
        </Link>

        <div className="text-[40px] z-[1000] text-[#433ec4];" aria-label="toggle navigation" onClick={handleNav}>
          {isDrawerOpen ? "X" : <FaBars />}
        </div>
      </div>
      <nav>
        <ul
          className={`fixed bg-black list-none text-white z-[100] ${
            isDrawerOpen ? "translate-x-0" : "translate-x-full"
          }  transition-transform duration-[250ms] ease-[cubic-bezier(0.5,0,0.5,1)] h-screen flex flex-col justify-evenly items-center m-0 pt-0 pb-[50px] px-0 inset-0`}
        >
          <li className="nav-items">
            <Link href="/" className="nav__link">
              Home <span></span>
            </Link>
          </li>
          <li className="nav-items">
            <Link href="/about" className="nav__link">
              About <span></span>
            </Link>
          </li>
          <li className="nav-items">
            <Link href="/projects" className="nav__link">
              Projects <span></span>
            </Link>
          </li>
          <li className="nav-items">
            <Link href="/support" className="nav__link">
              Support <span></span>
            </Link>
          </li>
          <li className="nav-items">
            <Link href="/contact" className="nav__link">
              Contact <span></span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
