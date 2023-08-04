import React from "react";
import "../../Components/NAV/style.css";
import "../../Components/EDUCATION/Education";

const Nav = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <div className="brand-name">
          <h1>My Portfolio</h1>
        </div>
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
    </nav>
  );
};

export default Nav;
