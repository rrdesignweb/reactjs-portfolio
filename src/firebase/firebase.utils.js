import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyAtgL5pnw3kQpfwkVkyC8SVBfNzyYqHcrA",
  authDomain: "rrichardson-portfolio.firebaseapp.com",
  databaseURL: "https://rrichardson-portfolio.firebaseio.com",
  projectId: "rrichardson-portfolio",
  storageBucket: "rrichardson-portfolio.appspot.com",
  messagingSenderId: "658779145353",
  appId: "1:658779145353:web:280fc5778aca1f70d93258",
  measurementId: "G-DJQEQD2K2H"
};

firebase.initializeApp(config);

export const convertPortfolioSnapshotToMap = portfolio => {
  const transformedPortfolio = portfolio.docs.map(doc => {
    const { title, description, duties, imageURL, tech, links } = doc.data();
    return {
      id: doc.id,
      title,
      description,
      duties,
      imageURL,
      tech,
      links
    };
  });
  return transformedPortfolio.reduce((accumulator, portfolio) => {
    accumulator[portfolio.title.toLowerCase()] = portfolio;
    return accumulator;
  }, {});
};

export const firestore = firebase.firestore();
