//React + Pkgs
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faChain } from "@fortawesome/free-solid-svg-icons";

//Styles
import { StyledPortfolioItem, StyledPortfolioBgImage, StyledPortfolioDescription, StyledPortfolioDutiesContainer, StyledPortfolioDutiesIcon, StyledPortfolioDutiesItem, StyledPortfolioDutiesItemText, StyledPortfolioImgWrapper, StyledPortfolioItemFooter, StyledPortfolioItemFooterLinkWrapper, StyledPortfolioItemFooterLinkContainer, StyledPortfolioList, StyledPortfolioListItem, StyledPortfolioParagraph, StyledPortfolioItemFooterLink, StyledPortfolioTitle } from "./styles";
import { theme } from "../../styles/global";


export interface IPortfolioItem {
  title: string;
  description: string;
  duties: string[];
  tech: string[];
  links: any[];
  imageURL: string
}

const PortfolioItem: React.FC<IPortfolioItem> = ({
  title,
  description,
  duties,
  tech,
  links,
  imageURL,
}) => {
  return (
    <StyledPortfolioItem>
      <StyledPortfolioImgWrapper>
        <StyledPortfolioBgImage style={{ backgroundImage: `url(${imageURL})` }} />
      </StyledPortfolioImgWrapper>
      <StyledPortfolioTitle>{title}</StyledPortfolioTitle>
      <StyledPortfolioDescription>{description}</StyledPortfolioDescription>
      {duties ? (
        <StyledPortfolioDutiesContainer>
          {duties.map((duty, index) => (
            <StyledPortfolioDutiesItem key={index}>
              <StyledPortfolioDutiesIcon>
                <FontAwesomeIcon icon={faAngleRight} />
              </StyledPortfolioDutiesIcon>
              <StyledPortfolioDutiesItemText>{duty}</StyledPortfolioDutiesItemText>
            </StyledPortfolioDutiesItem>
          ))}
        </StyledPortfolioDutiesContainer>
      ) : null}
      <StyledPortfolioItemFooter>
        {tech ? (
          <StyledPortfolioList>
            {tech.map((tech, index) => (
              <StyledPortfolioListItem key={index}>{tech} </StyledPortfolioListItem>
            ))}
          </StyledPortfolioList>
        ) : null}

        {links ? (
          <StyledPortfolioItemFooterLinkWrapper>
            {Object.values(links).map((link, index) => (
              <StyledPortfolioItemFooterLinkContainer key={index}>
                <FontAwesomeIcon icon={faChain} color={theme.linkColor} />
                &nbsp;
                <StyledPortfolioItemFooterLink
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.linkName}
                </StyledPortfolioItemFooterLink>
              </StyledPortfolioItemFooterLinkContainer>
            ))}
          </StyledPortfolioItemFooterLinkWrapper>
        ) : null}
      </StyledPortfolioItemFooter>
    </StyledPortfolioItem>
  );
};

export default PortfolioItem;
