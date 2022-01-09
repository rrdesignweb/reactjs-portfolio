import firebase from "firebase/app";
import "firebase/firestore";

const FIREBASE_PROJECT_ID = "rrichardson-portfolio";

const config = {
  projectId: FIREBASE_PROJECT_ID,
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

firebase.initializeApp(config);

export const convertPortfolioSnapshotToMap = (portfolio) => {
  const transformedPortfolio = portfolio.docs.map((doc) => {
    const { date, title, description, duties, imageURL, tech, links } = doc.data();
    return {
      id: doc.id,
      date,
      title,
      description,
      duties,
      imageURL,
      tech,
      links,
    };
  });

  return transformedPortfolio.reduce((accumulator, portfolio) => {
    accumulator[portfolio.title.toLowerCase()] = portfolio;
    return accumulator;
  }, {});
};

export const firestore = firebase.firestore();
