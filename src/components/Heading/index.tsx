//React + Pkgs
import React from "react";

//Styles
import { StyledHeading } from "./styles";

export interface IHeading {
    level: string,
    title: string
}

const Heading: React.FC<IHeading> = ({ level, title }) => {
    return (
        <StyledHeading as={level} level={level}>
            {title}
        </StyledHeading>
    )
}

export default Heading;