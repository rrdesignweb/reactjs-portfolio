import { createSelector } from "reselect";

const selectPortfolio = state => state.portfolio;

export const selectPortfolioData = createSelector(
  [selectPortfolio],
  portfolio => portfolio.portfolio
);
  
export const selectPortfolioPreview = createSelector(
  [selectPortfolioData],
  portfolio =>
  portfolio ? Object.keys(portfolio).map(key => portfolio[key]) : []
);