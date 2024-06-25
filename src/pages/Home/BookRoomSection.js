import { Col, Row } from "antd";

import React from "react";
import RoomCard from "components/RoomCard/RoomCard";
import styled from "styled-components";

const BookRoomSection = ({openModal}) => {
  return (
    <Wrapper>
      <Title>Booking Ruangan</Title>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={8} lg={6} xl={4} onClick={openModal} >
          <RoomCard />
        </Col>
        <Col xs={24} sm={24} md={8} lg={6} xl={4}>
          <RoomCard />
        </Col>
        <Col xs={24} sm={24} md={8} lg={6} xl={4}>
          <RoomCard />
        </Col>
        <Col xs={24} sm={24} md={8} lg={6} xl={4}>
          <RoomCard />
        </Col>
        <Col xs={24} sm={24} md={8} lg={6} xl={4}>
          <RoomCard />
        </Col>
        <Col xs={24} sm={24} md={8} lg={6} xl={4}>
          <RoomCard />
        </Col>
        <Col xs={24} sm={24} md={8} lg={6} xl={4}>
          <RoomCard />
        </Col>
        <Col xs={24} sm={24} md={8} lg={6} xl={4}>
          <RoomCard />
        </Col>
        <Col xs={24} sm={24} md={8} lg={6} xl={4}>
          <RoomCard />
        </Col>
        <Col xs={24} sm={24} md={8} lg={6} xl={4}>
          <RoomCard />
        </Col>
        <Col xs={24} sm={24} md={8} lg={6} xl={4}>
          <RoomCard />
        </Col>
      </Row>
    </Wrapper>
  );
};

export default BookRoomSection;

const Wrapper = styled.div`
  margin: 0 80px;
  margin-top: 32px;
  @media screen and (max-width: 768px) {
    margin: 12px 24px;
  }
`;

const Title = styled.p`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 16px;
  @media screen and (max-width: 768px) {
    font-size: 26px;
  }
`;
