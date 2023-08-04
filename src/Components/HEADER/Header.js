import React from "react";
import "../../Components/HEADER/style.css";
import Typical from "react-typical";
import me from "../../Components/Images/meme.png";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="qoutes">
        <h1>
          Hi I am a {""}
          <Typical
            steps={[
              "Full Stack Developer.",
              1000,
              "Team Manager.",
              1000,
              "Senior Migration Specialist.",
              1000,
              "Pianist.",
              1000,
              "Father.",
              1000,
            ]}
            loop={Infinity}
            wrapper="b"
          />
        </h1>
        <p>
          Web design is not just about creating pretty layouts. It's about
          understanding the marketing challenge behind your business. Measuring
          programming progress by lines of code is like measuring aircraft
          building progress by weight. Digital design is like painting, except
          the paint never dries.
        </p>
      </div>

      <div className="me">
        <img src={me} alt="my-profile" />
      </div>
    </div>
  );
};

export default Header;
