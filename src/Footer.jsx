import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <React.Fragment>
      <footer>
        <p>Copyright © {year}</p>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
