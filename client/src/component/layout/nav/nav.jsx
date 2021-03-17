import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Guest from "./guest";
function Navbar() {
  const [harmburger, setharmburger] = useState(false);

  const handleHarmbuger = () => {
    if (harmburger) {
      setharmburger(false);
    } else {
      setharmburger(true);
    }
  };
  return (
    <header className="container">
      <nav className="nav">
        <div className="harmburger" onClick={handleHarmbuger}>
          {harmburger ? (
            <FontAwesomeIcon icon={faTimes} size="2x" />
          ) : (
            <FontAwesomeIcon icon={faBars} size="2x" />
          )}
        </div>
        <div className="logo">
          <span>Linked</span>
          <FontAwesomeIcon icon={faLinkedin} />
        </div>
        <>{harmburger ? <h1>hii</h1> : <Guest />}</>
      </nav>
    </header>
  );
}

export default Navbar;
