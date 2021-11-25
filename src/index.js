import React from "react";
import { ApolloProvider } from "@apollo/client";
import ReactDOM from "react-dom";
import App from "./App";
import { apolloClient } from "./client/apolloClient";
import { BrowserRouter as Router } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ApolloProvider client={apolloClient}>
        <App />
      </ApolloProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
