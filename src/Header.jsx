import React from "react";
import Logo from "./images/logo.png";

function Header() {
  return (
    <React.Fragment>
      <div className="header">
        <h1>
          <img src={Logo} alt="logo" width="65" height="65" className="lo" />
          &nbsp; &nbsp;
          <span className="g">G</span>
          <span className="o">o</span>
          <span className="o">o</span>
          <span className="g">g</span>
          <span className="l">l</span>
          <span className="e">e</span>
          &nbsp;
          <span className="keep">Keep</span>
        </h1>
      </div>
    </React.Fragment>
  );
}

export default Header;
