import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
  padding: 2rem 0;
`;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 4.688rem;
    height: auto;
  }
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
      <FlexBox>
        <img src="/blob.svg" alt="Gradiator Logo" />
        <Title>Gradiator</Title>
      </FlexBox>
      <SubTitle>Create stunning gradients for your app.</SubTitle>
    </Wrapper>
  );
}
