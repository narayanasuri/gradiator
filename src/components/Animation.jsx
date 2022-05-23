import React from "react";
import styled from "styled-components";

const FieldSet = styled.div`
  margin-bottom: 1rem;
  > p:first-child {
    font-weight: 800;
    letter-spacing: -0.016rem;
    margin-bottom: 0.35rem;
  }
  > p:nth-child(2) {
    color: #7d7c83;
  }
`;

export default function Animation() {
  return (
    <FieldSet>
      <p>Animation</p>
      <p>✨ Coming soon ✨</p>
    </FieldSet>
  );
}
