//React + Pkgs
import React from "react";

//Styles
import { StyledParagraph } from "../../styles/mixins";
import { StyledAboutSection } from "./styles";

//Components
import Heading from "../Heading";

const About = () => {
  return (
    <StyledAboutSection>
      <Heading title="About me" level="h2" />
      <StyledParagraph>
        Hi, my name is Rowan, a Frontend Developer from Melbourne, Australia. I am focussed on delivering
        great user and developer experiences harnessing the best UI practices such as mobile
        first design, semantic layouts, component driven development and accessibility. I use modern frontend
        libraries and workflow tools such as React JS, Redux, Styled Components, SASS, Webpack, NPM / NodeJS and GIT.
      </StyledParagraph>
      <StyledParagraph>
        I am passionate about choosing the best solution for the job at hand and
        learning about best frontend tools and techniques.
      </StyledParagraph>
    </StyledAboutSection>
  );
};

export default About;
