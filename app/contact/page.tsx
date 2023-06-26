import { FaEnvelope, FaEnvelopeOpen, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="hero">
      <img className="hero-image" src="./assets/images/contact.webp" alt="gif-image" />

      <a className="contact-mail" href="mailto: rahilansari261@gmail.com" target="_blank">
        <FaEnvelope />
      </a>
      <p className="lets-talk">Let's talk!</p>

      <ul className="sma">
        <li>
          <a href="https://github.com/rahilansari261" target="_blank">
            <FaGithub />
          </a>
        </li>

        <li>
          <a href="https://in.linkedin.com/in/rahil-raza-ansari-34712356" target="_blank">
            <FaLinkedin />
          </a>
        </li>

        <li>
          <a href="mailto: rahilansari261@gmail.com" target="_blank">
            <FaEnvelopeOpen />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
