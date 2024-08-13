import React from "react";
import Topbar from "../../library/Topbar";
import styled from "styled-components";
import { Flex } from "../../Utlis";
import { Priceteg } from "../../../assets/img/img";
import { Link, Outlet } from "react-router-dom";
import LangBox from "../../library/LangBox";
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

const VacancyEdit = () => {
  return (
    <Content>
      <Topbar text1={"| Bo'sh ish o'rinlari"} />
      <Box>
        <LangBox />
        <Outlet />
      </Box>
    </Content>
  );
};

export default VacancyEdit;
