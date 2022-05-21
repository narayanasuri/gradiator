import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${props => (props.theme === "dark" ? "#1f2029" : "#FFF")};
    color: ${props => (props.theme === "dark" ? "#FFF" : "#000")};
  }

  h1,h2,h3,h4,h5,h6,p,a,span {
    margin: 0;
    padding: 0;
  }
`;

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <GlobalStyle theme="light" />
      {children}
    </React.Fragment>
  );
}
