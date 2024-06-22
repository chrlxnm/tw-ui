import "./style.css";

import React, { useState } from "react";

import BannerSection from "./BannerSection";
import BookRoomBanner from "./BookRoomBanner";
import BookRoomSection from "./BookRoomSection";
import ClassModal from "components/ClassModal";
import SportClasses from "./SportClasses";
import styled from "styled-components";

const Home = () => {
  const [visible, setVisible] = useState(false);
  return (
    <HomeWrapper>
      <ClassModal
        visible={visible}
        onClose={() => setVisible(false)}
      />
      <BannerSection />
      <SportClasses openModal={()=> setVisible(true)} />
      <BookRoomBanner />
      <BookRoomSection />
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper = styled.div`
  padding: 0 0 32px 0;
`;
