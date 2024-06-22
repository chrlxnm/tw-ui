import { Form, Modal as ModalAntd } from "antd";

import { ButtonPrimary } from "components/Button";
import { Input } from "components/Input";
import React from "react";
import poundFit from "../../assets/images/poundfit-image.png";
import styled from "styled-components";

const ClassModal = ({ visible, onClose }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      title="Form Pendaftaran Kelas"
      // This was removed
      // centered
      visible={visible}
      onOk={onClose}
      onCancel={onClose}
      // This was removed
      // width={'1000'}
    >
      <Wrapper>
        <LeftSide>
          <Image alt="photo" src={poundFit} />
          <Date>Senin, 20 Mei 2024</Date>
          <Title>Poundfit</Title>
        </LeftSide>
        <RightSide>
          <Form
            form={form}
            name="validateOnly"
            layout="vertical"
            autoComplete="off"
            requiredMark={false}
            //   onFinish={onLogin}
          >
            <Form.Item
              name="username"
              label="Username"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input placeholder="Masukkan email" />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input placeholder="Masukkan password" />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input placeholder="Masukkan password" />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input placeholder="Masukkan password" />
            </Form.Item>
            <Form.Item>
              <ButtonPrimary htmlType="submit" className="w-full h-[42px]">
                Kirim
              </ButtonPrimary>
            </Form.Item>
          </Form>
        </RightSide>
      </Wrapper>
    </Modal>
  );
};

export default ClassModal;

const Wrapper = styled.div`
  display: flex;
  gap: 36px;
  @media screen and (max-width: 768px) {
    display: grid;
  }
`;

const LeftSide = styled.div`
  display: grid;
  width: 100%;
`;

const RightSide = styled.div`
  display: grid;
  width: 100%;
`;

const Image = styled.img`
  border-radius: 20px;
  width: 100%;
  aspect-ratio: 9 / 5;
  height: auto;
  object-fit: cover;
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: 600;
`;

const Date = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: #1e1e1e;
  text-transform: uppercase;
  margin-bottom: 8px;
`;

const Modal = styled(ModalAntd)`
  .ant-modal-footer {
    display: none !important;
  }
  .ant-modal-body {
    overflow: auto;
    height: auto;
  }
  .ant-modal-content {
    overflow: auto;
    width: 65vw;
    padding: 36px;
    border-radius: 20px;
  }
  &.ant-modal {
    width: 65vw !important;
    margin: 0 auto;
  }
  .ant-modal-title {
    font-size: 20px;
  }
  .ant-modal-header {
    margin-bottom: 24px;
  }

  @media screen and (max-width: 768px) {
    &.ant-modal {
      height: calc(100vh - 58px);
      top: 58px;
      margin: 0;
    }
    & .ant-modal-content {
      width: 100vw !important;
      overflow: unset;
      height: calc(100vh - 58px);
    }
    .ant-modal-body {
      overflow: auto;
      height: calc(100vh - 150px);
    }
  }
`;
