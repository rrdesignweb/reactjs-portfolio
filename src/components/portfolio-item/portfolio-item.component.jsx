import React from "react";

import {
  ContentContainer,
  DutiesContainer, 
  DutyItem,
  TechContainer,
  ContentFooter,
  ContentTitle,
  Paragraph,
  LinkContainer,
  Image,
  SpanPrimary
} from "./portfolio-item.styles";

import TechItem from "../tech-item/tech-item.component";
import LinkItem from "../link-item/link-item.component";

const PortfolioItem = ({
  title,
  description,
  duties,
  tech,
  links,
  imageURL
}) => {
  return (
    <ContentContainer>
      <Image src={imageURL} alt="portfolio-image" />
      <ContentTitle>{title}</ContentTitle>
      <Paragraph>{description}</Paragraph>
      <DutiesContainer>
        {duties.map((duty, index) => (
          <DutyItem key={index}><i className="fa fa-angle-right"></i>&nbsp;&nbsp;{duty}</DutyItem>
        ))}
      </DutiesContainer>
      <ContentFooter>
        <TechContainer>
          {tech.map((tech, index) => (
            <TechItem key={index} item={tech} />
          ))}
        </TechContainer>
        <LinkContainer>
          <SpanPrimary>
            <i className="fa fa-link"></i>&nbsp;
          </SpanPrimary>
          <LinkItem url={links.url} linkName={links.linkName} />
        </LinkContainer>
      </ContentFooter>
    </ContentContainer>
  );
};

export default PortfolioItem;
