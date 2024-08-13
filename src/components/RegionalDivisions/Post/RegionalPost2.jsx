import React from "react";
import Topbar from "../../library/Topbar";
import { Flex } from "../../Utlis";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import UseInput from "../../../hooks/useInput";
import { addElement } from "../../../config/reigional2";
import LangBox from "../../library/LangBox";
import { Outlet } from "react-router-dom";
const Content = styled(Flex)`
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;
const Box = styled(Flex)`
  flex-direction: column;
  gap: 20px;
  padding-left: 38px;
  padding-right: 91px;
  width: 100%;
`;
const Bottom = styled(Flex)`
  gap: 20px;
  /* width: 100%; */
  /* justify-content: space-between; */
`;
const InputBox = styled(Flex)`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Left = styled(Flex)`
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;
const Right = styled(Flex)`
  border-radius: 3px;
  border: 1px solid #e5e6e6;
  background: #f5f5f6;
  width: 212px;
  padding: 20px 15px 34px 15px;
  flex-direction: column;
  gap: 8px;
`;
const Label2 = styled.label`
  color: #444;
  font-family: Overpass;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.75px;
`;
const Label = styled.label`
  color: #444;
  font-family: Overpass;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.24px;
  opacity: 0.7;
`;
const Input1 = styled.input`
  width: 182px;
  height: 35px;
  border-radius: 3px;
  border: 1px solid #ddd;
  background: #f5f5f6;
  padding: 10px;
`;
const Input2 = styled.input`
  width: 256px;
  height: 40px;
  border-radius: 3px;
  border: 1px solid #ddd;
  background: #f5f5f6;
  padding: 13px 10px 12px 10px;
`;
const Input3 = styled.input`
  width: 806px;
  height: 40px;
  border-radius: 3px;
  border: 1px solid #ddd;
  background: #f5f5f6;
  padding: 13px 10px 12px 10px;
`;
const Inputs = styled(Flex)`
  gap: 19px;
  justify-content: space-between;
  width: 100%;
`;

const RegionalPost2 = () => {
  const dispatch = useDispatch();
  const obj = {
    phone: "",
    gmail: "",
    telegram: "",
    twitter: "",
    linkedin: "",
    facebook: "",
    instagram: "",
  };
  const { value, changeValue } = UseInput(obj);
  React.useEffect(() => {
    dispatch(addElement(value));
  }, [value]);
  return (
    <Content>
      <Topbar text1={"| Hududiy Bo'linmalar"} />
      <Box>
        <LangBox />
        <Bottom>
          <Outlet />
          <InputBox>
            <Label>Asosiy sahifalar</Label>
            <Right>
              <Label2>Telefon</Label2>
              <Input1
                placeholder="+998"
                name={"phone"}
                onChange={changeValue}
              />
              <Label2>E-mail</Label2>
              <Input1
                placeholder="gmail"
                name={"gmail"}
                onChange={changeValue}
              />
              <Label2>Telegram</Label2>
              <Input1
                placeholder="t.me/"
                name={"telegram"}
                onChange={changeValue}
              />
              <Label2>Facebook</Label2>
              <Input1
                placeholder="Facebook"
                name={"twitter"}
                onChange={changeValue}
              />
              <Label2>Twitter</Label2>
              <Input1
                placeholder="Twitter"
                name={"linkedin"}
                onChange={changeValue}
              />
              <Label2>Linkedin</Label2>
              <Input1
                placeholder="Linkedin"
                name={"facebook"}
                onChange={changeValue}
              />
              <Label2>Instagram</Label2>
              <Input1
                placeholder="Instagram"
                name={"instagram"}
                onChange={changeValue}
              />
            </Right>
          </InputBox>
        </Bottom>
      </Box>
    </Content>
  );
};

export default RegionalPost2;
