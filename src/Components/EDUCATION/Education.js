import React from "react";
import psuLogo from "../../Components/Images/psu-logo.png";
import "../../Components/EDUCATION/style.css";

const Education = () => {
  return (
    <div className="education-section">
      <div className="logo-university">
        <div className="educational-title">
          <h1>Educational Background</h1>
        </div>

        <div className="education-logo">
          <img src={psuLogo} alt="educational-logo" />
        </div>

        <div className="university-name">
          <h1>Partido State University</h1>
          <p>SAN JUAN BAUTISTA ST., GOA CAMARINES SUR</p>
          <p>PHILIPPINES, 4422</p>
          <p>(054) 871-2090</p>
        </div>
      </div>

      <div className="my-course">
        <div className="course-info">
          <h2>Bachelor of Science in {<br />}Information Technology</h2>
          <h3>College of Arts and Science</h3>
          <p>(2017 - 2021)</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
