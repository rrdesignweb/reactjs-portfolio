import PortfolioActionTypes from "./portfolio.types";

const updatePortfolio = portfolioKeys => ({
    type: PortfolioActionTypes.UPDATE_PORTFOLIO,
    payload: portfolioKeys
});

export default updatePortfolio;