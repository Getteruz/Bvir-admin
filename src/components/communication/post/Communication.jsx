import React from "react";
import Topbar from "../../library/Topbar";
import { Flex } from "../../Utlis";
import styled from "styled-components";
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
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 17px;
`;
const Communication = () => {
  return (
    <Content>
      <Topbar text1={"| Aloqa vositalari"} />
      <Box>
        <LangBox />
        <Form>
          <Outlet />
        </Form>
      </Box>
    </Content>
  );
};

export default Communication;
