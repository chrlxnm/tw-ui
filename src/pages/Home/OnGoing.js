import { ButtonPrimary } from "components/Button";
import React from "react";
import styled from "styled-components";

const OnGoing = () => {
  return (
    <Wrapper>
      <LeftWrapper>
        <Title>Ruangan Senam</Title>
        <Description>sedang berlangsung</Description>
      </LeftWrapper>
      <ButtonPrimary>Selesai</ButtonPrimary>
    </Wrapper>
  );
};

export default OnGoing;

const Wrapper = styled.div`
  margin: 24px 80px;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  border-radius: 12px;
  box-shadow: 0px 15px 50px 8px #0000000f;

  button {
    min-width: 20%;
  }
`;

const LeftWrapper = styled.div`
  display: grid;
`;

const Title = styled.p`
  font-size: 24px;
  font-weight: 600;
`;
const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  text-transform: uppercase;
`;
