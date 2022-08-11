import styled from "styled-components";
import { device } from "../../styles/mixins";

export const StyledAboutSection = styled.section`
    padding: 20px 65px;
    @media ${device.medium} { 
        padding: 20px 200px;
    }
`;

