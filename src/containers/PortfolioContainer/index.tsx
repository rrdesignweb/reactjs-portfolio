//React + Pkgs
import React, { useEffect, useReducer, useState } from "react";

//Components
import PortfolioItem from "../../components/PortfolioItem";
import Spinner from "../../components/Spinner";
import Heading from "../../components/Heading";

//Styles
import { StyledPortfolioContainer } from "./styles";
import { StyledContentBlock } from "../../styles/mixins";
import { IPortfolioItem } from "../../components/PortfolioItem"

import {
  firestore,
  convertPortfolioSnapshotToMap,
} from "../../firebase/firebase.utils";


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

const PortfolioContainer = () => {
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
    <StyledPortfolioContainer>
      <StyledContentBlock>
        <Heading title="Work Highlights" level="h2" />
      </StyledContentBlock>
      {loading ? (
        <Spinner />
      ) : (
        portfolio &&
        portfolio.map((props: IPortfolioItem, idx) => (
          <PortfolioItem key={idx} {...props} />
        ))
      )}
    </StyledPortfolioContainer >
  );
};

export default PortfolioContainer;
