import "./App.css";
import React, { useState } from "react";

import Header from "./components/header/Header";
import Main from "./components/main/Main";
import { Subscribe } from "./components/Subscribe";
import { Footer } from "./components/footer";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  // position: absolute;
  //   top: 50%;
  //   left: 50%;
  //   transform: translate(-50%, -50%);

  return (
    <div
      className="App"
      style={{
        overflow: `${isLoading === false ? "hidden" : "auto"}`,
        maxHeight: `${isLoading === false ? "100vh" : "100%"}`,
      }}
    >
      <div
        className="lds-loader"
        style={{ display: `${isLoading === false ? "flex" : "none"}` }}
      >
        <span className="loaderSpan">Loading data ...</span>
      </div>
      <Header />
      <Main setIsLoading={setIsLoading} />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default App;
