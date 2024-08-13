import React from "react";
import styled from "styled-components";
import "./style.css";
import Topbar from "../../library/Topbar";
import { Flex } from "../../Utlis";
import { Outlet } from "react-router-dom";
import LangBox from "../../library/LangBox";
const Content = styled(Flex)`
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;
const Top = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Box = styled(Flex)`
  flex-direction: column;
  gap: 30px;
  padding-left: 38px;
  padding-right: 91px;
`;

const AgencyPost = () => {
  return (
    <Content>
      <Topbar text1={"| Agentlik haqida"}/>
      <Box>
        <Top>
          <LangBox />
          <Outlet />
        </Top>
      </Box>
    </Content>
  );
};

export default AgencyPost;
