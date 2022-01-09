import React, { useState } from "react";
import ProfileImg from "../../assets/me.jpg";
import "./index.scss";

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="Sidebar">
      <div
        className="hamburger-button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <i className={`fa ${isMenuOpen ? "fa-times" : "fa-bars"}`} aria-hidden="true" role="button"></i>
      </div>
      <div className={`menu-overlay ${isMenuOpen ? "visible" : ""}`}  onClick={() => setIsMenuOpen(!isMenuOpen)}/>
      <div className={`menu ${isMenuOpen ? "open" : ""}`}>
        <div className="contact-details">
          <img className="profile-img" src={ProfileImg} alt="Profile" />
          <div className="primary">CONTACT DETAILS:</div>
          <div>
            <span className="highlight">E</span> / RR.DESIGNWEB@GMAIL.COM
          </div>
          <div>
            <span className="highlight">P</span> / +61 434 401 326
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
