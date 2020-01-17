import React from "react";

import {
  ContentContainer,
  TechContainer,
  ContentFooter,
  ContentTitle,
  Paragraph,
  LinkContainer,
  Image,
  SpanPrimary
} from "./portfolio-item.styles";

import TechItem from "../tech-item/tech-item.component";
// import LinkItem from "../link-item/link-item.component";

const PortfolioItem = ({ title, description, tech, links, imageURL }) => {
  return (
    <ContentContainer>
      <Image src={imageURL} alt="portfolio-image" />
      <ContentTitle>{title}</ContentTitle>
      <Paragraph>{description}</Paragraph>
      <ContentFooter>
        <TechContainer>
          {tech.map(tech => (
            <TechItem item={tech} />
          ))}
        </TechContainer>
        <LinkContainer>
          <SpanPrimary>
            <i className="fa fa-link"></i>&nbsp;
          </SpanPrimary>
          {/* {links.map(link => {
              return (<LinkItem url={link.url} linkName={link.linkName} />);
          })} */}
        </LinkContainer>
      </ContentFooter>
    </ContentContainer>
  );
};

export default PortfolioItem;
