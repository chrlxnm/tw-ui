import { ButtonPrimary } from "components/Button";
import { ReactComponent as Clock } from "assets/icons/clock.svg";
import React from "react";
import { ReactComponent as Users } from "assets/icons/users.svg";
import { formatDateWithDayName } from "utils";
import styled from "styled-components";

const Card = ({ data, openModal }) => {
  return (
    <Wrapper>
      <LeftWrapper>
        <ContentWrapper>
          <Image src={data?.images?.[0]?.url} alt="photo" />
          <TitleWrapper>
            <Date>{formatDateWithDayName(data?.date)}</Date>
            <Title>{data?.name || "-"}</Title>
            <JoinedDesc>
              {data?.participants || "0"} orang sudah mendaftar
            </JoinedDesc>
          </TitleWrapper>
        </ContentWrapper>
        <BadgeWrapper>
          <GreyBadge>
            <Users />
            Kuota {data?.quota || "0"} orang
          </GreyBadge>
          <GreyBadge>
            <Clock />
            {data?.time || "-"}
          </GreyBadge>
        </BadgeWrapper>
      </LeftWrapper>
      <RightWrapper>
        <ButtonPrimary onClick={openModal}>Join Class</ButtonPrimary>
      </RightWrapper>
    </Wrapper>
  );
};

export default Card;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid #d8d8d8;
  @media screen and (max-width: 768px) {
    display: grid;
    gap: 12px;
    justify-content: unset;
  }
`;

const LeftWrapper = styled.div`
  display: grid;
  gap: 8px;
`;

const RightWrapper = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    button {
      width: 50%;
    }
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 8px;
  @media screen and (max-width: 768px) {
    display: grid;
  }
`;

const Image = styled.img`
  border-radius: 8px;
  width: 160px;
  aspect-ratio: 2 / 1;
  height: auto;
  object-fit: cover;
  margin-bottom: 1px;
`;

const TitleWrapper = styled.div`
  gap: 8px;
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: 600;
`;

const Date = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: #1e1e1e;
  text-transform: uppercase;
`;

const JoinedDesc = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: #1e1e1e;
  font-style: italic;
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
  display: flex;
  align-items: center;
  gap: 8px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
