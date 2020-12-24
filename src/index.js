import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ApolloClient } from "apollo-client";
import { ApolloLink } from "apollo-link";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloProvider } from "@apollo/react-hooks";
import reportWebVitals from "./reportWebVitals";
import ORBSState from "./contex/orbsData/OrbsState";

import { split } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";

const cache = new InMemoryCache();
const uniswap = new HttpLink({
  uri: "https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2",
});

const balancer = new HttpLink({
  uri: "https://api.thegraph.com/subgraphs/name/balancer-labs/balancer",
});

const client = new ApolloClient({
  cache,
  link: ApolloLink.split(
    (operation) => operation.getContext().clientName === "balancer",
    // the string "third-party" can be anything you want,
    // we will use it in a bit
    balancer, // <= apollo will send to this if clientName is "third-party"
    uniswap // <= otherwise will send to this
  ),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <ORBSState>
        <App />
      </ORBSState>
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
