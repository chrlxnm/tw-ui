import {
  DatePicker,
  Form,
  Modal as ModalAntd,
  Select as SelectAntd,
  message,
} from "antd";
import React, { useState } from "react";

import AlertBanner from "./Alert";
import { ButtonPrimary } from "components/Button";
import { Input } from "components/Input";
import { ReactComponent as Users } from "assets/icons/users.svg";
import moment from "moment";
import styled from "styled-components";
import twService from "utils/services";

const RoomModal = ({ data, visible, onClose, setAlert, alert }) => {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const [loading, setLoading] = useState(false);
  const [timeList, setTimeList] = useState([]);

  const onFinish = async (event) => {
    setLoading(true);
    let payload = {
      name: event.name,
      nik: event.nik,
      unit_division: event.unit_division,
      date: event.date?.format("YYYY-MM-DD"),
      started_time: event.time,
      duration: event.duration,
      occupancy: Number(event.total),
    };
    try {
      await twService.post(`rooms/${data?.id}`, payload); // Replace with your API endpoint
      closeModal();
      setAlert({
        ...alert,
        visible: true,
        message: `Pendaftaran ruangan ${data?.name} berhasil`,
      });
    } catch (error) {
      messageApi.open({
        type: "error",
        content:
          error?.response?.data?.message ||
          "Terjadi kesalahan di sistem, silakan hubungi admin.",
      });
    } finally {
      setLoading(false);
    }
  };

  const checkAvailability = async (event) => {
    let params = {
      date: event ? event.format("YYYY-MM-DD") : undefined,
    };
    setLoading(true);
    try {
      let response = await twService.get(`rooms/${data?.id}/available`, {
        params,
      });

      const formattedTimeSlots = Object.keys(response?.data?.data).map(
        (time) => ({
          label: time,
          value: time,
          disabled: response?.data?.data[time] === 0,
        })
      );
      setTimeList(formattedTimeSlots);
    } catch (error) {
      messageApi.open({
        type: "error",
        content:
          error?.response?.data?.message ||
          "Terjadi kesalahan di sistem, silakan hubungi admin.",
      });
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    onClose();
    form.resetFields();
  };

  const disableDate = (current) => {
    // Disable dates before today
    return current && current < moment().startOf("day");
  };

  return (
    <Modal
      title="Form Pendaftaran Ruangan"
      open={visible}
      onOk={closeModal}
      onCancel={closeModal}
    >
      {contextHolder}
      <Wrapper>
        <LeftSide>
          <Image alt="photo" src={data?.images?.[0]?.url} />
          <Title>{data?.name}</Title>
          <BadgeWrapper>
            <GreyBadge>
              <Users />
              Kuota {data?.quota} orang
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
              name="unit_division"
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
              <DatePicker
                placeholder="Pilih tanggal pemesanan"
                size="large"
                style={{ width: "100%" }}
                disabledDate={disableDate}
                onChange={checkAvailability}
              />
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
                options={timeList}
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
              <Select
                size="large"
                placeholder="Pilih waktu durasi"
                options={[
                  { value: 1, label: "1 Jam" },
                  { value: 2, label: "2 Jam" },
                  { value: 3, label: "3 Jam" },
                  { value: 4, label: "4 Jam", disabled: true },
                ]}
              />
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
              <Input
                placeholder="Masukkan jumlah peserta disini"
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </Form.Item>
            <Form.Item>
              <ButtonPrimary
                htmlType="submit"
                className="w-full h-[42px]"
                loading={loading}
              >
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
  overflow: auto;
  height: 80vh;

  @media screen and (max-width: 768px) {
    height: 100%;
  }
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
