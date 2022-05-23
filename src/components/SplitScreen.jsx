import React from "react";
import styled from "styled-components";

const SplitScreenWrapper = styled.div`
  @media screen and (min-width: 320px) and (max-width: 768px) {
    padding: 1rem;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;

    > div {
      width: 50%;
    }
  }
`;

export default function SplitScreen({ padding, children }) {
  return (
    <SplitScreenWrapper style={{ padding: padding }}>
      {children}
    </SplitScreenWrapper>
  );
}
