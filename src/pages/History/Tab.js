import React from "react";
import styled from "styled-components";

const Tab = ({section, setSection}) => {
  return (
    <Wrapper>
      <TabItem active={section==='class'} onClick={()=> setSection('class')}>
        <p>Sport Classes</p>
      </TabItem>
      <TabItem active={section==='room'} onClick={()=> setSection('room')}>
        <p>Ruangan</p>
      </TabItem>
    </Wrapper>
  );
};

export default Tab;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-event;
  width: 50%;
  margin-bottom: 16px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const TabItem = styled.div`
  cursor: pointer;
  padding: 8px;
  display: flex;
  width: 100%;
  border-bottom: ${(props) =>
    props.active ? "3px solid #FF0000" : "2px solid #e9e9e9"};
  justify-content: center;
  font-size: 14px;
  color: ${(props) => (props.active ? "#FF0000" : "#646464")};
  font-weight: ${(props) => (props.active ? "700" : "500")};
  :hover {
    color: #ff0000;
    font-weight: 700;
  }
`;
