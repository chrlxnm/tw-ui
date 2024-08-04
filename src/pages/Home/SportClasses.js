import { Col, Empty, Input, Row, Skeleton } from "antd";
import React, { useState } from "react";

import { ButtonSecondary } from "components/Button";
import ClassCard from "components/ClassCard";
import ClassModal from "components/ClassModal";
import { ReactComponent as SearchIcon } from "assets/icons/search.svg";
import styled from "styled-components";
import useGetClass from "./hooks/useGetClass";
import { useNavigate } from "react-router-dom";

const SportClasses = ({ idRef, setAlert }) => {
  const isAuthenticated = localStorage.getItem("token");
  const [params, setParams] = useState({ name: "" });
  const { data, loading, fetchData } = useGetClass(params);
  const navigate = useNavigate();
  const goToPage = (page) => {
    navigate(page, { replace: true });
  };
  
  const [dataClassModal, setDataClassModal] = useState({
    visible: false,
    data: undefined,
  });

  const openModal = (data) => {
    if (isAuthenticated) {
      setDataClassModal({
        ...dataClassModal,
        visible: true,
        data: data,
      });
    } else {
      navigate("/login", { replace: true });
    }
  };

  const onSearch = (event) => {
    setParams({
      ...params,
      name: event.target.value,
    });
  };
  return (
    <Wrapper ref={idRef}>
      <ClassModal
        alert={alert}
        setAlert={setAlert}
        visible={dataClassModal?.visible}
        data={dataClassModal?.data}
        onClose={() => setDataClassModal({ ...dataClassModal, visible: false })}
        refetch={fetchData}
      />
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
        onChange={onSearch}
        className="my-[16px] w-[40%]"
        size="large"
        placeholder="Cari sport class disini . . ."
        prefix={<SearchIcon />}
      />
      {loading ? (
        <Skeleton />
      ) : (
        <Row gutter={[16, 16]}>
          {data?.map((item) => (
            <Col
              key={item?.id}
              className="gutter-row flex"
              xs={24}
              sm={24}
              md={12}
              lg={8}
              xl={8}
            >
              <ClassCard data={item} openModal={openModal} className="flex" />
            </Col>
          ))}
          {data?.length === 0 && !loading && (
            <div className="flex justify-center w-full">
              <Empty />
            </div>
          )}
        </Row>
      )}
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
