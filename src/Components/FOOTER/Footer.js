import React from "react";
import "../../Components/FOOTER/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="name-info">
        <h4>Marco Adote Melgar</h4>
        <p>SANTA MARIA LAGONOY </p>
        <p>CAMARINES SUR</p>
        <p>PHILIPPINES 4425</p>
      </div>

      <div className="quick-links">
        <h3>QUICK LINKS</h3>

        <ul>
          <li>
            <a href="/#">Home</a>
          </li>

          <li>
            <a href="/#">Education</a>
          </li>
          <li>
            <a href="/#">About Me</a>
          </li>
          <li>
            <a href="/#">Contact Me</a>
          </li>
        </ul>
      </div>

      <div className="socials">
        <h3>CONNECT WITH ME</h3>

        <div className="contact-icons">
          <div>
            <i>
              <FontAwesomeIcon icon={faEnvelope} />
            </i>
          </div>

          <div>
            <i>
              <FontAwesomeIcon icon={faPhone} />
            </i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
