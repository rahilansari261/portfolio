"use client";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleNav = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  useEffect(() => {
    console.log(isDrawerOpen);
  }, [isDrawerOpen]);
  return (
    <header>
      <div className=" wrapper">
        <Link href="/">
          <div className="logo-name ">
            <div className=" fname ">RAHIL</div>
            <div className="sname ">ANSARI</div>
          </div>
        </Link>

        <div className="hamburger" aria-label="toggle navigation" onClick={handleNav}>
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

      {/* return ( */}
      {/* <div className="relative">
        {isDrawerOpen && <div className="fixed inset-0 bg-black opacity-50"></div>}
        <div className={`fixed top-0 right-0 w-64 h-full bg-white transform transition-transform ${isDrawerOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex items-center justify-end p-4">
            <button onClick={toggleDrawer}>
              <FaTimes />
            </button>
          </div>
          <div className="p-4">
            <p className="text-gray-600 text-lg">Drawer Content</p>
          </div>
        </div>
        <button className="fixed top-4 right-4 z-10" onClick={toggleDrawer}>
          {isDrawerOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div> */}
    </header>
  );
};

export default Header;
