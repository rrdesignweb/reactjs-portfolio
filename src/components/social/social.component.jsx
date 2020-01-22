import React from "react";
import { SocialContainer, UnorderedList, List } from "./social.styles";

const Social = () => {
  return (
    <SocialContainer>
      <UnorderedList>
        <List>
          <a
            href="https://github.com/rrdesignweb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-github"></i>
          </a>
        </List>
        <List>
          <a
            href="https://au.linkedin.com/in/rowan-richardson-bb285747"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-linkedin"></i>
          </a>
        </List>
        <List>
          <a
            href="https://stackoverflow.com/users/2277245/roshambo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-stack-overflow"></i>
          </a>
        </List>
        <List>
          <a
            href="https://codepen.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-1x fa fa-codepen"></i>
          </a>
        </List>
      </UnorderedList>
    </SocialContainer>
  );
};

export default Social;
