import "./App.css";
import React, { useState } from "react";

import Header from "./components/header/Header";
import Main from "./components/main/Main";
import { Subscribe } from "./components/Subscribe";
import { Footer } from "./components/footer";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isOverflow, setIsOverflow] = useState(false);

  return (
    <div>dfihgfh</div>
    // <div
    //   className="App"
    //   style={{
    //     overflow: `${isLoading === false || isOverflow ? "hidden" : "auto"}`,
    //     maxHeight: `${isLoading === false || isOverflow ? "100vh" : "100%"}`,
    //   }}
    // >
    //   <div className={isOverflow ? "overflow" : ""}></div>
    //   <div
    //     className="lds-loader"
    //     style={{ display: `${isLoading === false ? "flex" : "none"}` }}
    //   >
    //     <span className="loaderSpan">Loading data ...</span>
    //   </div>
    //   <div>
    //     <Header setIsOverflow={setIsOverflow} />
    //     <Main setIsLoading={setIsLoading} />
    //     <Subscribe />
    //     <Footer />
    //   </div>
    // </div>
  );
};

export default App;
