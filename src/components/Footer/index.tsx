import React from "react";
import "./index.scss";

const Footer = () => {
  return (
    <footer>
      <span className="copyright">
        &#169;{" "}Copyright {new Date().getFullYear()}
      </span>
      <span>
        <span className="divider">/</span> Rowan Richardson
      </span>
      <span>
        <span className="divider">/ </span>Frontend Developer
      </span>
    </footer>
  );
};

export default Footer;
