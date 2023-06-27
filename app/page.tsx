import Image from "next/image";
import { FaEnvelopeOpen, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

import Link from "next/link";

export default function Home() {
  return (
    <div className="hero">
      <Image className="hero-image" src="https://media2.giphy.com/media/R03zWv5p1oNSQd91EP/giphy.gif" alt="gif-image" width="480" height="480" />
      <div className="dev-name">RAHIL ANSARI</div>
      <div className="dev-title">SOFTWARE ENGINEER</div>
      <div className="btn">
        <Link className="resume" href="./assets/files/hello.pdf.txt" download>
          My Resume
        </Link>
      </div>

      <ul className="sma">
        <li>
          <Link href="https://github.com/rahilansari261" target="_blank">
            <FaGithub />
          </Link>
        </li>
        <li>
          <Link href="https://www.instagram.com/rahilansariii/" target="_blank">
            <FaInstagram />
          </Link>
        </li>
        <li>
          <Link href="https://in.linkedin.com/in/rahil-raza-ansari-34712356" target="_blank">
            <FaLinkedin />
          </Link>
        </li>
        <li>
          <Link href="https://twitter.com/rahilansari261?t=8VYMXfX8HVQ2XE-7puFoNQ&s=08" target="_blank">
            <FaTwitter />
          </Link>
        </li>
        <li>
          <Link href="mailto: rahilansari261@gmail.com" target="_blank">
            <FaEnvelopeOpen />
          </Link>
        </li>
      </ul>
    </div>
  );
}
