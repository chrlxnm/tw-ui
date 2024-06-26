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
  const [visible, setVisible] = useState(false);
  const [visibleRoom, setVisibleRoom] = useState(false);
  const [dataRoom, setDataRoom] = useState();
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
      <ClassModal alert={alert} setAlert={setAlert} visible={visible} onClose={() => setVisible(false)} />
      <RoomModal alert={alert} setAlert={setAlert} visible={visibleRoom} onClose={() => setVisibleRoom(false)} />
      <BannerSection />
      <SportClasses openModal={() => setVisible(true)} />
      <BookRoomBanner />
      <BookRoomSection openModal={() => setVisibleRoom(true)} />
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper = styled.div`
  padding: 0 0 32px 0;
`;
