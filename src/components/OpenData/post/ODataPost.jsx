import React from "react";
import Topbar from "../../library/Topbar";
import styled from "styled-components";
import { Flex } from "../../Utlis";
import LangBox from "../../library/LangBox";
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

const ODataPost = () => {
  return (
    <Content>
      <Topbar text1={"| Ochiq malumotlar"} />
      <Box>
        <LangBox />
        <Outlet />
      </Box>
    </Content>
  );
};

export default ODataPost;
