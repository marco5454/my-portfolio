import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import "../../Components/LASTFOOTER/style.css";

const LastFooter = () => {
  return (
    <div className="lastfooter-wrapper">
      <div className="copyright-icon">
        <i>
          <FontAwesomeIcon icon={faCopyright} />
        </i>
        <p>{""} 2023 Lagonoy, Camarines Sur PH, All rights reserved. </p>
      </div>
    </div>
  );
};

export default LastFooter;
