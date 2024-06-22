import { ButtonPrimary } from "components/Button";
import React from "react";
import styled from "styled-components";

const HistoryCard = (props) => {
  return (
    <Wrapper>
      <Item>
        <Title>Poundfit</Title>
        <Date>Senin, 27 Mei 2024</Date>
        <BadgeWrapper>
          <GreyBadge>Kuota 20 orang</GreyBadge>
          <GreyBadge>16.00-17.00</GreyBadge>
        </BadgeWrapper>
      </Item>
      <RightSideWrapper>
        <Badge>Dibooking</Badge>
        <ButtonPrimary>Selesai</ButtonPrimary>
      </RightSideWrapper>
    </Wrapper>
  );
};

export default HistoryCard;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 12px;
  padding: 12px 24px;
  border: 1px solid #00000033;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 18px;
  }
`;

const Badge = styled.div`
  font-weight: 700;
  font-size: 16px;
  padding: 4px 8px;
  border-radius: 4px;
  background: #e9f1fc;
  color: #246ee5;
  height: fit-content;
  width: fit-content;
`;
const BadgeWrapper = styled.div`
  display: flex;
  gap: 12px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
const GreyBadge = styled.div`
  font-size: 14px;
  color: #535353;
  background: #f2f2f2;
  padding: 8px;
  border-radius: 4px;
  height: fit-content;
  width: fit-content;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Item = styled.div`
  display: grid;
  gap: 8px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Title = styled.p`
  font-weight: 700;
  font-size: 24px;
  color: #1e1e1e;
`;

const Date = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: #1e1e1e;
  text-transform: uppercase;
  margin-bottom: 8px;
`;

const RightSideWrapper = styled.div`
  display: grid;
  justify-items: end;
  align-content: space-between;
  button {
    width: 25vw;
  }

  @media screen and (max-width: 768px) {
    justify-items: start;
    gap: 12px;
    width: 100%;
    button {
      width: 100%;
    }
  }
`;
