import React from "react";
import { Flex } from "../../components/Utlis.js";
import styled from "styled-components";
import Head from "../../components/vacancy2/get/Head.jsx";
import VacancyGet2 from "../../components/vacancy2/get/VacancyGet.jsx";

const Div = styled(Flex)`
  width: 100%;
  flex-direction: column;
`;
const VacancysGet2 = () => {
  return (
    <Div>
      <Head />
      <VacancyGet2 />
    </Div>
  );
};

export default VacancysGet2;
