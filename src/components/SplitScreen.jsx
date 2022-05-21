import React from "react";
import styled from "styled-components";

const SplitScreenWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  > div {
    width: 50%;
  }
`;

export default function SplitScreen({ padding, children }) {
  return (
    <SplitScreenWrapper style={{ padding: padding }}>
      {children}
    </SplitScreenWrapper>
  );
}
