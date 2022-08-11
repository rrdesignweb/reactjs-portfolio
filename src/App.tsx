//React + Pkgs
import React from "react";
import styled, { ThemeProvider } from "styled-components";

//Styles
import { theme, GlobalStyle } from "./styles/global";
import { layer } from "./styles/mixins";

//Containers
import PortfolioContainer from "./containers/PortfolioContainer";

//Components
import Header from "./components/Header";
import SocialIcons from "./components/SocialIcons";
import Footer from "./components/Footer";
import About from "./components/About";

//Hooks
import { useScrollHandler } from "./hooks";

//Styles
const StyledApp = styled.div``;
const StyledTopNavBar = styled.div`
    transition: all 0.25s ease-in-out;
    &.scroll-fixed {
        transition: all 0.25s ease-in-out;
        background: rgba(255, 255, 255, 0.95);
        position: fixed;
        top: 0;
        width: 100%;
        height: 83px;
        z-index: ${layer["top-nav-bar"]};
    }
`;

const App = () => {
  const scroll = useScrollHandler();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyledApp>
        <StyledTopNavBar className={!scroll ? "scroll-fixed" : ""} />
        <Header />
        <SocialIcons />
        <About />
        <PortfolioContainer />
        <Footer />
      </StyledApp>
    </ThemeProvider>
  );
};

export default App;
