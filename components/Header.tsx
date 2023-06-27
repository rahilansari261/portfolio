"use client";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
const Header = () => {
  // const open: any = document.querySelector(".hamburger");

  // open.addEventListener("click", () => {
  //   document.body.classList.toggle("nav-open");
  // });

  // const close: any = document.querySelector(".close");

  // close.addEventListener("click", () => {
  //   document.body.classList.toggle("nav-open");
  // });

  const [isOpen, setIsOpen] = useState(false);

  function handleNav(): void {
    setIsOpen(!isOpen);
  }

  return (
    <header>
      <div className="wrapper">
        <Link href="/">
          <div className="logo">
            <div className="fname logo-name">RAHIL</div>
            <div className="sname logo-name">ANSARI</div>
          </div>
        </Link>
        <div className={`hamburger ${isOpen ? { display: "none" } : ""}`} aria-label="toggle navigation" onClick={handleNav}>
          <FaBars />
        </div>
        <div className={`close ${isOpen ? { display: "block" } : ""}`} aria-label="toggle navigation" onClick={handleNav}>
          X
        </div>
      </div>
      <nav>
        <ul className={`nav-list ${isOpen ? { transform: "translateX(0%)" } : ""} `}>
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
