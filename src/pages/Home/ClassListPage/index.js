import { Col, Row } from "antd";
import React, { useState } from "react";

import { ReactComponent as BackIcon } from "../../../assets/icons/back-icon.svg";
import BookRoomBanner from "./RoomBanner";
import Card from "./Card";
import Chip from "components/Chip/Chip";
import { Input } from "components/Input";
import { ReactComponent as SearchIcon } from "assets/icons/search.svg";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ClassListPage = () => {
  const navigate = useNavigate();
  const [time, setTime] = useState("all");
  const goToPage = (page) => {
    navigate(page, { replace: true });
  };
  return (
    <Wrapper>
      <BackWrapper onClick={() => goToPage("/beranda")}>
        <BackIcon className="login-back-icon"></BackIcon>
        <p className="label-back">Kembali</p>
      </BackWrapper>

      <HeaderTextWrapper>
        <HeaderTitle>Sport Classes</HeaderTitle>
        <HeaderDescription>
          Pilihan sport classes yang dapat membantu hidup sehat
        </HeaderDescription>
      </HeaderTextWrapper>
      <Input
        className="my-[16px] w-[40%] sm:w-full"
        size="large"
        placeholder="Cari sport class disini . . ."
        prefix={<SearchIcon />}
      />
      <ChipWrapper>
        <Chip
          label={"Semua"}
          active={time === "all"}
          onClick={() => setTime("all")}
        />
        <Chip
          label={"Hari ini"}
          active={time === "today"}
          onClick={() => setTime("today")}
        />
        <Chip
          label={"Besok"}
          active={time === "tommorow"}
          onClick={() => setTime("tommorow")}
        />
        <Chip
          label={"Minggu ini"}
          active={time === "this_week"}
          onClick={() => setTime("this_week")}
        />
        <Chip
          label={"Bulan ini"}
          active={time === "this_month"}
          onClick={() => setTime("this_month")}
        />
      </ChipWrapper>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={24} lg={16} xl={16} xxl={16}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Col>
        <Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8}>
          <BookRoomBanner />
        </Col>
      </Row>
    </Wrapper>
  );
};

export default ClassListPage;

const Wrapper = styled.div`
  display: grid;
  padding: 24px 80px;
  @media screen and (max-width: 768px) {
    display: grid;
    gap: 8px;
    justify-content: unset;
    padding: 16px;
    .ant-input-affix-wrapper {
      width: 100%;
    }
  }
`;

const ChipWrapper = styled.div`
  max-width: 100%;
  overflow: auto;
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
  text-wrap: nowrap;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

const BackWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 36px;
  align-items: center;
`;

const HeaderTextWrapper = styled.div`
  display: grid;
  gap: 8px;
  @media screen and (max-width: 768px) {
    gap: 4px;
  }
`;

const HeaderTitle = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: #000000;
  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;
const HeaderDescription = styled.div`
  font-size: 20px;
  font-weight: 400;
  color: #535353;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;
