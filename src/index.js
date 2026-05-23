import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import {
  ThemeProvider
} from "styled-components";
import App from "./App";
import theme from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyles";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <GlobalStyles />
      <App />
    </BrowserRouter>
  </ThemeProvider>
);
