import Image from "next/image";
import {
  FaEnvelopeOpen,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center px-10 py-4">
      <Image
        className="max-w-full hue-rotate-[100deg]"
        src="https://media2.giphy.com/media/R03zWv5p1oNSQd91EP/giphy.gif"
        alt="gif-image"
        width="300"
        height="480"
      />
      <div className="font-black text-[40px] leading-none text-center text-black opacity-0 animate-wiggle w-[300px] pt-2.5">
        RAHIL ANSARI
      </div>
      <div className="text-black text-xs font-normal tracking-[8px] text-center w-[300px] mx-0 my-2.5">
        SOFTWARE ENGINEER
      </div>
      <div className="bg-[#007efc] w-[300px] text-center text-xl cursor-pointer transition-all duration-[0.3s] ease-[ease-in-out] mx-0 my-2.5 p-2.5 rounded-[5px] hover:bg-[#433ec4]">
        <Link
          className="inline-block w-full no-underline text-white"
          href="./assets/files/ResumeRahil-f-1.pdf"
          target="_blank"
          download
        >
          My Resume
        </Link>
      </div>

      <ul className="w-[300px] flex justify-between mx-0 my-2.5 list-none">
        <li>
          <Link
            className="no-underline text-3xl text-black"
            href="https://github.com/rahilansari261"
            target="_blank"
          >
            <FaGithub />
          </Link>
        </li>
        <li>
          <Link
            className="no-underline text-3xl text-black"
            href="https://www.instagram.com/rahilansariii/"
            target="_blank"
          >
            <FaInstagram />
          </Link>
        </li>
        <li>
          <Link
            className="no-underline text-3xl text-black"
            href="https://in.linkedin.com/in/rahil-raza-ansari-34712356"
            target="_blank"
          >
            <FaLinkedin />
          </Link>
        </li>
        <li>
          <Link
            className="no-underline text-3xl text-black"
            href="https://twitter.com/rahilansari261?t=8VYMXfX8HVQ2XE-7puFoNQ&s=08"
            target="_blank"
          >
            <FaTwitter />
          </Link>
        </li>
        <li>
          <Link
            className="no-underline text-3xl text-black"
            href="mailto: rahilansari261@gmail.com"
            target="_blank"
          >
            <FaEnvelopeOpen />
          </Link>
        </li>
      </ul>
    </div>
  );
}
