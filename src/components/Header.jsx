import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  min-height: 3rem;
  box-shadow: 0 0.375rem 1.5rem 0 rgba(140, 152, 164, 0.125);
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <p>Greatients</p>
    </HeaderWrapper>
  );
}
