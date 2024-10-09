import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <div
          className="d-flex flex-column justify-content-between align-items-center"
          style={{ maxWidth: "1100px" }}
        >
          <h1 className="footer-title">SpaceX Launch Tracker</h1>
          <div className="d-flex justify justify-content-center align-items-center gap-3 mt-3">
            <a
              href="https://www.linkedin.com/in/rusira-jayatilake-0a9b27246/"
              target="_blank"
              className="social-item"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/RusiraJayatilake"
              target="_blank"
              className="social-item"
            >
              <FaGithub />
            </a>
          </div>

          <div
            className="justify-content-center align-items-center mt-3"
            style={{ color: "#fff" }}
          >
            © {new Date().getFullYear()} All rights reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
