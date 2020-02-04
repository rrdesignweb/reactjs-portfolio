import React, { useEffect, useReducer, useState } from "react";
import { PortfolioWrapper } from "./portfolio.styles";
import PortfolioItem from "../../components/portfolio-item/portfolio-item.component";

import {
  firestore,
  convertPortfolioSnapshotToMap
} from "../../firebase/firebase.utils";

import WithSpinner from "../../components/with-spinner/with-spinner.component";

//Simplify component state by using useReducer
const INITIAL_STATE = {
  portfolio: []
};

const portfolioReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "UPDATE_PORTFOLIO":
      return {
        ...state,
        portfolio: action.payload
      };
    default:
      return state;
  }
};

const updatePortfolio = portfolioKeys => ({
  type: "UPDATE_PORTFOLIO",
  payload: portfolioKeys
});

const Portfolio = () => {
  const [loading, setLoading] = useState(true);
  const [state, dispatch] = useReducer(portfolioReducer, INITIAL_STATE);
  const { portfolio } = state;

  useEffect(() => {
    const portfolioRef = firestore.collection("portfolio");
    portfolioRef.onSnapshot(async snapshot => {
      const portfolioKeys = convertPortfolioSnapshotToMap(snapshot);
      const portfolioObjToMap = Object.keys(portfolioKeys).map(
        key => portfolioKeys[key]
      );
      dispatch(updatePortfolio(portfolioObjToMap));
      setLoading(false);
    });
  }, [portfolio]);

  return (
    <PortfolioWrapper>
      {loading ? (
        <WithSpinner />
      ) : (
        portfolio.map(({ id, ...otherPorfolioProps }) => (
          <PortfolioItem key={id} {...otherPorfolioProps} />
        ))
      )}
    </PortfolioWrapper>
  );
};

export default Portfolio;
