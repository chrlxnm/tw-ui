import { Col, Empty, Row, Skeleton } from "antd";
import React, { useEffect, useState } from "react";

import Chip from "components/Chip/Chip";
import HistoryCard from "./HistoryCard";
import Tab from "./Tab";
import styled from "styled-components";
import useGetHistory from "./hooks/useGetHistory";

const History = () => {
  const [params, setParams] = useState({
    nik: localStorage.getItem("nik"),
    status: "all",
    section: "class",
  });

  const onChangeParams = (name, value) => {
    setParams({
      ...params,
      [name]: value,
    });
  };

  const { data, loading } = useGetHistory(params);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <Wrapper>
      <Title>Riwayat Booking</Title>
      <Tab
        section={params?.section}
        setSection={(e) => onChangeParams("section", e)}
      />
      <ChipWrapper>
        <Chip
          label={"Semua"}
          active={params.status === "all"}
          onClick={() => onChangeParams("status", "all")}
        />
        <Chip
          label={"Dibooking"}
          active={params.status === "approved"}
          onClick={() => onChangeParams("status", "approved")}
        />
        <Chip
          label={"Menunggu Konfirmasi"}
          active={params.status === "submitted"}
          onClick={() => onChangeParams("status", "submitted")}
        />
        <Chip
          label={"Sedang berlangsung"}
          active={params.status === "ongoing"}
          onClick={() => onChangeParams("status", "ongoing")}
        />
        <Chip
          label={"Selesai"}
          active={params.status === "finished"}
          onClick={() => onChangeParams("status", "finished")}
        />
        <Chip
          label={"Cancel"}
          active={params.status === "cancelled"}
          onClick={() => onChangeParams("status", "cancelled")}
        />
      </ChipWrapper>
      <Row gutter={[16, 16]}>
        {loading ? (
          <Skeleton />
        ) : (
          data?.map((item) => (
            <Col span={24}>
              <HistoryCard data={item} section={params?.section}></HistoryCard>
            </Col>
          ))
        )}
        {data?.length === 0 && !loading && (
          <div className="flex justify-center w-full mt-[10%]">
            <Empty />
          </div>
        )}
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
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
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
