import { Col, Input, Row } from "antd";

import { ButtonSecondary } from "components/Button";
import ClassCard from "components/ClassCard";
import { ClassData } from "constant/dummyData";
import React from "react";
import { ReactComponent as SearchIcon } from "assets/icons/search.svg";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const SportClasses = ({ openModal }) => {
  const navigate = useNavigate();
  const goToPage = (page) => {
    navigate(page, { replace: true });
  };
  return (
    <Wrapper>
      <HeaderWrapper>
        <HeaderTextWrapper>
          <HeaderTitle>Sport Classes</HeaderTitle>
          <HeaderDescription>
            Pilihan sport classes yang dapat membantu hidup sehat
          </HeaderDescription>
        </HeaderTextWrapper>
        <ButtonSecondary
          className="w-fit"
          onClick={() => goToPage("/beranda/daftar-kelas")}
        >
          Lihat semua
        </ButtonSecondary>
      </HeaderWrapper>
      <Input
        className="my-[16px] w-[40%]"
        size="large"
        placeholder="Cari sport class disini . . ."
        prefix={<SearchIcon />}
      />
      <Row gutter={[16, 16]}>
        {ClassData.map((item) => (
          <Col className="gutter-row" xs={24} sm={24} md={12} lg={8} xl={8}>
            <ClassCard data={item} openModal={openModal} />
          </Col>
        ))}
      </Row>
    </Wrapper>
  );
};

export default SportClasses;

const Wrapper = styled.div`
  padding: 80px;
  @media screen and (max-width: 768px) {
    padding: 24px;
    .ant-input-affix-wrapper {
      width: 100%;
    }
  }
`;
const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
`;

const HeaderTextWrapper = styled.div`
  display: grid;
  gap: 16px;
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
