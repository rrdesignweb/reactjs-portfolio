import React from "react";
import "./index.scss";

const SocialIcons = () => {
  return (
    <div className="SocialIcons">
      <ul>
        <li>
          <a
            href="https://github.com/rrdesignweb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-github"></i>
          </a>
        </li>
        <li>
          <a
            href="https://au.linkedin.com/in/rowan-richardson-bb285747"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a
            href="https://stackoverflow.com/users/2277245/roshambo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-stack-overflow"></i>
          </a>
        </li>
        <li>
          <a
            href="https://codepen.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-1x fa fa-codepen"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialIcons;
