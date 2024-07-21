import { Col, Row, Skeleton } from "antd";

import React from "react";
import RoomCard from "components/RoomCard/RoomCard";
import styled from "styled-components";
import useGetRoom from "./hooks/useGetRoom";

const BookRoomSection = ({ openModal, idRef }) => {
  const { data, loading } = useGetRoom();
  return (
    <Wrapper ref={idRef}>
      <Title>Booking Ruangan</Title>
      {loading ? (
        <Skeleton />
      ) : (
        <Row gutter={[16, 16]}>
          {data?.map((item) => (
            <Col
              xs={24}
              sm={24}
              md={8}
              lg={6}
              xl={4}
              onClick={() => openModal(item)}
            >
              <RoomCard data={item} />
            </Col>
          ))}
        </Row>
      )}
    </Wrapper>
  );
};

export default BookRoomSection;

const Wrapper = styled.section`
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
