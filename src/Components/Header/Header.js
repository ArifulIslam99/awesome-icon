import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const loadHome = () =>
  {
    window.location.href = '/';
  }
  return (
    <div className="d-flex justify-content-between mx-5">
      <p onClick={loadHome} className="fs-3 fst-italic font-monospace p-3 fw-bolder">
        icon-awesome
      </p>
      <FontAwesomeIcon icon={faArrowRightToBracket} size="2xl" className="p-3"/>
    
    </div>
  );
};

export default Header;
