import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import reportWebVitals from "./reportWebVitals";
import React from "react";
import { HelmetProvider } from "react-helmet-async";
// ----------------------------------------------------------------------

ReactDOM.render(
  <HelmetProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HelmetProvider>,

  document.getElementById("root")
);

reportWebVitals();
