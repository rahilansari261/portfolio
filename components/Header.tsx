import { FaBars } from "react-icons/fa";
const Header = () => {
  const open: any = document.querySelector(".hamburger");

  open.addEventListener("click", () => {
    document.body.classList.toggle("nav-open");
  });

  const close: any = document.querySelector(".close");

  close.addEventListener("click", () => {
    document.body.classList.toggle("nav-open");
  });

  return (
    <header>
      <div className="wrapper">
        <div className="logo">
          <div className="fname logo-name">RAHIL</div>
          <div className="sname logo-name">ANSARI</div>
        </div>
        <div className="hamburger" aria-label="toggle navigation">
          <FaBars />
        </div>
        <div className="close" aria-label="toggle navigation">
          X
        </div>
      </div>
      <nav>
        <ul className="nav-list">
          <li className="nav-items">
            <a href="/" className="nav__link">
              Home <span></span>
            </a>
          </li>
          <li className="nav-items">
            <a href="/about" className="nav__link">
              About <span></span>
            </a>
          </li>
          <li className="nav-items">
            <a href="/projects" className="nav__link">
              Projects <span></span>
            </a>
          </li>
          <li className="nav-items">
            <a href="/support" className="nav__link">
              Support <span></span>
            </a>
          </li>
          <li className="nav-items">
            <a href="/contact" className="nav__link">
              Contact <span></span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
