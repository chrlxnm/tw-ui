import "./style.css";

import {
  Carousel as CarouselAntd,
  Form,
  Input as InputAntd,
} from "antd";

import { ReactComponent as BackIcon } from "../../assets/icons/back-icon.svg";
import { ButtonPrimary } from "components/Button";
import React from "react";
import styled from "styled-components";
import { useAuth } from "contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const goToPage = (page) => {
    navigate(page, { replace: true });
  };
  const { login } = useAuth();

  const onLogin = (event) => {
    login(event?.username);
    navigate("/home", { replace: true });
  };

  return (
    <Wrapper>
      <LeftWrapper>
        <Carousel autoplay className="ml-[4rem]">
          <div className="grid w-[60%]">
            <BigTitle>
              Selamat datang, Rekans!
            </BigTitle>
            <p className="w-[25%] text-[18px] text-white">
              Tetap semangat dan selamat bekerja!
            </p>
          </div>
          <BigTitle>Mari semangat!</BigTitle>
          <BigTitle>Bekerja</BigTitle>
        </Carousel>
      </LeftWrapper>
      <RightWrapper>
        <div className="space" onClick={() => goToPage("/home")}>
          <BackIcon className="login-back-icon"></BackIcon>
          <p className="label-back">Kembali</p>
        </div>
        <LoginWrapper>
          <LoginContent>
            <div className="login-header">
              <p>
                <span className="title-font">Employe</span>
                <span className="title-font title-red">Corner</span>
              </p>
              <p className="title-font">Login Wellness Portal</p>
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
              <p className="text-[#FF0000] font-bold mb-[16px]">
                Lupa password?
              </p>
              <Form.Item>
                <ButtonPrimary htmlType="submit" className="w-full h-[42px]">
                  Lanjut
                </ButtonPrimary>
              </Form.Item>
            </Form>
            <div className="flex gap-[4px]">
              <p className="text-[#1E1E1E] text-[16px]">Belum memiliki akun?</p>
              <p className="text-[#FF0000] text-[16px] font-semibold cursor-pointer">
                Register disini
              </p>
            </div>
          </LoginContent>
        </LoginWrapper>
      </RightWrapper>
    </Wrapper>
  );
};

export default LoginPage;

const LeftWrapper = styled.div`
  width: 60vw;
  background-color: red;
  padding: 48px 48px 24px 24px;
  height: 100vh;
  @media screen and (max-width: 768px) {
    width: 100vw;
    order: 2;
    padding: 12px;
    height: 250px;
    padding: 24px;
  }
`;

const RightWrapper = styled.div`
  width: 40vw;
  background-color: white;
  padding: 24px;
  height: 100vh;
  @media screen and (max-width: 768px) {
    width: 100vw;
    order: 1;
    padding: 24px;
  }
`;

const BigTitle = styled.p`
  font-size: 64px;
  font-weight: 700;
  color: white;
  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`;

const Wrapper = styled.div`
  height: 100vh !important;
  display: flex;
  @media screen and (max-width: 768px) {
    display: grid;
  }
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

const Carousel = styled(CarouselAntd)`
  > .slick-dots li button {
    width: 6px;
    height: 6px;
    border-radius: 100%;
  }
  > .slick-dots li.slick-active button {
    width: 7px;
    height: 7px;
    border-radius: 100%;
    background: white;
  }
  > .slick-dots {
    margin-top: 16px;
    justify-content: start;
  }
  > .slick-dots-bottom {
    bottom: unset;
  }
`;
