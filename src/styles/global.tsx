//React + Pkgs
import { createGlobalStyle } from 'styled-components'

//Styles
export const theme = {
    primaryGrey: "#333333",
    primaryDark: "#252729",
    secondaryGrey: "#888",
    pGrey: "#6a6a6a",
    solidGrey: "#cccccc",
    highlightColor: "#02a8c5",
    linkColor: "#b7336f",
    linkHover: "#770e3d",
    lightGrey: "#f6f6f6",
}

export const GlobalStyle = createGlobalStyle`
    *,
    *:before,
    *:after {
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        box-sizing: border-box;
        user-select: none;
    }
    html,
    body {
        overflow: auto;
        font-family: "Open Sans", sans-serif;
        font-weight: 300;
        letter-spacing: -0.25px;
        color: ${theme.primaryDark};
        line-height: 1.5em;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-weight: 300;
    }
`;