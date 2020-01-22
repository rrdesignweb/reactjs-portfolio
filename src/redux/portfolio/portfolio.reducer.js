import PortfolioActionTypes from "./portfolio.types";

const INITIAL_STATE = {
  portfolio: []
};

const portfolioReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PortfolioActionTypes.UPDATE_PORTFOLIO:
      return {
        ...state,
        portfolio: action.payload
      };
    default:
      return state;
  }
};

export default portfolioReducer;
