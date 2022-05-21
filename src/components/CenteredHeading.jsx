import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
  padding: 2rem 0;
`;

const Title = styled.p`
  font-size: 3.125rem;
  font-weight: 800;
  letter-spacing: -0.125rem;
`;

const SubTitle = styled.p`
  font-size: 1.25rem;
  color: #7d7c83;
`;

export default function CenteredHeading() {
  return (
    <Wrapper>
      <Title>Awesome Gradients</Title>
      <SubTitle>Create and export beautiful gradients.</SubTitle>
    </Wrapper>
  );
}
