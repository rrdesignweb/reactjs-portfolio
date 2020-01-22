import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { PortfolioWrapper } from "./portfolio.styles";

import {
  firestore,
  convertPortfolioSnapshotToMap
} from "../../firebase/firebase.utils";

import updatePortfolio from "../../redux/portfolio/portfolio.actions";
import { selectPortfolioPreview } from "../../redux/portfolio/portfolio.selectors";

import PortfolioItem from "../../components/portfolio-item/portfolio-item.component";

class Portfolio extends React.Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updatePortfolio } = this.props;
    const portfolioRef = firestore.collection("portfolio");

    this.unsubscribeFromSnapshot = portfolioRef.onSnapshot(async snapshot => {
      const portfolioKeys = convertPortfolioSnapshotToMap(snapshot);
      updatePortfolio(portfolioKeys);
    });
  }

  render() {
    const { portfolio } = this.props;
    return (
      <PortfolioWrapper>
        {portfolio.map(({ id, ...otherPorfolioProps }) => (
          <PortfolioItem key={id} {...otherPorfolioProps} />
        ))}
      </PortfolioWrapper>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  portfolio: selectPortfolioPreview
});

const mapDispatchToProps = dispatch => ({
  updatePortfolio: portfolioKeys => dispatch(updatePortfolio(portfolioKeys))
});

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
