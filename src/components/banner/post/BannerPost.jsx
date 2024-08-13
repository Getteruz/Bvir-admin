import React from "react";
import Topbar from "../../library/Topbar";
import styled from "styled-components";
import { Flex } from "../../Utlis";
import "./style.css";
import LangBox from "../../library/LangBox";
import { Link, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addElement } from "../../../config/banner";
const Content = styled(Flex)`
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;
const Box = styled(Flex)`
  flex-direction: column;
  gap: 27px;
  padding-left: 38px;
  padding-right: 91px;
  width: 100%;
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
const Language = styled(Flex)`
  border-radius: 3px;
  border: 1px solid #e5e6e6;
  background: #f2f3f4;
  width: 1038px;
  height: 32px;
  flex-shrink: 0;
  padding: 0px 0px 0px 15px;
`;

const InputBox = styled(Flex)`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const Btns = styled(Flex)`
  border-radius: 3px;
  border: 1px solid #e5e6e6;
  background: rgba(242, 243, 244, 0.8);
`;
const Btn = styled(Flex)`
  padding: 12px 34px;
  color: #000000;
  font-family: Overpass;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.24px;
  border-radius: 2px;
`;
const BannerPost = () => {


  return (
    <Content>
      <Topbar text1={"| Banner"} />
      <Box>
        <LangBox />
       
        <Outlet />
      </Box>
    </Content>
  );
};

export default BannerPost;
