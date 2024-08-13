import React from "react";
import Topbar from "../../library/Topbar";
import { Flex } from "../../Utlis";
import styled from "styled-components";
import { Link, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import UseInput from "../../../hooks/useInput";
import { addElement } from "../../../config/leader";
import LangBox from "../../library/LangBox";
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
const Language = styled(Flex)`
  border-radius: 3px;
  border: 1px solid #e5e6e6;
  background: #f2f3f4;
  width: 1038px;
  height: 32px;
  flex-shrink: 0;
  padding: 0px 0px 0px 15px;
`;
const LangBtn = styled(Flex)`
  text-align: center;
  font-family: Overpass;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 7px 15px;
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

const LeaderShPost = () => {
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
    console.log(value);
    dispatch(addElement(value));
  }, [value]);
  return (
    <Content>
      <Topbar text1={"| Rahbariyat"}/>
      <Box>
        <LangBox />
        <Bottom>
          <Outlet />
          <InputBox>
            <Label>Asosiy sahifalar</Label>
            <Right>
              <Label2>Telefon</Label2>
              <Input1 placeholder="+998" name="phone" onChange={changeValue} />
              <Label2>Gmail</Label2>
              <Input1 placeholder="gmail" name="gmail" onChange={changeValue} />
              <Label2>Telegram</Label2>
              <Input1
                placeholder="t.me/"
                name="telegram"
                onChange={changeValue}
              />
              <Label2>Twitter</Label2>
              <Input1
                placeholder="twitter"
                name="twitter"
                onChange={changeValue}
              />
              <Label2>Linkedin</Label2>
              <Input1
                placeholder="linkedin"
                name="linkedin"
                onChange={changeValue}
              />
              <Label2>Facebook</Label2>
              <Input1
                placeholder="facebook"
                name="facebook"
                onChange={changeValue}
              />
              <Label2>Instagram</Label2>
              <Input1
                placeholder="instagram"
                name="instagram"
                onChange={changeValue}
              />
            </Right>
          </InputBox>
        </Bottom>
      </Box>
    </Content>
  );
};

export default LeaderShPost;

// {
//   taskRu: "...",
//   firstNameRu: "...",
//   lastNameRu: "...",
//   fatherNameRu: "...",
//   positionRu: "...",

// }
