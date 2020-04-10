import React from "react";

import "./Footer.css";

const Footer = (props) => {
  return (
    <div className="footer">
      <div className="footer-social">
        <a href="#">LINK 1</a>
        <a href="#">LINK 2</a>
        <a href="#">LINK 3</a>
      </div>
      <div className="footer-copyright">© Frente Software Development 2020</div>
    </div>
  );
};

export default Footer;
