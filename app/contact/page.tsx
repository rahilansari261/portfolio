import React from "react";

const Contact = () => {
  return (
    <div className="hero">
      <img className="hero-image" src="./assets/images/contact.webp" alt="gif-image" />

      <a className="contact-mail" href="mailto: rahilansari261@gmail.com" target="_blank">
        <i className=" fa fa-envelope" aria-hidden="true"></i>
      </a>
      <p className="lets-talk">Let's talk!</p>

      <ul className="sma">
        <li>
          <a href="https://github.com/rahilansari261" target="_blank">
            <i className="fa fa-github"></i>
          </a>
        </li>

        <li>
          <a href="https://in.linkedin.com/in/rahil-raza-ansari-34712356" target="_blank">
            <i className="fa fa-linkedin"></i>
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
};

export default Contact;
