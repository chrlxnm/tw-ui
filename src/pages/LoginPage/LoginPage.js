import { Form, Input as InputAntd } from "antd";

import { ButtonPrimary } from "components/Button";
import React from "react";
import styled from "styled-components";
import { useAuth } from "contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginPageSection = ({ toRegister }) => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { login } = useAuth();

  const onLogin = (event) => {
    login(event?.username);
    navigate("/home", { replace: true });
  };

  return (
    <LoginWrapper>
      <LoginContent>
        <div className="login-header">
          <LogoWrapper>
            <Title>Employe</Title>
            <span className="title-font title-red">Corner</span>
          </LogoWrapper>
          <Title>Login Wellness Portal</Title>
        </div>
        <Form
          form={form}
          name="validateOnly"
          layout="vertical"
          autoComplete="off"
          requiredMark={false}
          onFinish={onLogin}
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
          <p className="text-[#FF0000] font-bold mb-[16px]">Lupa password?</p>
          <Form.Item>
            <ButtonPrimary htmlType="submit" className="w-full h-[42px]">
              Lanjut
            </ButtonPrimary>
          </Form.Item>
        </Form>
        <div className="flex gap-[4px]">
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

const Title = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: #000000;
`;
