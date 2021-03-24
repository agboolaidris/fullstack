import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Client from "./client-navlink/client";
import Guest from "./guest-navlink/guest";

function Navbar() {
  const [harmburger, setharmburger] = useState(false);
  const isAuthenticated = useSelector((state) => state.Auth.isAuthenticated);

  const handleHarmbuger = () => {
    if (harmburger) {
      setharmburger(false);
    } else {
      setharmburger(true);
    }
  };

  return (
    <header className={isAuthenticated ? "header" : ""}>
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
        <ul className={harmburger ? "menu menu-mobile " : " menu"}>
          {!isAuthenticated ? (
            <Guest setharmburger={setharmburger} />
          ) : (
            <Client setharmburger={setharmburger} />
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;