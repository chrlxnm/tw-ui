import { Button } from "antd";
import styled from "styled-components";

export const ButtonPrimary = styled(Button)`
  height: 48px;
  border-radius: 12px;
  border: unset;
  background-color: #ff0000;
  &.ant-btn-default:not(:disabled):not(.ant-btn-disabled):hover {
    border-color: #fd4646;
    color: #fd4646;
    background-color: #fd4646;
  }
  &.ant-btn > span {
    font-size: 16px;
    font-weight: 500;
    color: white;
  }
`;
export const ButtonSecondary = styled(Button)`
  height: 48px;
  border-radius: 12px;
  border: 2px solid #ff0000;
  background-color: white;
  &.ant-btn-default:not(:disabled):not(.ant-btn-disabled):hover {
    border-color: #f95e5e;
    color: #f95e5e;
    background-color: #fbf7f7;
  }
  &.ant-btn-default:not(:disabled):not(.ant-btn-disabled):hover > span {
    color: #f95e5e;
  }
  &.ant-btn > span {
    font-weight: 700;
    color: #ff0000;
  }
  @media screen and (max-width: 768px) {
    height: 36px;
    span {
      font-size: 12px;
    }
  }
`;
