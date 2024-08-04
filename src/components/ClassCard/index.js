import { ButtonPrimary } from "components/Button";
import { ReactComponent as Clock } from "assets/icons/clock.svg";
import React from "react";
import { ReactComponent as Users } from "assets/icons/users.svg";
import { formatDateWithDayName } from "utils";
import styled from "styled-components";

const ClassCard = ({ openModal, data }) => {
  return (
    <Wrapper>
      <Image alt="image" src={data?.images?.[0]?.url} />
      <ContentWrapper>
        <TextDate>{formatDateWithDayName(data?.date)}</TextDate>
        <TextTitle>{data?.name}</TextTitle>
        <BadgeWrapper>
          <Badge>
            <Users />
            Kuota {data?.quota} orang
          </Badge>
          <Badge>
            <Clock />
            {data?.time}
          </Badge>
        </BadgeWrapper>
        {data?.participants < data?.quota ? (
          <div className="grid gap-[8px]">
            <JoinedText>
              {data?.participants || 0} orang sudah mendaftar
            </JoinedText>
            <ButtonPrimary
              className="mt-[16px]"
              onClick={() => openModal(data)}
            >
              Join Class
            </ButtonPrimary>
          </div>
        ) : (
          <div className="grid gap-[8px]">
            <FullText>
              Kuota sudah habis. Bergabunglah ke dalam daftar tunggu.
            </FullText>
            <ButtonPrimary className="mt-[16px]">
              Join Waiting List
            </ButtonPrimary>
          </div>
        )}
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

  @media screen and (max-width: 768px) {
    aspect-ratio: 7/4;
    height: auto;
  }
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
  min-height: 35px;
  padding: 7px 12px 7px 12px;
  gap: 8px;
  border-radius: 8px;
  background: #f2f2f2;
  color: #535353;
  width: fit-content;

  @media only screen and (max-width: 480px) {
    font-size: 12px;
  }
`;

const JoinedText = styled.p`
  font-size: 14px;
  font-style: italic;
  font-weight: 400;
  color: #535353;
`;

const FullText = styled.p`
  font-size: 14px;
  font-style: italic;
  font-weight: 400;
  color: red;
`;

const ContentWrapper = styled.div`
  display: grid;
  gap: 8px;
  padding: 20px;
`;
