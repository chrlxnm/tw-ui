import React from "react";
import styled from "styled-components";

const Chip = ({ active, label, onClick }) => {
  return (
    <Wrapper active={active} onClick={onClick}>
      <p>{label}</p>
    </Wrapper>
  );
};

export default Chip;

const Wrapper = styled.div`
  padding: 10px 16px 10px 16px;
  border: ${(props) =>
    props.active ? "2px solid #FF0000" : "2px solid #00000033"};
  background: ${(props) => (props.active ? "#FFE6E6" : "#FFFFFF")};
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  font-size: 14px;
  color: ${(props) => (props.active ? "#FF0000" : " #000000")};
  width: fit-content;
  border-radius: 100px;
`;
