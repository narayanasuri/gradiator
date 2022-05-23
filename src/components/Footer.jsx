import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
  position: absolute;
  bottom: 0;
  background-color: #f3f3f3;
  height: 5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: rgb(119, 119, 119);
    font-size: 0.813rem;
    font-weight: 400;
  }

  a {
    font-weight: 600;
    text-decoration: none;
    color: rgb(119, 119, 119);
    &:hover {
      text-decoration: underline;
      color: rgb(119, 119, 119);
    }
  }
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <p>
        Created by{" "}
        <a
          href="https://narayanasuri.github.io/"
          target="_blank"
          rel="noreferrer"
        >
          Narayana Suri
        </a>
      </p>
    </FooterWrapper>
  );
}
