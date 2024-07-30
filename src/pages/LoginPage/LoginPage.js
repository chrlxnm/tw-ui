import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Form, Input as InputAntd, message } from "antd";
import { LOGIN_URL, USER_PROFIL_URL } from "constant/paths";
import React, { useState } from "react";

import { ButtonPrimary } from "components/Button";
import styled from "styled-components";
import twService from "utils/services";
import { useAuth } from "contexts/AuthContext";

const LoginPageSection = ({ toRegister }) => {
  const [form] = Form.useForm();
  const { login } = useAuth();
  const [isLoading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const loginService = async (event) => {
    setLoading(true);
    let payload = {
      email: event.email,
      password: event.password,
      remember: true
    };
    try {
      const response = await twService.post(LOGIN_URL, payload); // Replace with your API endpoint
      onLogin(response?.data?.access_token);
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

  const onLogin = async (event) => {
    login(event);
    try{
      const response = await twService.get(USER_PROFIL_URL);
      let data = response?.data?.data;
      localStorage.setItem("name", data?.name);
      localStorage.setItem("email", data?.email);
      localStorage.setItem("unit", data?.unit);
      localStorage.setItem("nik", data?.nik);
    } catch(error) {
      console.error(error)
    }
  };


  return (
    <LoginWrapper>
      {contextHolder}
      <LoginContent>
        <div className="login-header">
          <LogoWrapper>
            <p className="font-bold text-[28px]">
              <span>Employee</span>
              <span className="text-[#EE2E24]">Corner</span>
            </p>
          </LogoWrapper>
          <Title>Login Wellness Portal</Title>
        </div>
        <Form
          form={form}
          name="validateOnly"
          layout="vertical"
          autoComplete="off"
          requiredMark={false}
          onFinish={loginService}
        >
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
                message: "",
              },
              {
                type: 'email',
                message: "Format email tidak valid!",
              }
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
              iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />
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
        <div className="flex gap-[4px] justify-center">
          <p className="text-[#1E1E1E] text-[16px]">Belum memiliki akun?</p>
          <p
            className="text-[#FF0000] text-[16px] font-semibold cursor-pointer"
            onClick={toRegister}
          >
            Register disini
          </p>
        </div>
      </LoginContent>
    </LoginWrapper>
  );
};

export default LoginPageSection;

const LogoWrapper = styled.div`
  display: flex;
`;

const LoginWrapper = styled.div`
  justify-content: center;
  display: flex;
  height: 90vh;
  align-items: center;
  @media screen and (max-width: 768px) {
    align-items: start;
    padding-top: 4rem;
  }
`;
const LoginContent = styled.div`
  width: 80%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Input = styled(InputAntd)`
  height: 42px;
`;

const InputPassword = styled(InputAntd.Password)`
  height: 42px;
`;

const Title = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: #000000;
`;
