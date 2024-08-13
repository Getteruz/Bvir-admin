import React from "react";
import styled from "styled-components";
import "./auth.css";
import { Flex } from "../Utlis";
import { Logo } from "../../assets/img/img";
import UseInput from "../../hooks/useInput";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
const Box = styled.div`
  width: 100% !important;
  padding: 133px 839px 270px 181px;
`;
const LoginCard = styled(Flex)`
  padding: 50px 0px 83px 54px;
  width: 420px;
  height: 497px;
  flex-shrink: 0;
  border-radius: 2px;
  background: rgba(18, 18, 18, 0.2);
  backdrop-filter: blur(82px);
  flex-direction: column;
  gap: 48px;
`;
const Logos = styled(Flex)`
  gap: 8px;
  align-items: center;
`;
const Texts = styled(Flex)`
  gap: 4px;
  flex-direction: column;
`;
const Text1 = styled.h4`
  opacity: 0.6;
  color: var(--Withe, #fff);
  font-family: Open Sans;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
`;
const Text2 = styled.h3`
  color: var(--Withe, #fff);
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 15.396px; /* 128.3% */
  text-transform: uppercase;
  width: 224.128px;
`;
const InputBox = styled(Flex)`
  flex-direction: column;
  gap: 11px;
`;
const Label = styled.label`
  color: var(--Withe, #fff);
  font-family: Overpass;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const Input = styled.input`
  background-color: transparent;
  border: none;
  width: 269px;
  border-bottom: 1px solid rgb(110, 113, 58);
  color: var(--Withe, #fff);
  font-family: Overpass;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  outline: none;
  padding-bottom: 13px;
  cursor: pointer;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 55px;
`;
const Inputs = styled(Flex)`
  gap: 20px;
  flex-direction: column;
`;
const Btn = styled.div`
  color: var(--Withe, #fff);
  text-align: center;
  font-family: Overpass;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-decoration-line: underline;
  padding: 9px 28px;
  border-radius: 4px;
  background: #6c9b31;
  cursor: pointer;
`;
const Auth = () => {
  const [state, setState] = React.useState([]);

  const [cookies, setCookie] = useCookies([
    "refresh_token_user",
    "access_token_user",
  ]);
  const authB = {
    login: "",
    password: "",
  };
  const { value, changeValue } = UseInput(authB);
  var navigate = useNavigate();
  if (localStorage.getItem("token")) {
    navigate("/dash");
    localStorage.getItem("token");
  }
  async function ok() {
    try {
      await axios
        .post("https://api.agroxizmatlar.uz/auth/login", value)
        .then((res) => {
          if (res.status === 200) {
            localStorage.setItem("token", JSON.stringify(res.data));
            setState(res.data);
            setCookie("refresh_token_user", res?.data?.refreshToken, {
              path: "/",
            });
            setCookie("access_token_user", res?.data?.accessToken, {
              path: "/",
            });
            navigate("/dash");
            // document.cookie = JSON.stringify(res.data.accessToken);
            // window.location.href = "/dash";
          }
        });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Box className="box">
      <LoginCard>
        <Logos>
          <img src={Logo} alt="" />
          <Texts>
            <Text1>Qishloq xo'jaligi vazirligi huzuridagi</Text1>
            <Text2>Qishloq xo'jaligida xizmatlar ko'rsatish agentligi</Text2>
          </Texts>
        </Logos>
        <Form>
          <Inputs>
            <InputBox>
              <Label>Login</Label>
              <Input
                name="login"
                onChange={changeValue}
                placeholder="username"
              />
            </InputBox>
            <InputBox>
              <Label>Password</Label>
              <Input
                type="password"
                placeholder="password"
                name="password"
                onChange={changeValue}
              />
            </InputBox>
          </Inputs>
          <Btn onClick={() => ok()}>Войти</Btn>
        </Form>
      </LoginCard>
    </Box>
  );
};

export default Auth;
