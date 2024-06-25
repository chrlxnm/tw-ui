import BannerBG from "../../../assets/images/book-room-img.svg";
import { ButtonPrimary } from "components/Button";
import React from "react";
import styled from "styled-components";

const BookRoomBanner = () => {
  return (
    <Wrapper>
      <BannerTextWrapper>
        <Title>Temukan dan Pesan Ruangan dengan Mudah!</Title>
        <Description>
          Pesan ruangan untuk semua acara Anda dengan mudah di Telkom Wellness
          Portal. Temukan, pilih, dan pesan ruangan dalam hitungan detik. Mulai
          sekarang!
        </Description>

        <ButtonPrimary className="w-fit">Book a Room</ButtonPrimary>
      </BannerTextWrapper>
    </Wrapper>
  );
};

export default BookRoomBanner;

const Wrapper = styled.div`
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.7),
      rgba(255, 255, 255, 0.3)
    ),
    url(${BannerBG});
  background-size: cover;
  background-position: center;
  border-radius: 16px;
  height: 330px;
  padding: 16px;
  display: grid;
  gap: 16px;
  align-items: center;
  align-content: center;
  justify-items: start;
  @media screen and (max-width: 768px) {
    padding: 12px;
    height: 300px;
    margin: 0 24px;
  }
  @media only screen and (max-width: 992px) {
    height: 350px;
  }
  @media screen and (max-width: 480px) {
    margin: 0 24px;
    height: 250px;
  }
`;

const BannerTextWrapper = styled.div`
  display: grid;
  padding: 24px;
  gap: 16px;
  @media screen and (max-width: 768px) {
    padding: 12px;
  }
  @media only screen and (max-width: 992px) {
    padding: 16px;
  }
`;

const Title = styled.p`
  font-size: 22px;
  font-weight: 700;
  color: #ffffff;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
  @media only screen and (max-width: 992px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;
const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #ffffff;
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
  @media only screen and (max-width: 992px) {
    font-size: 14px;
  }

  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;
