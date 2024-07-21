import { Form, Modal as ModalAntd } from "antd";
import React, { useEffect } from "react";

import { ButtonPrimary } from "components/Button";
import { ReactComponent as Clock } from "assets/icons/clock.svg";
import { Input } from "components/Input";
import { ReactComponent as Users } from "assets/icons/users.svg";
import styled from "styled-components";

const ClassModal = ({ data, visible, onClose, setAlert, alert }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
      name: data?.name,
      nik: "1927378021",
      unit: "IT Development",
    });
  }, [data, form, visible]);

  const onFinish = () => {
    closeModal();
    setAlert({
      ...alert,
      visible: true,
      message: "Pendaftaran kelas poundfit berhasil",
    });
  };

  const closeModal = () => {
    onClose();
    form.resetFields();
  };

  return (
    <Modal
      title="Form Pendaftaran Kelas"
      open={visible}
      onOk={closeModal}
      onCancel={closeModal}
    >
      <Wrapper>
        <LeftSide>
          <Image alt="photo" src={data?.img} />
          <Date>{data?.date}</Date>
          <Title>{data?.title}</Title>
          <BadgeWrapper>
            <GreyBadge>
              <Users />
              Kuota {data?.kuota} orang
            </GreyBadge>
            <GreyBadge>
              <Clock />
              {data?.time}
            </GreyBadge>
          </BadgeWrapper>
        </LeftSide>
        <RightSide>
          <Form
            form={form}
            name="validateOnly"
            layout="vertical"
            autoComplete="off"
            requiredMark={false}
            onFinish={onFinish}
          >
            <Form.Item
              label="Nama"
              name="name"
              rules={[
                {
                  required: true,
                  message: "",
                },
              ]}
            >
              <Input placeholder="Masukkan nama" />
            </Form.Item>
            <Form.Item
              label="NIK Telkom Group"
              name="nik"
              rules={[
                {
                  required: true,
                  message: "",
                },
              ]}
            >
              <Input placeholder="Masukkan NIK" />
            </Form.Item>
            <Form.Item
              label="Unit/Divisi"
              name="unit"
              rules={[
                {
                  required: true,
                  message: "",
                },
              ]}
            >
              <Input placeholder="Masukkan Unit/Divisi" />
            </Form.Item>
            <Form.Item
              label="No. HP"
              name="phoneNo"
              rules={[
                {
                  required: true,
                  message: "",
                },
              ]}
            >
              <Input placeholder="Masukkan No. HP" />
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

const LeftSide = styled.div`
  display: grid;
  width: 100%;
  grid-auto-rows: min-content;
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
  margin-bottom: 16px;
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 16px;
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
  .ant-modal-content {
    width: 60vw;
  }
  &.ant-modal {
    width: 60vw !important;
  }

  @media screen and (max-width: 768px) {
    &.ant-modal-wrap {
      overflow: unset !important;
    }
    &.ant-modal {
      top: 0;
      margin: 0;
      padding: 0;
      width: 100vw !important;
      max-width: unset;
    }
    .ant-modal-content {
      height: 100vh;
      width: 100vw;
    }
    .ant-modal-body {
      overflow: auto;
      max-height: calc(100vh - 72px);
    }
  }
`;
