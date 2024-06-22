import { ReactComponent as BUMNLogo } from "../../assets/icons/bumn-logo.svg";
import BannerBG from "../../assets/images/home-banner.jpg";
import { ButtonPrimary } from "components/Button";
import React from 'react'
import styled from 'styled-components';

const BannerSection = () => {
  return (
    <Banner>
      <BumnWrapper>
        <BUMNLogo />
      </BumnWrapper>
      <BannerTextWrapper>
        <BannerTitle>Temukan dan Pesan Ruangan dengan Mudah!</BannerTitle>
        <BannerDescription>
          Pesan ruangan untuk semua acara Anda dengan mudah di Telkom Wellness
          Portal. Temukan, pilih, dan pesan ruangan dalam hitungan detik.
          Mulai sekarang!
        </BannerDescription>
        <ButtonPrimary className="w-fit">
          Join Wellness
        </ButtonPrimary>
      </BannerTextWrapper>
    </Banner>
  )
}

export default BannerSection;



const Banner = styled.div`
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.7),
      rgba(255, 255, 255, 0.3)
    ),
    url(${BannerBG});
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 500px;
  padding: 24px;

  @media screen and (max-width: 768px) {
  height: 300px;
  }
`;

const BumnWrapper = styled.div`
  display: flex;
  justify-content: end;
`;

const BannerTextWrapper = styled.div`
  display: grid;
  width: 50%;
  padding: 36px;
  gap: 16px;
  
  @media screen and (max-width: 768px) {
    width: 70%;
    padding: 12px;
  }
`;

const BannerTitle = styled.div`
  font-size: 36px;
  font-weight: 700;
  color: white;

  @media screen and (max-width: 768px) {
  font-size: 20px;
}
`;

const BannerDescription = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: white;

  @media screen and (max-width: 768px) {
  font-size: 12px;
}
`;
