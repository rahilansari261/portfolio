// import Image from "next/image";

import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="hero">
      <img className="hero-image" src="https://media2.giphy.com/media/R03zWv5p1oNSQd91EP/giphy.gif" alt="gif-image" />
      <div className="dev-name">RAHIL ANSARI</div>
      <div className="dev-title">SOFTWARE ENGINEER</div>
      <div className="btn">
        <a className="resume" href="./assets/files/hello.pdf.txt" download>
          My Resume
        </a>
      </div>

      <ul className="sma">
        <li>
          <a href="https://github.com/rahilansari261" target="_blank">
            <i className="fa fa-github"></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/rahilansariii/" target="_blank">
            <i className="fa fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="https://in.linkedin.com/in/rahil-raza-ansari-34712356" target="_blank">
            <i className="fa fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/rahilansari261?t=8VYMXfX8HVQ2XE-7puFoNQ&s=08" target="_blank">
            <i className="fa fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="mailto: rahilansari261@gmail.com" target="_blank">
            <i className="fa fa-envelope-open"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}
