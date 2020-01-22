import { combineReducers } from "redux";

import portfolioReducer from "./portfolio/portfolio.reducer";

const rootReducer = combineReducers({
  portfolio: portfolioReducer
});

export default rootReducer;
