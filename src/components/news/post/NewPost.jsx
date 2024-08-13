import React from "react";
import Topbar from "../../library/Topbar";
import styled from "styled-components";
import { Flex } from "../../Utlis";
import { Priceteg } from "../../../assets/img/img";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addElement } from "../../../config/news";
import UseInput from "../../../hooks/useInput";
import LangBox from "../../library/LangBox";
import FileInput from "../../library/FileInput";
import { Outlet } from "react-router-dom";
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
const NewPost = () => {
  return (
    <Content>
      <Topbar text1={"| Yangiliklar"} />
      <Box>
        <LangBox />
        <Outlet />
      </Box>
    </Content>
  );
};

export default NewPost;
