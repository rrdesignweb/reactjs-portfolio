//React + Pkgs
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

//Styles
import { StyledSocialIcons, StyledSocialIconsList, StyledSocialIconsListItem, StyledSocialIconsLink } from "./styles";


const SocialIcons = () => {
  return (
    <StyledSocialIcons>
      <StyledSocialIconsList>
        <StyledSocialIconsListItem>
          <StyledSocialIconsLink
            href="https://github.com/rrdesignweb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </StyledSocialIconsLink>
        </StyledSocialIconsListItem>
        <StyledSocialIconsListItem>
          <StyledSocialIconsLink
            href="https://au.linkedin.com/in/rowan-richardson-bb285747"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </StyledSocialIconsLink>
        </StyledSocialIconsListItem>
      </StyledSocialIconsList>
    </StyledSocialIcons>
  );
};

export default SocialIcons;
