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
<<<<<<< HEAD
          <DutyItem key={index}><i className="fa fa-angle-right"></i>&nbsp;&nbsp;{duty}</DutyItem>
=======
          <DutyItem key={index}>{duty}</DutyItem>
>>>>>>> cf720aa59cb4f59532c5b83c99912073d460de27
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
