import React from "react";

const Footer = () => {
  return (
    <footer className="text-center bg-black-200">
      <p className="text-white font-black text-[30px]">Connect with me on</p>
      <ul className="flex justify-center gap-5 mt-3">
        <li>
          <a
            href="https://linkedin.com/in/jobayedsumon"
            target="_blank"
            className="text-[#915EFF] hover:text-white text-[30px]"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/jobayedsumon"
            target="_blank"
            className="text-[#915EFF] hover:text-white text-[30px]"
          >
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a
            href="mailto:jobayedahmedsumon@gmail.com"
            className="text-[#915EFF] hover:text-white text-[30px]"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </li>
        <li>
          <a
            href="https://wa.me/+8801677242853"
            className="text-[#915EFF] hover:text-white text-[30px]"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
        </li>
        <li>
          <a
            href="tel:+8801677242853"
            className="text-[#915EFF] hover:text-white text-[30px]"
          >
            <i className="fas fa-phone"></i>
          </a>
        </li>
      </ul>
      <br />
      <small>
        &copy; {new Date().getFullYear()} Jobayed Sumon. All rights reserved.
      </small>
    </footer>
  );
};

export default Footer;
