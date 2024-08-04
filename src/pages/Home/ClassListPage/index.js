import { Col, Empty, Row, Skeleton } from "antd";
import React, { useEffect, useState } from "react";
import { getFiveNextDay, getThisMonth } from "utils";

import { ReactComponent as BackIcon } from "../../../assets/icons/back-icon.svg";
import BookRoomBanner from "./RoomBanner";
import Card from "./Card";
import Chip from "components/Chip/Chip";
import ClassModal from "components/ClassModal";
import { Input } from "components/Input";
import { ReactComponent as SearchIcon } from "assets/icons/search.svg";
import TWAlert from "components/Alert";
import styled from "styled-components";
import useGetClass from "../hooks/useGetClass";
import { useNavigate } from "react-router-dom";

const ClassListPage = () => {
  const navigate = useNavigate();
  const [params, setParams] = useState({ name: "", date: undefined });
  const isAuthenticated = localStorage.getItem("token");
  const { data, loading, fetchData } = useGetClass(params);
  const goToPage = (page) => {
    navigate(page, { replace: true });
  };

  function onChangeDate(date){
    setParams({
      ...params,
      date: date
    });
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const [dataClassModal, setDataClassModal] = useState({
    visible: false,
    data: undefined,
  });

  const onSearch = (name, event) => {
    setParams({
      ...params,
      [name]: event.target.value,
    });
  };

  const openClassModal = (data) => {
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

  const [alert, setAlert] = useState({
    message: "",
    visible: false,
  });

  return (
    <Wrapper>
      <TWAlert
        visible={alert?.visible}
        message={alert?.message}
        onClose={() =>
          setAlert({
            ...alert,
            visible: false,
          })
        }
      />
      <ClassModal
        alert={alert}
        setAlert={setAlert}
        visible={dataClassModal?.visible}
        data={dataClassModal?.data}
        onClose={() => setDataClassModal({ ...dataClassModal, visible: false })}
        refetch={fetchData}
      />
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
        className="my-[16px] w-[40%] search-input"
        size="large"
        placeholder="Cari sport class disini . . ."
        prefix={<SearchIcon />}
        onChange={(e) => onSearch("name", e)}
      />
      <ChipWrapper>
        <Chip
          label={"Semua"}
          active={params.date === undefined}
          onClick={() => onChangeDate(undefined)}
        />
        <Chip
          label={"Bulan ini"}
          active={params.date === getThisMonth()}
          onClick={() => onChangeDate(getThisMonth())}
        />
        {getFiveNextDay().map((item) => (
          <Chip
            label={item?.label}
            active={params.date === item?.value}
            onClick={() => onChangeDate(item?.value)}
          />
        ))}
      </ChipWrapper>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={24} lg={16} xl={16} xxl={16}>
          {loading ? (
            <Skeleton />
          ) : (
            data?.map((item) => (
              <Card data={item} openModal={() => openClassModal(item)} />
            ))
          )}
          {(data?.length === 0 && !loading) && (
            <div className="flex justify-center w-full">
              <Empty />
            </div>
          )}
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

    .search-input {
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
  cursor: pointer;
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
