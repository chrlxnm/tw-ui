import { Form, Modal as ModalAntd, Select as SelectAntd } from "antd";

import AlertBanner from "./Alert";
import { ButtonPrimary } from "components/Button";
import { Input } from "components/Input";
import React from "react";
import { ReactComponent as Speaker } from "assets/icons/speaker.svg";
import { ReactComponent as TV } from "assets/icons/tv.svg";
import { ReactComponent as Users } from "assets/icons/users.svg";
import poundFit from "../../assets/images/poundfit-image.png";
import styled from "styled-components";

const RoomModal = ({ data, visible, onClose, setAlert, alert }) => {
  const [form] = Form.useForm();

  const onFinish = () => {
    closeModal();
    setAlert({
      ...alert,
      visible: true,
      message: "Pendaftaran ruangan billiard berhasil",
    });
  };

  const closeModal = () => {
    onClose();
    form.resetFields();
  };

  return (
    <Modal
      title="Form Pendaftaran Ruangan"
      open={visible}
      onOk={closeModal}
      onCancel={closeModal}
    >
      <Wrapper>
        <LeftSide>
          <Image alt="photo" src={data?.img} />
          <Title>{data?.title}</Title>
          <BadgeWrapper>
            <GreyBadge>
              <Users />
              Kuota {data?.kuota} orang
            </GreyBadge>
            <GreyBadge>
              <TV />
              TV
            </GreyBadge>
            <GreyBadge>
              <Speaker />
              Sound
            </GreyBadge>
          </BadgeWrapper>
          <AlertBanner />
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
              label="Tanggal Penggunaan"
              name="date"
              rules={[
                {
                  required: true,
                  message: "",
                },
              ]}
            >
              <Input placeholder="Masukkan No. HP" />
            </Form.Item>
            <Form.Item
              label="Waktu Mulai"
              name="time"
              rules={[
                {
                  required: true,
                  message: "",
                },
              ]}
            >
              <Select
                size="large"
                placeholder="Pilih waktu mulai"
                options={[
                  { value: "11:00", label: "11:00" },
                  { value: "12:00", label: "12:00" },
                  { value: "13:00", label: "13:00" },
                  { value: "14:00", label: "14:00", disabled: true },
                ]}
              />
            </Form.Item>
            <Form.Item
              label="Pilih Durasi"
              name="duration"
              rules={[
                {
                  required: true,
                  message: "",
                },
              ]}
            >
              <Select size="large" placeholder="Pilih waktu durasi" 
                options={[
                  { value: "1 Jam", label: "1 Jam" },
                  { value: "2 Jam", label: "2 Jam" },
                  { value: "3 Jam", label: "3 Jam" },
                  { value: "4 Jam", label: "4 Jam", disabled: true },
                ]}/>
            </Form.Item>
            <Form.Item
              label="Jumlah Peserta"
              name="total"
              rules={[
                {
                  required: true,
                  message: "",
                },
              ]}
            >
              <Input placeholder="Masukkan jumlah peserta disini" />
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

export default RoomModal;

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
  margin-bottom: 12px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Select = styled(SelectAntd)``;

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

const Modal = styled(ModalAntd)`
  .ant-modal-footer {
    display: none !important;
  }
  .ant-modal-body {
    overflow: auto;
    max-height: calc(90vh - 72px);
  }

  &.ant-modal-wrap {
    overflow: unset !important;
  }

  .ant-modal-content {
    width: 60vw;
    max-height: 90vh;
  }
  &.ant-modal {
    width: 60vw !important;
    top: 5vh;
    max-height: 90vh;
  }
  .ant-modal-header {
    margin-bottom: 16px;
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
      max-height: 100vh;
    }
    .ant-modal-content {
      height: 100vh;
      max-height: 100vh;
      width: 100vw;
    }
    .ant-modal-body {
      overflow: auto;
      max-height: calc(100vh - 72px);
    }
  }
`;
