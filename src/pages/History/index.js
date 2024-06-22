import { Col, Row } from "antd";
import React, { useState } from "react";

import HistoryCard from "./HistoryCard";
import Tab from "./Tab";
import styled from "styled-components";

const History = () => {
  const [section, setSection] = useState('class');
  return (
    <Wrapper>
      <Title>Riwayat Booking</Title>
      <Tab section={section} setSection={setSection} />
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
