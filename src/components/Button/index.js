import { Button } from "antd";
import styled from "styled-components";

export const ButtonPrimary = styled(Button)`
    height: 48px;
    border-radius: 12px;
    border: unset;
    background-color: #FF0000;
    &.ant-btn-default:not(:disabled):not(.ant-btn-disabled):hover {
        border-color: #fd4646;
        color: #fd4646;
        background-color: #fd4646;
    }
    &.ant-btn >span {
        font-weight: 700;
        color: white;
    }
`
export const ButtonSecondary = styled(Button)`
    height: 48px;
    border-radius: 12px;
    border: 2px solid #FF0000;
    background-color: white;
    &.ant-btn-default:not(:disabled):not(.ant-btn-disabled):hover {
        border-color: #f95e5e;
        color: #f95e5e;
        background-color: #fbf7f7;
    }
    &.ant-btn-default:not(:disabled):not(.ant-btn-disabled):hover > span {
        color: #f95e5e;
    }
    &.ant-btn >span {
        font-weight: 700;
        color: #FF0000;
    }
`