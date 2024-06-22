import { ButtonPrimary } from "components/Button";
import React from "react";
import poundFit from "../../assets/images/poundfit-image.png";
import styled from "styled-components";

const ClassCard = ({openModal}) => {
  return (
    <Wrapper>
      <Image alt="image" src={poundFit} />
      <ContentWrapper>
        <TextDate>Senin, 20 Mei 2024</TextDate>
        <TextTitle>Poundfit</TextTitle>
        <BadgeWrapper>
          <Badge>TES</Badge>
          <Badge>TES</Badge>
        </BadgeWrapper>
        <JoinedText>25 orang sudah mendaftar</JoinedText>
        <ButtonPrimary onClick={()=> openModal()}>Join Class</ButtonPrimary>
      </ContentWrapper>
    </Wrapper>
  );
};

export default ClassCard;

const Wrapper = styled.div`
  width: 100%;
  border-radius: 16px;
  background: white;
  box-shadow: 0px 4px 60px 8px #16396d1a;
  display: grid;
  position: relative;
  &:hover {
    -ms-transform: scale(1.03); /* IE 9 */
    -webkit-transform: scale(1.03); /* Safari 3-8 */
    transform: scale(1.03);
    -webkit-transition: transform 0.6s ease-in;
  }
`;

const Image = styled.img`
  height: 200px;
  width: 100%;
  object-fit: cover;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

const TextDate = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #1e1e1e;
  text-transform: uppercase;
`;

const TextTitle = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: #1e1e1e;
`;

const BadgeWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

const Badge = styled.div`
  display: flex;
  width: fit-content;
  height: 35px;
  padding: 7px 12px 7px 12px;
  gap: 8px;
  border-radius: 8px;
  background: #f2f2f2;
`;

const JoinedText = styled.p`
  font-size: 14px;
  font-style: italic;
  font-weight: 400;
  color: #535353;
`;

const ContentWrapper = styled.div`
  display: grid;
  gap: 8px;
  padding: 20px;
`;
