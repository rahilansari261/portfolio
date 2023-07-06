import { FaEnvelope, FaEnvelopeOpen, FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center m-[50px]">
      <Image className="max-w-full h-[300px] hue-rotate-[100deg]" src="/assets/images/contact.webp" alt="gif-image" />

      <a className="text-[90px] text-black" href="mailto: rahilansari261@gmail.com" target="_blank">
        <FaEnvelope />
      </a>
      <p className="text-black bg-neutral-100 font-normal tracking-[2px] text-xs mb-2.5 px-[5px] py-0.5">Let&apos;s talk!</p>

      <ul className="w-[300px] flex justify-between mx-0 my-2.5 list-none">
        <li>
          <a className="no-underline text-3xl text-black" href="https://github.com/rahilansari261" target="_blank">
            <FaGithub />
          </a>
        </li>

        <li>
          <a className="no-underline text-3xl text-black" href="https://in.linkedin.com/in/rahil-raza-ansari-34712356" target="_blank">
            <FaLinkedin />
          </a>
        </li>

        <li>
          <a className="no-underline text-3xl text-black" href="mailto: rahilansari261@gmail.com" target="_blank">
            <FaEnvelopeOpen />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
