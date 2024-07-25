import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Form, Input as InputAntd, message } from "antd";
import { LOGIN_URL, REGISTER_URL } from "constant/paths";
import React, { useState } from "react";

import { ButtonPrimary } from "components/Button";
import Capsule from "components/Capsule";
import styled from "styled-components";
import twService from "utils/services";
import { useAuth } from "contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const RegisterSection = ({ toLogin }) => {
  const [section, setSection] = useState("email");
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { login, user } = useAuth();
  const [isDisabled, setIsDisabled] = useState(true);
  const [data, setData] = useState(true);

  const onNext = (event) => {
    setData(event);
    setSection("data");
  };
  const [isLoading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const loginService = async (event) => {
    setLoading(true);
    let payload = {
      name: event?.name,
      email: data?.email,
      password: data?.password,
      nik: event?.nik,
      password_confirmation: data?.password,
    };
    try {
      await twService.post(REGISTER_URL, payload); // Replace with your API endpoint
      onRegister(payload);
    } catch (error) {
      messageApi.open({
        type: "error",
        content:
          error?.response?.data?.message ||
          "Terjadi kesalahan di sistem, silakan hubungi admin.",
      });
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  const onRegister = async (event) => {
    setLoading(true);
    let payload = {
      email: event.email,
      password: event.password,
      remember: true,
    };
    try {
      const response = await twService.post(LOGIN_URL, payload); // Replace with your API endpoint
      login(response?.data?.access_token);
      user && navigate("/beranda", { replace: true });
      localStorage.setItem("name", event?.name);
      localStorage.setItem("email", data?.email);
      localStorage.setItem("unit", data?.unit);
      localStorage.setItem("nik", event?.nik);
    } catch (error) {
      messageApi.open({
        type: "error",
        content:
          error?.response?.data?.message ||
          "Terjadi kesalahan di sistem, silakan hubungi admin.",
      });
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const onValuesChange = () => {
    const hasErrors = form
      .getFieldsError()
      .some(({ errors }) => errors.length > 0);
    setIsDisabled(hasErrors);
  };

  return (
    <RegisterWrapper>
      {contextHolder}
      <RegisterContent>
        <div className="login-header">
          <LogoWrapper>
            <Title>Employee</Title>
            <Title red>Corner</Title>
          </LogoWrapper>
          <Title>Register Wellness Portal</Title>
        </div>
        <Capsule section={section} />
        {section === "email" ? (
          <Form
            form={form}
            name="validateOnly"
            layout="vertical"
            autoComplete="off"
            requiredMark={false}
            onFinish={onNext}
            onFieldsChange={onValuesChange}
          >
            <Form.Item
              name="email"
              label="Email"
              rules={[
                {
                  required: true,
                  message: "",
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
                  message: "",
                },
              ]}
            >
              <InputPassword
                placeholder="Masukkan password"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </Form.Item>
            <Form.Item>
              <ButtonPrimary
                htmlType="submit"
                className="w-full h-[42px]"
                disabled={isDisabled}
              >
                Lanjut
              </ButtonPrimary>
            </Form.Item>
          </Form>
        ) : (
          <Form
            form={form}
            name="validateOnly"
            layout="vertical"
            autoComplete="off"
            requiredMark={false}
            onFinish={loginService}
          >
            <Form.Item
              name="name"
              label="Nama Karyawan"
              rules={[
                {
                  required: true,
                  message: "",
                },
              ]}
            >
              <Input placeholder="Masukkan nama karyawan" />
            </Form.Item>
            <Form.Item
              name="nik"
              label="NIK"
              rules={[
                {
                  required: true,
                  message: "",
                },
              ]}
            >
              <Input placeholder="Masukkan nik" />
            </Form.Item>
            <Form.Item
              name="unit"
              label="Unit/Divisi"
              rules={[
                {
                  required: true,
                  message: "",
                },
              ]}
            >
              <Input placeholder="Masukkan unit/divisi" />
            </Form.Item>
            <Form.Item>
              <ButtonPrimary
                loading={isLoading}
                htmlType="submit"
                className="w-full h-[42px]"
              >
                Lanjut
              </ButtonPrimary>
            </Form.Item>
          </Form>
        )}
        <div className="flex gap-[4px] justify-center">
          <p className="text-[#1E1E1E] text-[16px]">Sudah memiliki akun?</p>
          <p
            className="text-[#FF0000] text-[16px] font-semibold cursor-pointer"
            onClick={toLogin}
          >
            Login disini
          </p>
        </div>
      </RegisterContent>
    </RegisterWrapper>
  );
};

export default RegisterSection;
const LogoWrapper = styled.div`
  display: flex;
`;

const RegisterWrapper = styled.div`
  justify-content: center;
  display: flex;
  height: 90vh;
  align-items: center;
  @media screen and (max-width: 768px) {
    align-items: start;
    padding-top: 4rem;
  }
`;
const RegisterContent = styled.div`
  width: 80%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Input = styled(InputAntd)`
  height: 42px;
`;

const Title = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: ${(props) => (props.red ? "#FF0000" : "#000000")};
`;

const InputPassword = styled(InputAntd.Password)`
  height: 42px;
`;
