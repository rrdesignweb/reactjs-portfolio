import React, { useEffect, useReducer, useState } from "react";
import PortfolioItem from "../../components/PortfolioItem";
import "./index.scss";

import {
  firestore,
  convertPortfolioSnapshotToMap,
} from "../../firebase/firebase.utils";

import Spinner from "../../components/Spinner";

//Init state
const INITIAL_STATE = {
  portfolio: [],
};

//Reducer
const portfolioReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "UPDATE_PORTFOLIO":
      return {
        ...state,
        portfolio: action.payload,
      };
    default:
      return state;
  }
};

//Action
const updatePortfolio = (portfolioKeys) => ({
  type: "UPDATE_PORTFOLIO",
  payload: portfolioKeys,
});

const Portfolio = () => {
  const [loading, setLoading] = useState(true);
  const [state, dispatch] = useReducer(portfolioReducer, INITIAL_STATE);
  const { portfolio } = state;

  useEffect(() => {
    const portfolioRef = firestore.collection("portfolio");
    portfolioRef.onSnapshot(async (snapshot) => {
      const portfolioKeys = convertPortfolioSnapshotToMap(snapshot);
      const portfolioObjToMap = Object.keys(portfolioKeys)
        .map((key) => portfolioKeys[key])
        .sort((x, y) => y.date - x.date);
      dispatch(updatePortfolio(portfolioObjToMap));
      setLoading(false);
    });
  }, []);

  return (
    <div className="PortfolioWrapper">
      <div className="content-block">
        <h2>Work Highlights</h2>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        portfolio &&
        portfolio.map(({ id, ...props }) => (
          <PortfolioItem key={id} {...props} />
        ))
      )}
    </div>
  );
};

export default Portfolio;
