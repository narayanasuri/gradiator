import React from "react";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import Footer from "./Footer";

const GlobalStyle = createGlobalStyle`
  html, body, #___gatsby, #gatsby-focus-wrapper {
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: ${props => (props.theme === "dark" ? "#1f2029" : "#FFF")};
    color: ${props => (props.theme === "dark" ? "#FFF" : "#000")};
    font-family: 'Inter', 'Helvetica', 'Arial', 'sans-serif';
  }

  h1,h2,h3,h4,h5,h6,p,a,span {
    margin: 0;
    padding: 0;
    letter-spacing: -0.05rem;
  }
`;

const Content = styled.div`
  min-height: 100%;
`;

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <GlobalStyle theme="light" />
      <Content>{children}</Content>
      <Footer />
    </React.Fragment>
  );
}
