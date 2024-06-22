import Footer from "components/Footer";
import Header from "components/Header";
import { Outlet } from "react-router-dom";
import React from "react";
import styled from "styled-components";

const Layout = (props) => {
  return (
    <LayoutWrapper>
      <Header />
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
      <Footer />
    </LayoutWrapper>
  );
};

export default Layout;

const LayoutWrapper = styled.div`
  overflow: auto;
`

const ContentWrapper = styled.div`
  min-height: 100vh;
  margin-top: 100px;
  
  @media screen and (max-width: 768px) {
    margin-top: 54px;
  }
`