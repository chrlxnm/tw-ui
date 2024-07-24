import "./style.css";

import React, { Fragment, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import BannerSection from "./BannerSection";
import BookRoomBanner from "./BookRoomBanner";
import BookRoomSection from "./BookRoomSection";
import ClassModal from "components/ClassModal";
import RoomModal from "components/RoomModal";
import SportClasses from "./SportClasses";
import TWAlert from "components/Alert";
import styled from "styled-components";

const Home = () => {
  const isAuthenticated = localStorage.getItem("token");
  const [dataClassModal, setDataClassModal] = useState({
    visible: false,
    data: undefined,
  });
  const [dataRoomModal, setDataRoomModal] = useState({
    visible: false,
    data: undefined,
  });

  const roomRef = useRef(null);
  const classRef = useRef(null);

  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    setTimeout(() => {}, 1000);

    if (hash === "#room") {
      if (roomRef?.current) {
        roomRef.current.scrollIntoView({ behavior: "smooth" });
      }
    } else if (hash === "#class") {
      if (classRef?.current) {
        classRef.current.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [location]);

  function goToRoomSection() {
    if (roomRef?.current) {
      roomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }
  const navigate = useNavigate();

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
  const openRoomModal = (data) => {
    if (isAuthenticated) {
      setDataRoomModal({
        ...dataRoomModal,
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
    <Fragment>
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
          onClose={() =>
            setDataClassModal({ ...dataClassModal, visible: false })
          }
        />
        <RoomModal
          alert={alert}
          setAlert={setAlert}
          visible={dataRoomModal?.visible}
          data={dataRoomModal?.data}
          onClose={() => setDataRoomModal({ ...dataRoomModal, visible: false })}
        />
        <BannerSection />
        {/* {isAuthenticated && <OnGoing />} */}
        <SportClasses idRef={classRef} openModal={openClassModal} />
        <BookRoomBanner goToRoom={() => goToRoomSection()} />
        <BookRoomSection idRef={roomRef} openModal={openRoomModal} />
      </HomeWrapper>
    </Fragment>
  );
};

export default Home;

const HomeWrapper = styled.div`
  padding: 0 0 32px 0;
`;
