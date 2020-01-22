import React from "react";
import "./App.css";
import Header from "./components/header/header.component";
import Sidebar from "./components/sidebar/sidebar.component";
import Social from "./components/social/social.component";
import Portfolio from "./pages/portfolio/portfolio.component";

const App = () => {
  return (
    <div className="App">
      <Sidebar />
      <Header />
      <Social />
      <Portfolio />
    </div>
  );
};

export default App;
