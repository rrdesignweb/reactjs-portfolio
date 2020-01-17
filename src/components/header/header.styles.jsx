import styled from "styled-components";
import backgroundImage from "../../assets/bg-melbourne.jpg";

export const AppLogo = styled.img`
    height: 75vmin;
    pointer-events: none;
`;

export const AppHeader = styled.header`
    background: url(${backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`;

  