import "./style.css";

import { ReactComponent as FacebookIcon } from "assets/icons/facebook.svg";
import { ReactComponent as InstagramIcon } from "assets/icons/instagram.svg";
import { ReactComponent as LinkedinIcon } from "assets/icons/linkedin.svg";
import React from "react";
import { ReactComponent as TwLogo } from "assets/icons/employee-corner-dark.svg";
import { ReactComponent as TwitterIcon } from "assets/icons/twitter.svg";
import { ReactComponent as YoutubeIcon } from "assets/icons/youtube.svg";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const goToPage = (page) => {
    navigate(page, { replace: true });
  };
  return (
    <Wrapper>
      <MenuWrapper>
        <TwLogo className="logo" />
        <MenuItemWrapper>
          <MenuItem>
            <MenuHeader onClick={() => goToPage("/beranda")}>
              Beranda
            </MenuHeader>
            <p onClick={() => goToPage("/beranda#class")}>Sport Class</p>
            <p onClick={() => goToPage("/beranda#room")}>Booking Ruangan</p>
          </MenuItem>
          <MenuItem>
            <MenuHeader onClick={() => goToPage("/riwayat")}>
              History
            </MenuHeader>
            <p onClick={() => goToPage("/riwayat")}>Cek History</p>
          </MenuItem>
        </MenuItemWrapper>
        <MenuItem>
          <MenuHeader>Ikuti Kami</MenuHeader>
          <SocialMediaWrapper>
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
            <YoutubeIcon />
            <LinkedinIcon />
          </SocialMediaWrapper>
        </MenuItem>
      </MenuWrapper>
      <CopyRightWrapper>
        <p>
          © 2020 PT Telkom Indonesia (Persero) Tbk. Hak Cipta Dilindungi
          Undang-Undang
        </p>
        <CopyRight>
          <p>Hubungi Kami</p>
          <p>Syarat & Ketentuan</p>
          <p>Kebijakan & Privasi</p>
        </CopyRight>
      </CopyRightWrapper>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  height: 312px;
  background-color: #25282b;
  padding: 48px 80px 48px 80px;
  color: white;
  display: grid;
  align-content: space-between;
  @media screen and (max-width: 768px) {
    height: auto;
    padding: 24px 24px;
  }
`;

const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    display: grid;
    margin-bottom: 36px;
    & .logo {
      width: 60vw;
      height: auto;
      margin-bottom: 36px;
    }
  }
`;

const MenuItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 25%;
  @media screen and (max-width: 768px) {
    margin-bottom: 36px;
    width: 100%;
    justify-content: space-between;
    flex-direction: unser;
  }
`;

const MenuItem = styled.div`
  display: block;
  p {
    cursor: pointer;
  }
`;

const MenuHeader = styled.p`
  font-weight: 600;
  margin-bottom: 24px;
  cursor: unset;
  @media screen and (max-width: 768px) {
    margin-bottom: 14px;
  }
`;

const SocialMediaWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

const CopyRightWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 2px solid white;
  padding-top: 24px;
  p {
    font-weight: 700;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 36px;
  }
`;

const CopyRight = styled.div`
  display: flex;
  gap: 36px;
  p {
    font-weight: 700;
  }
  @media screen and (max-width: 768px) {
    display: grid;
    gap: 24px;
    order: -1;
  }
`;
