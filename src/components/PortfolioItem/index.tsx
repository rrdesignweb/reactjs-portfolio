import React from "react";
import "./index.scss";

export interface PropTypes {
  title: string;
  description: string;
  duties: string[];
  tech: string[];
  links: any[];
  imageURL: string
}

const PortfolioItem: React.FC<PropTypes> = ({
  title,
  description,
  duties,
  tech,
  links,
  imageURL,
}) => {
  return (
    <div className="PortfolioItem">
      <div className="img-wrapper">
        <div className="background-image" style={{ backgroundImage: `url(${imageURL})` }} />
      </div>
      <h3 className="title">{title}</h3>
      <p className="description">{description}</p>
      {duties ? (
        <div className="duties">
          {duties.map((duty, index) => (
            <div className="duties-item" key={index}>
              <div className="list-icon">
                <i
                  className="fa fa-angle-right"
                  aria-hidden="true"
                  role="presentation"
                ></i>
              </div>
              <div className="item">{duty}</div>
            </div>
          ))}
        </div>
      ) : null}
      <div className="portfolio-item-footer">
        {tech ? (
          <ul className="tech">
            {tech.map((tech, index) => (
              <li key={index}>{tech} </li>
            ))}
          </ul>
        ) : null}

        {links ? (
          <div className="link-container">
            {Object.values(links).map((link, index) => (
              <div key={index}>
                <span>
                  <i
                    className="fa fa-link"
                    aria-hidden="true"
                    role="presentation"
                  ></i>
                  &nbsp;
                </span>

                <a
                  className="link"
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.linkName}
                </a>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default PortfolioItem;
