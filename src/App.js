import React from "react";

import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";

import { Header } from "components/Header";

import { GlobalStyle, theme } from "./styles";

const App = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Normalize />
    <GlobalStyle />
    <Header />
    {children}
  </ThemeProvider>
);

export default App;
