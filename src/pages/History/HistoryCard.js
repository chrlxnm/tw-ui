import { formatDateWithDayName, getStatusOnGoing } from "utils";

import { ButtonPrimary } from "components/Button";
import { CalendarOutlined } from "@ant-design/icons";
import { ReactComponent as Clock } from "assets/icons/clock.svg";
import React from "react";
import { ReactComponent as Users } from "assets/icons/users.svg";
import styled from "styled-components";

const HistoryCard = ({ data, section }) => {
  return (
    <Wrapper>
      <Item>
        <Title>{data?.schedule?.name || data?.room?.name || "-"}</Title>
        <Date>{formatDateWithDayName(data?.schedule?.date || data?.date)}</Date>
        {section === "class" ? (
          <BadgeWrapper>
            <GreyBadge>
              <Users />
              Kuota {data?.schedule?.quota || data?.room?.quota} orang
            </GreyBadge>
            <GreyBadge>
              <Clock />
              {data?.schedule?.time || data?.time}
            </GreyBadge>
          </BadgeWrapper>
        ) : (
          <BadgeWrapper>
            <GreyBadge>
              <Users />
              Jumlah Peserta {data?.occupancy} orang
            </GreyBadge>
            <GreyBadge>
              <CalendarOutlined />
              {data?.date}
            </GreyBadge>
            <GreyBadge>
              <Clock />
              {data?.time}
            </GreyBadge>
          </BadgeWrapper>
        )}
      </Item>
      <RightSideWrapper>
        <Badge color={data?.status?.toString()?.toLowerCase()}>
          {getStatusOnGoing(data?.status?.toLowerCase())}
        </Badge>
        {data?.status?.toLowerCase() === "ongoing" && (
          <ButtonPrimary>Selesai</ButtonPrimary>
        )}
      </RightSideWrapper>
    </Wrapper>
  );
};

export default HistoryCard;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 12px;
  padding: 12px 24px;
  border: 1px solid #00000033;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 18px;
  }
`;

const getBgColor = ({ color }) => {
  switch (color?.toString()?.toLowerCase()) {
    case "submitted":
      return "#FFF3E6";
    case "approved":
      return "#E9F1FC";
    case "cancelled":
      return "#FFEBEB";
    case "finished":
      return "#DEFFE3";
    case "ongoing":
      return "#E9E9E9";
    case "rejected":
      return "#FFEBEB";
    default:
      return "#E6F7EF";
  }
};

const getColor = ({ color }) => {
  switch (color?.toString()?.toLowerCase()) {
    case "submitted":
      return "#E67800";
    case "approved":
      return "#246EE5";
    case "cancelled":
      return "#FF0000";
    case "finished":
      return "#0FE131";
    case "ongoing":
      return "#646464";
    case "rejected":
      return "#FF0000";
    default:
      return "#00AA5B";
  }
};

const Badge = styled.div`
  font-weight: 700;
  font-size: 16px;
  padding: 4px 8px;
  border-radius: 4px;
  color: ${getColor};
  background: ${getBgColor};
  height: fit-content;
  width: fit-content;
`;
const BadgeWrapper = styled.div`
  display: flex;
  gap: 12px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const GreyBadge = styled.div`
  font-size: 14px;
  color: #535353;
  background: #f2f2f2;
  padding: 8px;
  border-radius: 4px;
  height: fit-content;
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 8px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Item = styled.div`
  display: grid;
  gap: 8px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Title = styled.p`
  font-weight: 700;
  font-size: 24px;
  color: #1e1e1e;
`;

const Date = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: #1e1e1e;
  text-transform: uppercase;
  margin-bottom: 8px;
`;

const RightSideWrapper = styled.div`
  display: grid;
  justify-items: end;
  align-content: space-between;
  button {
    width: 25vw;
  }

  @media screen and (max-width: 768px) {
    justify-items: start;
    gap: 12px;
    width: 100%;
    button {
      width: 100%;
    }
  }
`;
