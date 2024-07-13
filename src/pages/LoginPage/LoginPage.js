import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Form, Input as InputAntd, message } from "antd";
import React, { useState } from "react";

import { ButtonPrimary } from "components/Button";
import { LOGIN_URL } from "constant/paths";
import styled from "styled-components";
import twService from "utils/services";
import { useAuth } from "contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginPageSection = ({ toRegister }) => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { login } = useAuth();
  const [isDisabled, setIsDisabled] = useState(true);
  const [isLoading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const loginService = async (event) => {
    setLoading(true);
    let payload = {
      email: event.email,
      password: event.password,
    };
    try {
      const response = await twService.post(LOGIN_URL, payload); // Replace with your API endpoint
      onLogin(response?.data?.accessToken);
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

  const onLogin = (event) => {
    login(event);
    navigate("/beranda", { replace: true });
  };

  const onValuesChange = () => {
    const hasErrors = form
      .getFieldsError()
      .some(({ errors }) => errors.length > 0);
    setIsDisabled(hasErrors);
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
              iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />
          </Form.Item>
          <p className="text-[#FF0000] font-bold mb-[16px]">Lupa password?</p>
          <Form.Item>
            <ButtonPrimary
              loading={isLoading}
              htmlType="submit"
              className="w-full h-[42px]"
              disabled={isDisabled}
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
