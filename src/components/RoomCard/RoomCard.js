import React from "react";
import styled from "styled-components";

const RoomCard = ({ data }) => {
  return (
    <Wrapper>
      <img
        src={data?.icon?.[0]?.url}
        className="h-[44px] w-[44px]"
        alt="icon"
      />
      <Title>{data?.name}</Title>
    </Wrapper>
  );
};

export default RoomCard;

const Wrapper = styled.div`
  border-radius: 8px;
  min-height: 175px;
  background-color: #f7fbfb;
  display: grid;
  justify-items: center;
  align-items: center;
  align-content: center;
  gap: 12px;
  cursor: pointer;

  &:hover {
    -ms-transform: scale(1.05); /* IE 9 */
    -webkit-transform: scale(1.05); /* Safari 3-8 */
    transform: scale(1.05);
    -webkit-transition: transform 0.6s ease-in;
  }
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: 600;
`;
