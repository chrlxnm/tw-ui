import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";

import Chip from "components/Chip/Chip";
import HistoryCard from "./HistoryCard";
import Tab from "./Tab";
import styled from "styled-components";

const History = () => {
  const [section, setSection] = useState("class");
  const [status, setStatus] = useState("all");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);
  
  return (
    <Wrapper>
      <Title>Riwayat Booking</Title>
      <Tab section={section} setSection={setSection} />
      <ChipWrapper>
        <Chip
          label={"Semua"}
          active={status === "all"}
          onClick={() => setStatus("all")}
        />
        <Chip
          label={"Dibooking"}
          active={status === "booked"}
          onClick={() => setStatus("booked")}
        />
        <Chip
          label={"Menunggu Konfirmasi"}
          active={status === "waitingforconfirm"}
          onClick={() => setStatus("waitingforconfirm")}
        />
        <Chip
          label={"Sedang berlangsung"}
          active={status === "inprogress"}
          onClick={() => setStatus("inprogress")}
        />
        <Chip
          label={"Selesai"}
          active={status === "done"}
          onClick={() => setStatus("done")}
        />
        <Chip
          label={"Cancel"}
          active={status === "cancel"}
          onClick={() => setStatus("cancel")}
        />
      </ChipWrapper>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <HistoryCard></HistoryCard>
        </Col>
        <Col span={24}>
          <HistoryCard></HistoryCard>
        </Col>
        <Col span={24}>
          <HistoryCard></HistoryCard>
        </Col>
        <Col span={24}>
          <HistoryCard></HistoryCard>
        </Col>
        <Col span={24}>
          <HistoryCard></HistoryCard>
        </Col>
        <Col span={24}>
          <HistoryCard></HistoryCard>
        </Col>
        <Col span={24}>
          <HistoryCard></HistoryCard>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default History;

const ChipWrapper = styled.div`
  max-width: 100%;
  overflow: auto;
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
  text-wrap: nowrap;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
`;

const Wrapper = styled.div`
  padding: 40px 80px;
  margin-top: 100px;
  @media screen and (max-width: 768px) {
    margin-top: 58px;
    padding: 24px;
  }
`;

const Title = styled.p`
  font-size: 32px;
  font-weight: 700;
  color: #000000;
`;
