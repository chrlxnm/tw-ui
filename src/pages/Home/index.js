import "./style.css";

import React, { useState } from "react";

import BannerSection from "./BannerSection";
import BookRoomBanner from "./BookRoomBanner";
import BookRoomSection from "./BookRoomSection";
import ClassModal from "components/ClassModal";
import RoomModal from "components/RoomModal";
import SportClasses from "./SportClasses";
import TWAlert from "components/Alert";
import styled from "styled-components";

const Home = () => {
  const [dataClassModal, setDataClassModal] = useState({
    visible: false,
    data: undefined,
  });
  const [dataRoomModal, setDataRoomModal] = useState({
    visible: false,
    data: undefined,
  });

  const openClassModal = (data) => {
    setDataClassModal({
      ...dataClassModal,
      visible: true,
      data: data,
    });
  };
  const openRoomModal = (data) => {
    setDataRoomModal({
      ...dataRoomModal,
      visible: true,
      data: data,
    });
  };

  const [alert, setAlert] = useState({
    message: "",
    visible: false,
  });

  return (
    <HomeWrapper>
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
      />
      <RoomModal
        alert={alert}
        setAlert={setAlert}
        visible={dataRoomModal?.visible}
        data={dataRoomModal?.data}
        onClose={() => setDataRoomModal({ ...dataRoomModal, visible: false })}
      />
      <BannerSection />
      <SportClasses openModal={openClassModal} />
      <BookRoomBanner />
      <BookRoomSection openModal={openRoomModal} />
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper = styled.div`
  padding: 0 0 32px 0;
`;
