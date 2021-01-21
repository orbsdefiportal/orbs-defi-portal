import React, { useState } from "react";
import "../../App.css";

import Header from "../header/Header";
import Main from "../main/Main";
import { Subscribe } from "../Subscribe";
import { Footer } from "../footer";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isOverflow, setIsOverflow] = useState(false);

  return (
    <div
      className="App"
      style={{
        overflow: `${isLoading === false || isOverflow ? "hidden" : "auto"}`,
        maxHeight: `${isLoading === false || isOverflow ? "100vh" : "100%"}`,
      }}
    >
      <div className={isOverflow ? "overflow" : ""}></div>
      <div
        className="lds-loader"
        style={{ display: `${isLoading === false ? "flex" : "none"}` }}
      >
        <span className="loaderSpan">Loading data ...</span>
      </div>
      <div>
        <Header setIsOverflow={setIsOverflow} />
        <Main setIsLoading={setIsLoading} />
        <Subscribe />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
