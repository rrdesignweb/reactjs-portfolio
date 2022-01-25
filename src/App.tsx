import React from "react";
import "./App.scss";

import Portfolio from "./containers/Portfolio";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import SocialIcons from "./components/SocialIcons";
import Footer from "./components/Footer";
import About from "./components/About";
import { useScrollHandler } from "./hooks";

const App = () => {
  const scroll = useScrollHandler();
  return (
    <div className="App">
      <div className={`top-nav-bar ${!scroll ? "scroll-fixed" : ""} `} />
        <Header />
        <Sidebar />
        <SocialIcons />
        <About />
        <Portfolio />
        <Footer />
    </div>
  );
};

export default App;
